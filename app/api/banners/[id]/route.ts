
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

        const title_es = formData.get('title_es')?.toString();
        const title_en = formData.get('title_en')?.toString();
        const title_pt = formData.get('title_pt')?.toString();
        const description_es = formData.get('description_es')?.toString();
        const description_en = formData.get('description_en')?.toString();
        const description_pt = formData.get('description_pt')?.toString();

        const isPromoStr = formData.get('isPromo');
        const externalUrl = formData.get('externalUrl')?.toString();
        const historyId = formData.get('historyId')?.toString();

        const dataToUpdate: any = {};

        if (title_es !== undefined) dataToUpdate.title_es = title_es || null;
        if (title_en !== undefined) dataToUpdate.title_en = title_en || null;
        if (title_pt !== undefined) dataToUpdate.title_pt = title_pt || null;
        if (description_es !== undefined) dataToUpdate.description_es = description_es || null;
        if (description_en !== undefined) dataToUpdate.description_en = description_en || null;
        if (description_pt !== undefined) dataToUpdate.description_pt = description_pt || null;
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
