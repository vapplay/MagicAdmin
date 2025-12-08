
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyGoogleSubscription } from '@/lib/google';

const ANDROID_PACKAGE_NAME = process.env.ANDROID_PACKAGE_NAME || "com.vapplay.MagiCuentos";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { userId } = body;

        if (!userId) {
            return NextResponse.json({ error: 'UserId is required' }, { status: 400 });
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                subscription: true,
            }
        });

        if (!user || !user.subscription) {
            return NextResponse.json({ error: 'User or subscription not found' }, { status: 404 });
        }

        const { purchaseToken, productId, platform } = user.subscription;

        if (platform !== 'GOOGLE_PLAY') {
            // For now, only Google Play verification is implemented
            // If we had iOS, we would switch here
            return NextResponse.json({ message: 'Not a Google Play subscription', active: user.isPremium });
        }

        if (!purchaseToken) {
            return NextResponse.json({ error: 'No purchase token found' }, { status: 400 });
        }

        // Verify with Google
        try {
            const subscriptionData = await verifyGoogleSubscription(
                ANDROID_PACKAGE_NAME,
                productId,
                purchaseToken
            );

            // subscriptionData.expiryTimeMillis is a string (ms since epoch)
            const expiryTimeMillis = subscriptionData.expiryTimeMillis ? parseInt(subscriptionData.expiryTimeMillis) : 0;
            const now = Date.now();
            const isActive = expiryTimeMillis > now;
            const autoRenewing = subscriptionData.autoRenewing ?? false;

            // Update Database
            // We use a transaction to update both User and Subscription
            await prisma.$transaction(async (tx) => {
                // Update Subscription
                await tx.subscription.update({
                    where: { id: user.subscription!.id },
                    data: {
                        isActive,
                        autoRenewing,
                        // We could also update expiry date if we had a field for it in Subscription model, 
                        // but currently User has premiumEnd.
                    }
                });

                // Update User
                // If it's active, set isPremium to true and update end date
                // If not active, set isPremium to false
                await tx.user.update({
                    where: { id: userId },
                    data: {
                        isPremium: isActive,
                        premiumEnd: new Date(expiryTimeMillis)
                    }
                });
            });

            return NextResponse.json({
                success: true,
                isPremium: isActive,
                expiryDate: new Date(expiryTimeMillis).toISOString(),
                autoRenewing
            });

        } catch (googleError: any) {
            console.error("Google API Error:", googleError);

            // If validation fails (e.g. invalid token), we might want to mark as inactive or just return error
            // For now, return error but don't disable user unless we are sure.
            // However, 400/404 from Google likely means invalid/expired token or canceled subscription that is purged.

            return NextResponse.json({ error: 'Failed to verify with Google', details: googleError.message }, { status: 502 });
        }

    } catch (error) {
        console.error('Error checking subscription:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
