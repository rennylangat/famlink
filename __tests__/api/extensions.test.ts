// @jest-environment node
import request from 'supertest';

const app = 'http://localhost:3000'; // Adjust as needed for your test setup

describe('API Extensions', () => {
    let familyId: string;
    let inviteId: string;
    const ownerId = 'test-owner';
    const collabEmail = 'collab@example.com';

    beforeAll(async () => {
        // Create a family for extension tests
        const res = await request(app)
            .post('/api/family')
            .set('x-user-id', ownerId)
            .send({ name: 'Extension Test Family', countryOfOrigin: 'Kenya' });
        familyId = res.body.id;
    });

    it('should invite a collaborator', async () => {
        const res = await request(app)
            .post('/api/family/collaborator/invite')
            .set('x-user-id', ownerId)
            .send({ familyId, email: collabEmail });
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        inviteId = res.body.inviteId;
    });

    it('should accept a collaborator invite', async () => {
        const res = await request(app)
            .post('/api/family/collaborator/accept')
            .send({ inviteId });
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
    });

    it('should list collaborators', async () => {
        const res = await request(app)
            .get(`/api/family/collaborator?familyId=${familyId}`);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.some((c: any) => c.email === collabEmail)).toBe(true);
    });

    it('should remove a collaborator', async () => {
        // Get the userId of the collaborator
        const listRes = await request(app)
            .get(`/api/family/collaborator?familyId=${familyId}`);
        const collab = listRes.body.find((c: any) => c.email === collabEmail);
        const res = await request(app)
            .delete(`/api/family/collaborator?familyId=${familyId}&userId=${collab.userId}`);
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
    });

    it('should set and get family privacy', async () => {
        let res = await request(app)
            .put('/api/family/privacy')
            .set('x-user-id', ownerId)
            .send({ familyId, privacyLevel: 'PRIVATE' });
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);

        res = await request(app)
            .get(`/api/family/privacy?familyId=${familyId}`);
        expect(res.status).toBe(200);
        expect(['PRIVATE', 'PUBLIC']).toContain(res.body.privacyLevel);
    });

    it('should filter families by country', async () => {
        const res = await request(app)
            .get('/api/family/filter?country=Kenya')
            .set('x-user-id', ownerId);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.some((f: any) => f.countryOfOrigin === 'Kenya')).toBe(true);
    });
}); 