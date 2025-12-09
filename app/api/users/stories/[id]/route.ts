
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(request: Request, props: { params: Promise<{ id: string }> }) {
    try {
        const params = await props.params;
        const id = params.id;

        if (!id) {
            return NextResponse.json({ error: 'Missing story ID' }, { status: 400 });
        }

        // Check if exists
        const userStory = await prisma.userStory.findUnique({
            where: { id }
        });

        if (!userStory) {
            return NextResponse.json({ error: 'Story assignment not found' }, { status: 404 });
        }

        // Delete the assignment
        await prisma.userStory.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting user story assignment:', error);
        return NextResponse.json({ error: 'Error deleting assignment' }, { status: 500 });
    }
}
