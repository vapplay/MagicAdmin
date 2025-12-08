import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
    console.log("GET /api/config called");
    try {
        const config = await prisma.config.findFirst();
        console.log("Config fetched:", config ? "Found" : "Not Found");
        return NextResponse.json(config || {});
    } catch (error) {
        console.error("Error in GET /api/config:", error);
        return NextResponse.json({ error: 'Error fetching config' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const config = await prisma.config.findFirst();

        if (config) {
            const updated = await prisma.config.update({
                where: { id: config.id },
                data
            });
            return NextResponse.json(updated);
        } else {
            const created = await prisma.config.create({
                data
            });
            return NextResponse.json(created);
        }
    } catch (error) {
        return NextResponse.json({ error: 'Error updating config' }, { status: 500 });
    }
}
