import { NextRequest, NextResponse } from 'next/server';

type Invite = { inviteId: string; familyId: string; email: string; invitedBy: string };
type Collaborator = { userId: string; email: string; role: 'OWNER' | 'COLLABORATOR' };

declare global {
    var _invites: Invite[] | undefined;
    var _collaborators: Record<string, Collaborator[]> | undefined;
}

// In-memory stores for demo (replace with DB in production)
const invites: Invite[] = globalThis._invites || (globalThis._invites = []);
const collaborators: Record<string, Collaborator[]> = globalThis._collaborators || (globalThis._collaborators = {});

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log('[POST /api/family/collaborator/accept] body:', data);
    if (!data.inviteId) {
        return NextResponse.json({ error: 'Missing required field: inviteId' }, { status: 400 });
    }
    const invite = invites.find((i) => i.inviteId === data.inviteId);
    if (!invite) {
        return NextResponse.json({ error: 'Invite not found' }, { status: 404 });
    }
    // Add as collaborator
    if (!collaborators[invite.familyId]) collaborators[invite.familyId] = [];
    collaborators[invite.familyId].push({ userId: 'collab-' + Math.random().toString(36).slice(2), email: invite.email, role: 'COLLABORATOR' });
    console.log('[POST /api/family/collaborator/accept] collaborator added:', { familyId: invite.familyId, email: invite.email });
    return NextResponse.json({ success: true });
}
