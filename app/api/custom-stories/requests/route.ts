
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status'); // 'pending' or 'completed'
    const search = searchParams.get('search');

    try {
        const where: any = {};

        if (status === 'pending') {
            where.status = 'PROCESSING';
        } else if (status === 'completed') {
            where.status = 'COMPLETED';
        }

        if (search) {
            where.OR = [
                { requestedName: { contains: search } },
                { user: { name: { contains: search } } },
                { user: { email: { contains: search } } }
            ];
        }

        const requests = await prisma.userStory.findMany({
            where,
            include: {
                user: {
                    select: { name: true, email: true, profileImage: true }
                },
                history: {
                    select: { id: true, name_es: true, cover: true }
                },
                audio: true, // If assigned
            },
            orderBy: { createdAt: 'desc' }
        });

        // If asking for pending, returns count too? 
        // We can just return the array. The frontend can count.

        return NextResponse.json(requests);
    } catch (error) {
        console.error('Error fetching custom story requests:', error);
        return NextResponse.json({ error: 'Error fetching requests' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { userId, historyId, requestedName, purchaseToken, googleOrderId, orderId } = body;

        if (!userId || !historyId || !requestedName) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newRequest = await prisma.userStory.create({
            data: {
                userId,
                historyId,
                requestedName,
                purchaseToken, // Store purchase token
                googleOrderId: googleOrderId || orderId, // Store google order ID (accepting both mapings for flexibility)
                status: 'PROCESSING', // Initial status
            }
        });

        return NextResponse.json(newRequest, { status: 201 });
    } catch (error) {
        console.error('Error creating request:', error);
        return NextResponse.json({ error: 'Error creating request' }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    // Assign audio to request
    try {
        const body = await request.json();
        const { requestId, audioId } = body;

        if (!requestId || !audioId) {
            return NextResponse.json({ error: 'Missing requestId or audioId' }, { status: 400 });
        }

        const updatedRequest = await prisma.userStory.update({
            where: { id: requestId },
            data: {
                audioId,
                status: 'COMPLETED',
                updatedAt: new Date()
            },
            include: {
                audio: true,
                history: true,
                user: true
            }
        });

        return NextResponse.json(updatedRequest);
    } catch (error) {
        console.error('Error assigning audio:', error);
        return NextResponse.json({ error: 'Error assigning audio' }, { status: 500 });
    }
}
