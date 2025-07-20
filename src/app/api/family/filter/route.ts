import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET: Filter families by country
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const country = searchParams.get('country');
    console.log('[GET /api/family/filter] country:', country, 'headers:', req.headers);
    if (!country) {
        return NextResponse.json({ error: 'Missing required query param: country' }, { status: 400 });
    }
    const userId = req.headers.get('x-user-id') || 'user-1';
    try {
        const families = await prisma.family.findMany({
            where: {
                OR: [
                    { ownerId: userId },
                    { privacyLevel: 'PUBLIC' },
                ],
                countryOfOrigin: {
                    contains: country,
                    mode: 'insensitive',
                },
            },
        });
        return NextResponse.json(families);
    } catch (error) {
        console.error('[GET /api/family/filter] error:', error);
        return NextResponse.json({ error: 'Failed to filter families', details: error }, { status: 500 });
    }
}
