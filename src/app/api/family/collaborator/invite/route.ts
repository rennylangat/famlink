import { NextRequest, NextResponse } from 'next/server';

type Invite = { inviteId: string; familyId: string; email: string; invitedBy: string };

declare global {
    var _invites: Invite[] | undefined;
}

// In-memory stores for demo (replace with DB in production)
const invites: Invite[] = globalThis._invites || (globalThis._invites = []);

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log('[POST /api/family/collaborator/invite] body:', data);
    if (!data.familyId || !data.email) {
        return NextResponse.json({ error: 'Missing required fields: familyId, email' }, { status: 400 });
    }
    // TODO: Validate ownership (assume x-user-id is owner)
    const userId = req.headers.get('x-user-id') || 'user-1';
    // Add invite
    const inviteId = Math.random().toString(36).slice(2);
    invites.push({ inviteId, familyId: data.familyId, email: data.email, invitedBy: userId });
    console.log('[POST /api/family/collaborator/invite] invite created:', { inviteId, familyId: data.familyId, email: data.email });
    return NextResponse.json({ success: true, inviteId });
}
