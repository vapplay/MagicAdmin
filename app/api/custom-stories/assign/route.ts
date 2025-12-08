
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { userId, audioId, historyId, childName } = body;

        if (!userId || !audioId || !historyId || !childName) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Create a completed UserStory (assignment)
        const assignment = await prisma.userStory.create({
            data: {
                userId,
                historyId,
                audioId,
                requestedName: childName, // Use the audio's child name
                status: 'COMPLETED',
                // For direct assignment we might not have payment info, that's fine
            }
        });

        return NextResponse.json(assignment);
    } catch (error) {
        console.error('Error assigning custom story to user:', error);
        return NextResponse.json({ error: 'Error assigning story' }, { status: 500 });
    }
}
