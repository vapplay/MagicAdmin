
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Vibrant } from "node-vibrant/node";
import { IMAGE_URL } from '@/util/config';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const active = searchParams.get('active');

    const where: any = {};
    if (type) where.type = Number(type);
    // Optional: if 'active' is passed, filter by active status. Default might be to show all or handled elsewhere.
    if (active === 'true') where.active = true;

    try {
        const histories = await prisma.history.findMany({
            where,
            orderBy: {
                createdAt: 'desc',
            },
        });
        return NextResponse.json({
            data: histories,
            message: 'Histories fetched successfully',
            status: 200
        });
    } catch (error) {
        console.error('Error fetching histories:', error);
        return NextResponse.json(
            { error: 'Error fetching histories' },
            { status: 500 }
        );
    }
}

import { uploadFileToR2 } from '@/lib/storage';

export async function POST(request: Request) {
    try {
        const contentType = request.headers.get("content-type") || "";
        let body: any = {};
        let uploadedCover = null;
        let uploadedSongName = null;

        if (contentType.includes("multipart/form-data")) {
            const formData = await request.formData();

            // Extract basic fields
            body = {
                name_es: formData.get("name_es")?.toString() || "",
                name_en: formData.get("name_en")?.toString() || "",
                name_pt: formData.get("name_pt")?.toString() || "",
                description_es: formData.get("description_es")?.toString() || "",
                description_en: formData.get("description_en")?.toString() || "",
                description_pt: formData.get("description_pt")?.toString() || "",
                type: Number(formData.get("type")),
                active: formData.get("active") === "true",
                isPremium: formData.get("isPremium") === "true",
                youtube: formData.get("youtube")?.toString() || null,
            };

            // Handle Files
            const coverFile = formData.get("cover") as File | null;
            if (coverFile && coverFile.size > 0) {
                uploadedCover = await uploadFileToR2(coverFile, "images");
                body.cover = uploadedCover;
            } else {
                // form might send string if not changed? but for create it's usually file or empty string
                const coverStr = formData.get("cover");
                if (typeof coverStr === 'string' && coverStr) body.cover = coverStr;
            }

            const posterFile = formData.get("poster") as File | null;
            if (posterFile && posterFile.size > 0) {
                const posterName = await uploadFileToR2(posterFile, "images");
                body.poster = posterName;
            }

            // Handle Songs
            // We want a consistent name for the song across buckets if possible, or we follow a pattern.
            // If we are creating a new story, we generate a name.
            // But we have 3 independent files. 
            // If we use the same filename (e.g. valid-song-name.mp3), we can store it in DB.
            // We will use the name of the ES song as the master name if present, or generate one.

            const songEs = formData.get("song_es") as File | null;
            const songEn = formData.get("song_en") as File | null;
            const songPt = formData.get("song_pt") as File | null;

            let masterSongName = "";
            if (songEs && songEs.size > 0) {
                masterSongName = `${Date.now()}-${songEs.name.replace(/\s+/g, '-')}`;
            } else if (songEn && songEn.size > 0) {
                masterSongName = `${Date.now()}-${songEn.name.replace(/\s+/g, '-')}`;
            }

            if (masterSongName) {
                // Upload ES
                if (songEs && songEs.size > 0) {
                    await uploadFileToR2(songEs, "song-es", masterSongName);
                }
                // Upload EN
                if (songEn && songEn.size > 0) {
                    await uploadFileToR2(songEn, "song-en", masterSongName); // Use same name!
                }
                // Upload PT
                if (songPt && songPt.size > 0) {
                    await uploadFileToR2(songPt, "song-pt", masterSongName);
                }
                uploadedSongName = masterSongName;
                body.song = masterSongName;
            }

        } else {
            body = await request.json();
            uploadedCover = body.cover;
        }

        const colors: any = {};
        if (body.cover && typeof body.cover === 'string') {
            try {
                const imageUrl = body.cover.startsWith('http') ? body.cover : `${IMAGE_URL}${body.cover}`;
                console.log("Extracting colors from (POST):", imageUrl);
                const palette = await Vibrant.from(imageUrl).getPalette();
                colors.dominant = palette.Vibrant?.hex;
                colors.vibrant = palette.Vibrant?.hex;
                colors.darkVibrant = palette.DarkVibrant?.hex;
                colors.lightVibrant = palette.LightVibrant?.hex;
                colors.darkMuted = palette.DarkMuted?.hex;
                colors.lightMuted = palette.LightMuted?.hex;
                colors.muted = palette.Muted?.hex;
            } catch (e) {
                console.error("Error extracting colors (POST):", e);
            }
        }

        const newStory = await prisma.history.create({
            data: {
                name_es: body.name_es,
                name_en: body.name_en,
                name_pt: body.name_pt,
                description_es: body.description_es,
                description_en: body.description_en,
                description_pt: body.description_pt,
                cover: body.cover,
                poster: body.poster,
                type: Number(body.type),
                active: body.active ?? false,
                isPremium: body.isPremium ?? false,
                song: body.song || uploadedSongName,
                youtube: body.youtube,
                ...colors
            }
        });
        return NextResponse.json(newStory, { status: 201 });
    } catch (error) {
        console.error('Error creating story:', error);
        return NextResponse.json(
            { error: 'Error creating story' },
            { status: 500 }
        );
    }
}
