// @jest-environment node
import request from 'supertest';

const app = 'http://localhost:3000'; // Adjust as needed for your test setup

describe('Person API', () => {
    let familyId: string;
    let personId: string;
    const userId = 'test-user-1';
    const otherUserId = 'test-user-2';

    beforeAll(async () => {
        // Create a family for person tests
        const res = await request(app)
            .post('/api/family')
            .set('x-user-id', userId)
            .send({ name: 'Person Test Family' });
        familyId = res.body.id;
    });

    it('should create a person', async () => {
        const res = await request(app)
            .post('/api/person')
            .set('x-user-id', userId)
            .send({ familyId, firstName: 'John', lastName: 'Doe', metadata: { test: true } });
        expect(res.status).toBe(201);
        expect(res.body.firstName).toBe('John');
        expect(res.body.metadata.test).toBe(true);
        personId = res.body.id;
    });

    it('should list people in a family', async () => {
        const res = await request(app)
            .get(`/api/person?familyId=${familyId}`)
            .set('x-user-id', userId);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.some((p: any) => p.id === personId)).toBe(true);
    });

    it('should update a person', async () => {
        const res = await request(app)
            .put('/api/person')
            .set('x-user-id', userId)
            .send({ id: personId, firstName: 'Jane', metadata: { updated: true } });
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
    });

    it('should not allow another user to update the person', async () => {
        const res = await request(app)
            .put('/api/person')
            .set('x-user-id', otherUserId)
            .send({ id: personId, firstName: 'Hacker' });
        expect(res.status).toBe(403);
    });

    it('should search people by name', async () => {
        const res = await request(app)
            .get(`/api/person/search?familyId=${familyId}&query=Jane`)
            .set('x-user-id', userId);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.some((p: any) => p.firstName === 'Jane')).toBe(true);
    });

    it('should delete a person', async () => {
        const res = await request(app)
            .delete(`/api/person?id=${personId}`)
            .set('x-user-id', userId);
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
    });

    it('should not allow another user to delete the person', async () => {
        const res = await request(app)
            .delete(`/api/person?id=${personId}`)
            .set('x-user-id', otherUserId);
        expect(res.status).toBe(403);
    });
}); 