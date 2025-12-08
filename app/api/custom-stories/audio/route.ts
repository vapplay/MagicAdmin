
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { uploadFileToR2 } from '@/lib/storage';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const historyId = searchParams.get('historyId');
    const search = searchParams.get('search');

    try {
        const where: any = {};
        if (historyId) where.historyId = historyId;
        if (search) {
            where.childName = {
                contains: search
            };
        }

        const audios = await prisma.personalizedAudio.findMany({
            where,
            include: {
                history: {
                    select: { name_es: true, cover: true }
                },
                _count: {
                    select: { assignedTo: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json(audios);
    } catch (error) {
        console.error('Error fetching personalized audios:', error);
        return NextResponse.json({ error: 'Error fetching audios' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const childName = formData.get('childName')?.toString();
        const historyId = formData.get('historyId')?.toString();
        const audioFile = formData.get('audio') as File | null;
        const durationStr = formData.get('duration')?.toString();

        if (!childName || !historyId || !audioFile) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        const fileName = await uploadFileToR2(audioFile, 'song-es', `custom-${Date.now()}-${audioFile.name}`);

        const newAudio = await prisma.personalizedAudio.create({
            data: {
                childName,
                historyId,
                url: fileName,
                duration: durationStr ? parseInt(durationStr) : undefined,
            }
        });

        return NextResponse.json(newAudio);
    } catch (error) {
        console.error('Error creating personalized audio:', error);
        return NextResponse.json({ error: 'Error creating audio' }, { status: 500 });
    }
}
