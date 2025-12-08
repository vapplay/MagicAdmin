import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '50');
        const search = searchParams.get('search') || '';

        const skip = (page - 1) * limit;

        const where: any = {};
        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { email: { contains: search, mode: 'insensitive' } }
            ];
        }

        const [users, total] = await Promise.all([
            prisma.user.findMany({
                where,
                include: {
                    subscription: true,
                    stories: {
                        include: {
                            history: true
                        },
                        orderBy: {
                            createdAt: 'desc'
                        }
                    }
                },
                orderBy: {
                    createdAt: 'desc'
                },
                take: limit,
                skip: skip
            }),
            prisma.user.count({ where })
        ]);

        const formattedUsers = users.map(user => {
            const hasActiveSubscription = user.isPremium || (user.subscription && user.subscription.isActive);

            // Determine membership type
            let membership = 'NONE';
            if (hasActiveSubscription) {
                if (user.subscription?.interval) {
                    membership = user.subscription.interval;
                } else if (user.isPremium) {
                    membership = 'MONTHLY';
                }
            }

            const userStories = user.stories.map(us => ({
                id: us.id,
                title: us.history?.name_es || "Cuento sin título",
                date: us.createdAt.toISOString().split('T')[0]
            }));

            return {
                id: user.id,
                name: user.name || "Sin Nombre",
                email: user.email,
                profileImage: user.profileImage,
                membership: membership,
                hasAssignedTales: userStories.length > 0,
                stories: userStories,
                createdAt: user.createdAt.toISOString(),
                premiumSince: user.subscription?.createdAt?.toISOString() || null,
                isPremium: user.isPremium
            };
        });

        return NextResponse.json({
            data: formattedUsers,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}
