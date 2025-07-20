// @jest-environment node
import request from 'supertest';

const app = 'http://localhost:3000'; // Adjust as needed for your test setup

describe('Relationship API', () => {
    let familyId: string;
    let person1Id: string;
    let person2Id: string;
    let relationshipId: number;
    const userId = 'test-user-1';
    const otherUserId = 'test-user-2';

    beforeAll(async () => {
        // Create a family and two people
        const famRes = await request(app)
            .post('/api/family')
            .set('x-user-id', userId)
            .send({ name: 'Relationship Test Family' });
        familyId = famRes.body.id;
        const p1 = await request(app)
            .post('/api/person')
            .set('x-user-id', userId)
            .send({ familyId, firstName: 'Parent' });
        person1Id = p1.body.id;
        const p2 = await request(app)
            .post('/api/person')
            .set('x-user-id', userId)
            .send({ familyId, firstName: 'Child' });
        person2Id = p2.body.id;
    });

    it('should create a relationship', async () => {
        const res = await request(app)
            .post('/api/relationship')
            .set('x-user-id', userId)
            .send({ fromPersonId: person1Id, toPersonId: person2Id, relationshipType: 'PARENT_OF' });
        expect(res.status).toBe(201);
        expect(res.body.relationshipType).toBe('PARENT_OF');
        relationshipId = res.body.id;
    });

    it('should list relationships in a family', async () => {
        const res = await request(app)
            .get(`/api/relationship?familyId=${familyId}`)
            .set('x-user-id', userId);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.some((r: any) => r.id === relationshipId)).toBe(true);
    });

    it('should update a relationship', async () => {
        const res = await request(app)
            .put('/api/relationship')
            .set('x-user-id', userId)
            .send({ id: relationshipId, startDate: '2020-01-01' });
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
    });

    it('should not allow another user to update the relationship', async () => {
        const res = await request(app)
            .put('/api/relationship')
            .set('x-user-id', otherUserId)
            .send({ id: relationshipId, startDate: '2021-01-01' });
        expect(res.status).toBe(403);
    });

    it('should delete a relationship', async () => {
        const res = await request(app)
            .delete(`/api/relationship?id=${relationshipId}`)
            .set('x-user-id', userId);
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
    });

    it('should not allow another user to delete the relationship', async () => {
        const res = await request(app)
            .delete(`/api/relationship?id=${relationshipId}`)
            .set('x-user-id', otherUserId);
        expect(res.status).toBe(403);
    });
}); 