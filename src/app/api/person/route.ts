import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

async function parseBody(req: NextRequest) {
    try {
        return await req.json();
    } catch {
        return null;
    }
}

// GET: List all people in a family
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const familyId = searchParams.get('familyId');
    console.log('[GET /api/person] familyId:', familyId, 'headers:', req.headers);
    if (!familyId) {
        return NextResponse.json({ error: 'Missing required query param: familyId' }, { status: 400 });
    }
    // TODO: Replace with real user ID from auth context
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
        const people = await prisma.person.findMany({ where: { familyId } });
        return NextResponse.json(people);
    } catch (error) {
        console.error('[GET /api/person] error:', error);
        return NextResponse.json({ error: 'Failed to fetch people', details: error }, { status: 500 });
    }
}

// POST: Create a new person
export async function POST(req: NextRequest) {
    const data = await parseBody(req);
    console.log('[POST /api/person] body:', data);
    if (!data || !data.familyId || !data.firstName) {
        return NextResponse.json({ error: 'Missing required fields: familyId, firstName' }, { status: 400 });
    }
    // TODO: Replace with real user ID from auth context
    const userId = req.headers.get('x-user-id') || 'user-1';
    try {
        // Only allow if user owns the family
        const family = await prisma.family.findFirst({
            where: { id: data.familyId, ownerId: userId },
        });
        if (!family) {
            return NextResponse.json({ error: 'Family not found or not authorized' }, { status: 404 });
        }
        const person = await prisma.person.create({
            data: {
                familyId: data.familyId,
                firstName: data.firstName,
                lastName: data.lastName,
                maidenName: data.maidenName,
                gender: data.gender,
                bio: data.bio,
                profileImageUrl: data.profileImageUrl,
                dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
                dateOfDeath: data.dateOfDeath ? new Date(data.dateOfDeath) : undefined,
                metadata: data.metadata || {},
            },
        });
        return NextResponse.json(person, { status: 201 });
    } catch (error) {
        console.error('[POST /api/person] error:', error);
        return NextResponse.json({ error: 'Failed to create person', details: error }, { status: 500 });
    }
}

// PUT: Update a person (by id)
export async function PUT(req: NextRequest) {
    const data = await parseBody(req);
    console.log('[PUT /api/person] body:', data);
    if (!data || !data.id) {
        return NextResponse.json({ error: 'Missing required field: id' }, { status: 400 });
    }
    // TODO: Replace with real user ID from auth context
    const userId = req.headers.get('x-user-id') || 'user-1';
    try {
        // Only allow update if user owns the family
        const person = await prisma.person.findUnique({ where: { id: data.id } });
        if (!person) {
            return NextResponse.json({ error: 'Person not found' }, { status: 404 });
        }
        const family = await prisma.family.findFirst({ where: { id: person.familyId, ownerId: userId } });
        if (!family) {
            return NextResponse.json({ error: 'Not authorized to update this person' }, { status: 403 });
        }
        await prisma.person.update({
            where: { id: data.id },
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                maidenName: data.maidenName,
                gender: data.gender,
                bio: data.bio,
                profileImageUrl: data.profileImageUrl,
                dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
                dateOfDeath: data.dateOfDeath ? new Date(data.dateOfDeath) : undefined,
                metadata: data.metadata,
                updatedAt: new Date(),
            },
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[PUT /api/person] error:', error);
        return NextResponse.json({ error: 'Failed to update person', details: error }, { status: 500 });
    }
}

// DELETE: Delete a person (by id)
export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    console.log('[DELETE /api/person] id:', id);
    if (!id) {
        return NextResponse.json({ error: 'Missing required query param: id' }, { status: 400 });
    }
    // TODO: Replace with real user ID from auth context
    const userId = req.headers.get('x-user-id') || 'user-1';
    try {
        // Only allow delete if user owns the family
        const person = await prisma.person.findUnique({ where: { id } });
        if (!person) {
            return NextResponse.json({ error: 'Person not found' }, { status: 404 });
        }
        const family = await prisma.family.findFirst({ where: { id: person.familyId, ownerId: userId } });
        if (!family) {
            return NextResponse.json({ error: 'Not authorized to delete this person' }, { status: 403 });
        }
        await prisma.person.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[DELETE /api/person] error:', error);
        return NextResponse.json({ error: 'Failed to delete person', details: error }, { status: 500 });
    }
}
