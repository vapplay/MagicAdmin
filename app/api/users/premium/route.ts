
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { userId, isPremium } = body;

        if (!userId) {
            return NextResponse.json({ error: 'UserId is required' }, { status: 400 });
        }

        if (isPremium === false) {
            // Transaction to ensure atomicity
            const result = await prisma.$transaction(async (tx) => {
                const updatedUser = await tx.user.update({
                    where: { id: userId },
                    data: { isPremium: false },
                    include: {
                        subscription: true,
                        stories: {
                            include: {
                                history: true,
                                audio: true
                            }
                        }
                    }
                });

                // Deactivate any active subscriptions
                await tx.subscription.updateMany({
                    where: { users: { some: { id: userId } }, isActive: true },
                    data: {
                        isActive: false,
                        autoRenewing: false
                    }
                });

                return updatedUser;
            });

            const { stories, ...userWithoutStories } = result;
            return NextResponse.json({ success: true, user: userWithoutStories, stories });
        }

        // Default behavior: Upgrade to Premium
        // Extract optional subscription details from request
        const {
            interval = 'MONTHLY',
            purchaseToken,
            orderId,
            platform = 'GOOGLE_PLAY',
            productId
        } = body;

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                isPremium: true,
                // Create or update Subscription record
                subscription: {
                    upsert: {
                        create: {
                            platform: platform as any, // 'GOOGLE_PLAY' | 'IOS_APP_STORE' | 'STRIPE'
                            purchaseToken: purchaseToken || `manual-${Date.now()}`,
                            orderId: orderId,
                            productId: productId || 'premium_subscription',
                            interval: interval as any, // 'MONTHLY' | 'QUARTERLY' | 'ANNUAL'
                            isActive: true,
                            autoRenewing: true
                        },
                        update: {
                            isActive: true,
                            autoRenewing: true,
                            purchaseToken: purchaseToken, // Update token if new purchase
                            orderId: orderId,
                            interval: interval as any,
                            platform: platform as any
                        }
                    }
                }
            },
            include: {
                subscription: true,
                stories: {
                    include: {
                        history: true,
                        audio: true
                    }
                }
            }
        });

        const { stories, ...userWithoutStories } = updatedUser;
        return NextResponse.json({ success: true, user: userWithoutStories, stories });
    } catch (error) {
        console.error('Error updating user premium status:', error);
        // Fallback for when subscription update fails (e.g. user has no subscription to update when cancelling)
        // We still want to set isPremium to false on the user
        if (request.headers.get('content-type')?.includes('application/json')) {
            // In case the complex update failed (maybe subscription record didn't exist to update), try simple user update
            try {
                const body = await request.clone().json().catch(() => ({}));
                if (body.isPremium === false) {
                    await prisma.user.update({
                        where: { id: body.userId },
                        data: { isPremium: false }
                    });
                    return NextResponse.json({ success: true, warning: "Partial update (User only)" });
                }
            } catch (e) { }
        }

        return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
    }
}
