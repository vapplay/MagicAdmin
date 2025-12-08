
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Vibrant } from "node-vibrant/node";
import { IMAGE_URL } from '@/util/config';


import { uploadFileToR2 } from '@/lib/storage';

export async function PATCH(
    request: Request,
    props: { params: Promise<{ id: string }> }
) {
    try {
        const params = await props.params;
        const id = params.id;
        const contentType = request.headers.get("content-type") || "";
        let body: any = {};
        let uploadedCover = null;
        let uploadedSongName = null;

        if (contentType.includes("multipart/form-data")) {
            const formData = await request.formData();

            // Build body from formData, keeping existing values if not present
            body = {};
            const keys = ["name_es", "name_en", "name_pt", "description_es", "description_en", "description_pt", "type", "youtube"];
            keys.forEach(key => {
                const val = formData.get(key);
                if (val !== null && val !== undefined) body[key] = key === "type" ? Number(val) : val.toString();
            });

            if (formData.has("active")) body.active = formData.get("active") === "true";
            if (formData.has("isPremium")) body.isPremium = formData.get("isPremium") === "true";

            // Handle Files
            const coverFile = formData.get("cover") as File | null;
            if (coverFile && coverFile.size > 0) {
                uploadedCover = await uploadFileToR2(coverFile, "images");
                body.cover = uploadedCover;
            } else {
                const coverStr = formData.get("cover");
                if (typeof coverStr === 'string' && coverStr) body.cover = coverStr;
            }

            const posterFile = formData.get("poster") as File | null;
            if (posterFile && posterFile.size > 0) {
                const posterName = await uploadFileToR2(posterFile, "images");
                body.poster = posterName;
            }

            const songEs = formData.get("song_es") as File | null;
            const songEn = formData.get("song_en") as File | null;
            const songPt = formData.get("song_pt") as File | null;

            // Strategy: If ANY song is updated, we generate a new name for the 'song' field? 
            // Or we check if we can reuse? 
            // Simplifying: If any song file is uploaded, we update 'song' field with new base name.
            let masterSongName = "";
            if (songEs && songEs.size > 0) {
                masterSongName = `${Date.now()}-${songEs.name.replace(/\s+/g, '-')}`;
            } else if (songEn && songEn.size > 0) {
                masterSongName = `${Date.now()}-${songEn.name.replace(/\s+/g, '-')}`;
            } else if (songPt && songPt.size > 0) {
                masterSongName = `${Date.now()}-${songPt.name.replace(/\s+/g, '-')}`;
            }

            if (masterSongName) {
                if (songEs && songEs.size > 0) await uploadFileToR2(songEs, "song-es", masterSongName);
                if (songEn && songEn.size > 0) await uploadFileToR2(songEn, "song-en", masterSongName);
                if (songPt && songPt.size > 0) await uploadFileToR2(songPt, "song-pt", masterSongName);
                uploadedSongName = masterSongName;
                body.song = masterSongName; // This updates the DB field
            }
        } else {
            body = await request.json();
            uploadedCover = body.cover;
        }

        const updateData: any = { ...body };

        // Remove undefined/nulls if any (though body construction above handles it mostly)
        // But for formData, we only added if present. for JSON, we took whole body.

        // Handle Color Extraction for Cover
        if (body.cover && typeof body.cover === 'string') {
            // Only if cover CHANGED? We can't easily know if it changed without DB lookup, 
            // but if it's sent in body, we assume update or at least verify.
            // If valid URL/Path
            try {
                const imageUrl = body.cover.startsWith('http') ? body.cover : `${IMAGE_URL}${body.cover}`;
                console.log("Extracting colors from:", imageUrl);
                const palette = await Vibrant.from(imageUrl).getPalette();

                updateData.dominant = palette.Vibrant?.hex;
                updateData.vibrant = palette.Vibrant?.hex;
                updateData.darkVibrant = palette.DarkVibrant?.hex;
                updateData.lightVibrant = palette.LightVibrant?.hex;
                updateData.darkMuted = palette.DarkMuted?.hex;
                updateData.lightMuted = palette.LightMuted?.hex;
                updateData.muted = palette.Muted?.hex;
            } catch (e) {
                console.error("Error extracting colors with Vibrant:", e);
            }
        }

        // Colors from body (manual override) should take precedence? Or vibrant?
        // Let's assume calculated takes precedence if cover provided.
        // But if user manually sent colors in JSON?
        if (body.dominant) updateData.dominant = body.dominant; // Allow override
        // ... (skipping verbose overrides, assume if cover is set, vibrant runs)

        const updatedHistory = await prisma.history.update({
            where: { id },
            data: updateData,
        });

        return NextResponse.json(updatedHistory);
    } catch (error) {
        console.error('Error updating history:', error);
        return NextResponse.json(
            { error: 'Error updating history' },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: Request,
    props: { params: Promise<{ id: string }> }
) {
    try {
        const params = await props.params;
        const id = params.id;

        await prisma.history.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'History deleted successfully' });
    } catch (error) {
        console.error('Error deleting history:', error);
        return NextResponse.json(
            { error: 'Error deleting history' },
            { status: 500 }
        );
    }
}
