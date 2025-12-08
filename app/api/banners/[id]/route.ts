
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { uploadFileToR2 } from '@/lib/storage';

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const id = (await params).id;
        await prisma.appBanners.delete({
            where: { id },
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting banner:', error);
        return NextResponse.json(
            { error: 'Error deleting banner' },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const id = (await params).id;
        const formData = await request.formData();

        const title = formData.get('title')?.toString();
        const description = formData.get('description')?.toString();
        const isPromoStr = formData.get('isPromo');
        const externalUrl = formData.get('externalUrl')?.toString();
        const historyId = formData.get('historyId')?.toString();

        const dataToUpdate: any = {};

        if (title !== undefined) dataToUpdate.title = title;
        if (description !== undefined) dataToUpdate.description = description;
        if (isPromoStr !== null) dataToUpdate.isPromo = isPromoStr === 'true';
        if (externalUrl !== undefined) dataToUpdate.externalUrl = externalUrl || null;

        // If historyId is sent as empty string, it might mean remove connection?
        // We treat empty string as null.
        if (historyId !== undefined) {
            dataToUpdate.historyId = historyId ? historyId : null;
        }

        const imageFile = formData.get('playImage') as File | null;
        if (imageFile && imageFile.size > 0) {
            const playImage = await uploadFileToR2(imageFile, 'images');
            dataToUpdate.playImage = playImage;
        }

        const updatedBanner = await prisma.appBanners.update({
            where: { id },
            data: dataToUpdate,
        });

        return NextResponse.json(updatedBanner);
    } catch (error) {
        console.error('Error updating banner:', error);
        return NextResponse.json(
            { error: 'Error updating banner' },
            { status: 500 }
        );
    }
}
