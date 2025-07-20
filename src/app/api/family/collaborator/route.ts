import { NextRequest, NextResponse } from 'next/server';

declare global {
    // eslint-disable-next-line no-var
    var _collaborators: Record<string, { userId: string; email: string; role: 'OWNER' | 'COLLABORATOR' }[]> | undefined;
}

// In-memory stores for demo (replace with DB in production)
const collaborators: Record<string, { userId: string; email: string; role: 'OWNER' | 'COLLABORATOR' }[]> = globalThis._collaborators || (globalThis._collaborators = {});

// DELETE: Remove collaborator
export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const familyId = searchParams.get('familyId');
    const userId = searchParams.get('userId');
    console.log('[DELETE /api/family/collaborator] familyId:', familyId, 'userId:', userId);
    if (!familyId || !userId) {
        return NextResponse.json({ error: 'Missing required query params: familyId, userId' }, { status: 400 });
    }
    if (!collaborators[familyId]) {
        return NextResponse.json({ error: 'No collaborators for this family' }, { status: 404 });
    }
    collaborators[familyId] = collaborators[familyId].filter((c) => c.userId !== userId);
    console.log('[DELETE /api/family/collaborator] collaborator removed:', userId);
    return NextResponse.json({ success: true });
}

// GET: List collaborators
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const familyId = searchParams.get('familyId');
    console.log('[GET /api/family/collaborator] familyId:', familyId);
    if (!familyId) {
        return NextResponse.json({ error: 'Missing required query param: familyId' }, { status: 400 });
    }
    return NextResponse.json(collaborators[familyId] || []);
}
