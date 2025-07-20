import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// PUT: Set family privacy
export async function PUT(req: NextRequest) {
    const data = await req.json();
    console.log('[PUT /api/family/privacy] body:', data);
    if (!data.familyId || !data.privacyLevel) {
        return NextResponse.json({ error: 'Missing required fields: familyId, privacyLevel' }, { status: 400 });
    }
    const userId = req.headers.get('x-user-id') || 'user-1';
    try {
        const family = await prisma.family.findFirst({ where: { id: data.familyId, ownerId: userId } });
        if (!family) {
            return NextResponse.json({ error: 'Not authorized or family not found' }, { status: 403 });
        }
        await prisma.family.update({
            where: { id: data.familyId },
            data: { privacyLevel: data.privacyLevel },
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[PUT /api/family/privacy] error:', error);
        return NextResponse.json({ error: 'Failed to set privacy', details: error }, { status: 500 });
    }
}

// GET: Get family privacy
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const familyId = searchParams.get('familyId');
    console.log('[GET /api/family/privacy] familyId:', familyId);
    if (!familyId) {
        return NextResponse.json({ error: 'Missing required query param: familyId' }, { status: 400 });
    }
    try {
        const family = await prisma.family.findUnique({ where: { id: familyId } });
        if (!family) {
            return NextResponse.json({ error: 'Family not found' }, { status: 404 });
        }
        return NextResponse.json({ privacyLevel: family.privacyLevel });
    } catch (error) {
        console.error('[GET /api/family/privacy] error:', error);
        return NextResponse.json({ error: 'Failed to get privacy', details: error }, { status: 500 });
    }
}
