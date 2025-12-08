
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, name, image, googleId } = body;

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Upsert user
        // We use email as unique identifier.
        // If user exists, we update lastLogin (if we had such a field) or just return.
        // If not, we create.

        let user = await prisma.user.findUnique({
            where: { email },
            include: {
                subscription: true,
                stories: {
                    include: {
                        history: true,
                        audio: true
                    },
                    orderBy: { createdAt: 'desc' }
                }
            }
        });

        if (!user) {
            user = await prisma.user.create({
                data: {
                    email,
                    name: name || email.split('@')[0],
                    profileImage: image,
                    isPremium: false, // Default
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
        } else {
            // Optional: Update profile image or name if changed?
            // For now, let's keep it simple or update if provided
            if (image && user.profileImage !== image) {
                user = await prisma.user.update({
                    where: { id: user.id },
                    data: { profileImage: image },
                    include: {
                        subscription: true,
                        stories: {
                            include: {
                                history: true,
                                audio: true
                            },
                            orderBy: { createdAt: 'desc' }
                        }
                    }
                });
            }
        }

        // Format response similar to what the app expects
        // "returns the user with everything and their personalized stories"

        const formattedStories = user.stories.map(s => ({
            id: s.id,
            status: s.status,
            requestedName: s.requestedName,
            createdAt: s.createdAt,
            history: s.history,
            audio: s.audio ? {
                id: s.audio.id,
                url: s.audio.url,
                childName: s.audio.childName,
                duration: s.audio.duration
            } : null
        }));

        return NextResponse.json({
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                image: user.profileImage,
                isPremium: user.isPremium,
                subscription: user.subscription,
            },
            stories: formattedStories,
            token: "mock-jwt-token-if-needed" // If you implemented real JWT
        });

    } catch (error) {
        console.error('Error in login:', error);
        return NextResponse.json({ error: 'Login failed' }, { status: 500 });
    }
}
