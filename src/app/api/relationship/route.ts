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

// GET: List all relationships for people in a family
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const familyId = searchParams.get('familyId');
    console.log('[GET /api/relationship] familyId:', familyId, 'headers:', req.headers);
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
        // Get all people in the family
        const people = await prisma.person.findMany({ where: { familyId } });
        const personIds = people.map((p) => p.id);
        // Get all relationships where both from and to are in this family
        const relationships = await prisma.relationship.findMany({
            where: {
                fromPersonId: { in: personIds },
                toPersonId: { in: personIds },
            },
        });
        return NextResponse.json(relationships);
    } catch (error) {
        console.error('[GET /api/relationship] error:', error);
        return NextResponse.json({ error: 'Failed to fetch relationships', details: error }, { status: 500 });
    }
}

// POST: Create a new relationship
export async function POST(req: NextRequest) {
    const data = await parseBody(req);
    console.log('[POST /api/relationship] body:', data);
    if (!data || !data.fromPersonId || !data.toPersonId || !data.relationshipType) {
        return NextResponse.json({ error: 'Missing required fields: fromPersonId, toPersonId, relationshipType' }, { status: 400 });
    }
    // TODO: Replace with real user ID from auth context
    const userId = req.headers.get('x-user-id') || 'user-1';
    try {
        // Only allow if user owns both people (i.e., both are in a family the user owns)
        const fromPerson = await prisma.person.findUnique({ where: { id: data.fromPersonId } });
        const toPerson = await prisma.person.findUnique({ where: { id: data.toPersonId } });
        if (!fromPerson || !toPerson) {
            return NextResponse.json({ error: 'One or both people not found' }, { status: 404 });
        }
        const family = await prisma.family.findFirst({
            where: { id: fromPerson.familyId, ownerId: userId },
        });
        if (!family || fromPerson.familyId !== toPerson.familyId) {
            return NextResponse.json({ error: 'Not authorized or people not in same family' }, { status: 403 });
        }
        const relationship = await prisma.relationship.create({
            data: {
                fromPersonId: data.fromPersonId,
                toPersonId: data.toPersonId,
                relationshipType: data.relationshipType,
                startDate: data.startDate ? new Date(data.startDate) : undefined,
                endDate: data.endDate ? new Date(data.endDate) : undefined,
            },
        });
        return NextResponse.json(relationship, { status: 201 });
    } catch (error) {
        console.error('[POST /api/relationship] error:', error);
        return NextResponse.json({ error: 'Failed to create relationship', details: error }, { status: 500 });
    }
}

// PUT: Update a relationship (by id)
export async function PUT(req: NextRequest) {
    const data = await parseBody(req);
    console.log('[PUT /api/relationship] body:', data);
    if (!data || typeof data.id !== 'number') {
        return NextResponse.json({ error: 'Missing required field: id' }, { status: 400 });
    }
    // TODO: Replace with real user ID from auth context
    const userId = req.headers.get('x-user-id') || 'user-1';
    try {
        const relationship = await prisma.relationship.findUnique({ where: { id: data.id } });
        if (!relationship) {
            return NextResponse.json({ error: 'Relationship not found' }, { status: 404 });
        }
        // Only allow update if user owns the family of both people
        const fromPerson = await prisma.person.findUnique({ where: { id: relationship.fromPersonId } });
        if (!fromPerson) {
            return NextResponse.json({ error: 'From person not found' }, { status: 404 });
        }
        const family = await prisma.family.findFirst({ where: { id: fromPerson.familyId, ownerId: userId } });
        if (!family) {
            return NextResponse.json({ error: 'Not authorized to update this relationship' }, { status: 403 });
        }
        await prisma.relationship.update({
            where: { id: data.id },
            data: {
                startDate: data.startDate ? new Date(data.startDate) : undefined,
                endDate: data.endDate ? new Date(data.endDate) : undefined,
            },
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[PUT /api/relationship] error:', error);
        return NextResponse.json({ error: 'Failed to update relationship', details: error }, { status: 500 });
    }
}

// DELETE: Delete a relationship (by id)
export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    console.log('[DELETE /api/relationship] id:', id);
    if (!id) {
        return NextResponse.json({ error: 'Missing required query param: id' }, { status: 400 });
    }
    // TODO: Replace with real user ID from auth context
    const userId = req.headers.get('x-user-id') || 'user-1';
    try {
        const relationship = await prisma.relationship.findUnique({ where: { id: Number(id) } });
        if (!relationship) {
            return NextResponse.json({ error: 'Relationship not found' }, { status: 404 });
        }
        const fromPerson = await prisma.person.findUnique({ where: { id: relationship.fromPersonId } });
        if (!fromPerson) {
            return NextResponse.json({ error: 'From person not found' }, { status: 404 });
        }
        const family = await prisma.family.findFirst({ where: { id: fromPerson.familyId, ownerId: userId } });
        if (!family) {
            return NextResponse.json({ error: 'Not authorized to delete this relationship' }, { status: 403 });
        }
        await prisma.relationship.delete({ where: { id: Number(id) } });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[DELETE /api/relationship] error:', error);
        return NextResponse.json({ error: 'Failed to delete relationship', details: error }, { status: 500 });
    }
}
