import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Helper: parse JSON body
async function parseBody(req: NextRequest) {
    try {
        return await req.json();
    } catch {
        return null;
    }
}

// GET: List all families for the authenticated user
export async function GET(req: NextRequest) {
    console.log('[GET /api/family] headers:', req.headers);
    // TODO: Replace with real user ID from auth context
    const userId = req.headers.get('x-user-id') || 'user-1';
    try {
        const families = await prisma.family.findMany({
            where: { ownerId: userId },
        });
        return NextResponse.json(families);
    } catch (error) {
        console.error('[GET /api/family] error:', error);
        return NextResponse.json({ error: 'Failed to fetch families', details: error }, { status: 500 });
    }
}

// POST: Create a new family
export async function POST(req: NextRequest) {
    const data = await parseBody(req);
    console.log('[POST /api/family] body:', data);
    if (!data || !data.name) {
        return NextResponse.json({ error: 'Missing required fields: name' }, { status: 400 });
    }
    // TODO: Replace with real user ID from auth context
    const userId = req.headers.get('x-user-id') || 'user-1';
    try {
        const family = await prisma.family.create({
            data: {
                ownerId: userId,
                name: data.name,
                description: data.description,
                countryOfOrigin: data.countryOfOrigin,
                privacyLevel: data.privacyLevel || 'PRIVATE',
                metadata: data.metadata || {},
            },
        });
        return NextResponse.json(family, { status: 201 });
    } catch (error) {
        console.error('[POST /api/family] error:', error);
        return NextResponse.json({ error: 'Failed to create family', details: error }, { status: 500 });
    }
}

// PUT: Update a family (by id)
export async function PUT(req: NextRequest) {
    const data = await parseBody(req);
    console.log('[PUT /api/family] body:', data);
    if (!data || !data.id) {
        return NextResponse.json({ error: 'Missing required field: id' }, { status: 400 });
    }
    // TODO: Replace with real user ID from auth context
    const userId = req.headers.get('x-user-id') || 'user-1';
    try {
        // Only allow update if user owns the family
        const family = await prisma.family.updateMany({
            where: { id: data.id, ownerId: userId },
            data: {
                name: data.name,
                description: data.description,
                countryOfOrigin: data.countryOfOrigin,
                privacyLevel: data.privacyLevel,
                metadata: data.metadata,
                updatedAt: new Date(),
            },
        });
        if (family.count === 0) {
            return NextResponse.json({ error: 'Family not found or not authorized' }, { status: 404 });
        }
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[PUT /api/family] error:', error);
        return NextResponse.json({ error: 'Failed to update family', details: error }, { status: 500 });
    }
}

// DELETE: Delete a family (by id)
export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    console.log('[DELETE /api/family] id:', id);
    if (!id) {
        return NextResponse.json({ error: 'Missing required query param: id' }, { status: 400 });
    }
    // TODO: Replace with real user ID from auth context
    const userId = req.headers.get('x-user-id') || 'user-1';
    try {
        // Only allow delete if user owns the family
        const family = await prisma.family.deleteMany({
            where: { id, ownerId: userId },
        });
        if (family.count === 0) {
            return NextResponse.json({ error: 'Family not found or not authorized' }, { status: 404 });
        }
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[DELETE /api/family] error:', error);
        return NextResponse.json({ error: 'Failed to delete family', details: error }, { status: 500 });
    }
}
