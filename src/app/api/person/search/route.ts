import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET: Search people by name in a family
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const familyId = searchParams.get('familyId');
    const query = searchParams.get('query');
    console.log('[GET /api/person/search] familyId:', familyId, 'query:', query, 'headers:', req.headers);
    if (!familyId || !query) {
        return NextResponse.json({ error: 'Missing required query params: familyId, query' }, { status: 400 });
    }
    const userId = req.headers.get('x-user-id') || 'user-1';
    try {
        // Only allow if user owns the family or the family is public
        const family = await prisma.family.findFirst({
            where: {
                id: familyId,
                OR: [
                    { ownerId: userId },
                    { privacyLevel: 'PUBLIC' },
                ],
            },
        });
        if (!family) {
            return NextResponse.json({ error: 'Family not found or not authorized' }, { status: 404 });
        }
        const people = await prisma.person.findMany({
            where: {
                familyId,
                OR: [
                    { firstName: { contains: query, mode: 'insensitive' } },
                    { lastName: { contains: query, mode: 'insensitive' } },
                    { maidenName: { contains: query, mode: 'insensitive' } },
                ],
            },
        });
        return NextResponse.json(people);
    } catch (error) {
        console.error('[GET /api/person/search] error:', error);
        return NextResponse.json({ error: 'Failed to search people', details: error }, { status: 500 });
    }
}
