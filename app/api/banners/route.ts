
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { uploadFileToR2 } from '@/lib/storage';

export async function GET() {
    try {
        const banners = await prisma.appBanners.findMany({
            include: {
                history: true,
            },
        });
        return NextResponse.json(banners);
    } catch (error) {
        console.error('Error fetching banners:', error);
        return NextResponse.json(
            { error: 'Error fetching banners' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const title = formData.get('title')?.toString() || '';
        const description = formData.get('description')?.toString() || '';
        const isPromo = formData.get('isPromo') === 'true';
        const externalUrl = formData.get('externalUrl')?.toString() || null;
        const historyId = formData.get('historyId')?.toString() || null;

        let playImage = null;

        const imageFile = formData.get('playImage') as File | null;
        if (imageFile && imageFile.size > 0) {
            playImage = await uploadFileToR2(imageFile, 'images');
        }

        const newBanner = await prisma.appBanners.create({
            data: {
                title,
                description,
                isPromo,
                externalUrl,
                historyId: historyId || null,
                playImage,
            },
        });

        return NextResponse.json(newBanner, { status: 201 });
    } catch (error) {
        console.error('Error creating banner:', error);
        return NextResponse.json(
            { error: 'Error creating banner' },
            { status: 500 }
        );
    }
}
