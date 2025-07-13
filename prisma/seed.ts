const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Create a user
  const user = await prisma.user.create({
    data: {
      id: 'user-1',
      email: 'user1@example.com',
      // createdAt and updatedAt are auto-set
    },
  });

  // Create a family
  const family = await prisma.family.create({
    data: {
      id: 'family-1',
      ownerId: user.id,
      name: 'Smith Family',
      description: 'Smith family tree',
      countryOfOrigin: 'Kenya',
      privacyLevel: 'PRIVATE',
      // createdAt and updatedAt are auto-set
    },
  });

  // Create people
  const person1 = await prisma.person.create({
    data: {
      id: 'person-1',
      familyId: family.id,
      firstName: 'John',
      lastName: 'Smith',
      gender: 'male',
      bio: 'Patriarch of the Smith family',
    },
  });
  const person2 = await prisma.person.create({
    data: {
      id: 'person-2',
      familyId: family.id,
      firstName: 'Jane',
      lastName: 'Smith',
      gender: 'female',
      bio: 'Matriarch of the Smith family',
    },
  });
  // Create a relationship (spouse)
  await prisma.relationship.create({
    data: {
      fromPersonId: person1.id,
      toPersonId: person2.id,
      relationshipType: 'SPOUSE',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
