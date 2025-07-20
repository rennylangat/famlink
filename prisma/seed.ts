const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed process...');

  // Clean existing data
  await prisma.relationship.deleteMany();
  await prisma.person.deleteMany();
  await prisma.family.deleteMany();
  await prisma.user.deleteMany();

  // Create test users
  const user1 = await prisma.user.create({
    data: {
      id: 'user-1',
      email: 'john.smith@example.com',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      id: 'user-2',
      email: 'jane.doe@example.com',
    },
  });

  console.log('✅ Created test users');

  // Create private family for user1
  const privateFamily = await prisma.family.create({
    data: {
      id: 'family-private',
      ownerId: user1.id,
      name: 'Smith Family Tree',
      description: 'Private family tree for the Smith family',
      countryOfOrigin: 'Kenya',
      privacyLevel: 'PRIVATE',
    },
  });

  // Create public family for user2
  const publicFamily = await prisma.family.create({
    data: {
      id: 'family-public',
      ownerId: user2.id,
      name: 'Doe Family Heritage',
      description: 'Public family tree showcasing the Doe family heritage',
      countryOfOrigin: 'Nigeria',
      privacyLevel: 'PUBLIC',
    },
  });

  console.log('✅ Created test families (private and public)');

  // Create people for private family
  const johnSmith = await prisma.person.create({
    data: {
      id: 'person-john-smith',
      familyId: privateFamily.id,
      firstName: 'John',
      lastName: 'Smith',
      gender: 'male',
      bio: 'Patriarch of the Smith family, born in Nairobi',
      dateOfBirth: new Date('1950-03-15'),
    },
  });

  const marySmith = await prisma.person.create({
    data: {
      id: 'person-mary-smith',
      familyId: privateFamily.id,
      firstName: 'Mary',
      lastName: 'Smith',
      maidenName: 'Johnson',
      gender: 'female',
      bio: 'Matriarch of the Smith family, educator and community leader',
      dateOfBirth: new Date('1952-07-22'),
    },
  });

  const davidSmith = await prisma.person.create({
    data: {
      id: 'person-david-smith',
      familyId: privateFamily.id,
      firstName: 'David',
      lastName: 'Smith',
      gender: 'male',
      bio: 'Eldest son, software engineer',
      dateOfBirth: new Date('1975-11-08'),
    },
  });

  // Create people for public family
  const robertDoe = await prisma.person.create({
    data: {
      id: 'person-robert-doe',
      familyId: publicFamily.id,
      firstName: 'Robert',
      lastName: 'Doe',
      gender: 'male',
      bio: 'Family historian and storyteller from Lagos',
      dateOfBirth: new Date('1945-01-10'),
    },
  });

  const graceDoe = await prisma.person.create({
    data: {
      id: 'person-grace-doe',
      familyId: publicFamily.id,
      firstName: 'Grace',
      lastName: 'Doe',
      maidenName: 'Okafor',
      gender: 'female',
      bio: 'Traditional healer and midwife',
      dateOfBirth: new Date('1948-09-30'),
    },
  });

  const sarahDoe = await prisma.person.create({
    data: {
      id: 'person-sarah-doe',
      familyId: publicFamily.id,
      firstName: 'Sarah',
      lastName: 'Doe',
      gender: 'female',
      bio: 'Doctor and humanitarian worker',
      dateOfBirth: new Date('1972-05-18'),
    },
  });

  console.log('✅ Created test people');

  // Create relationships for private family
  await prisma.relationship.create({
    data: {
      fromPersonId: johnSmith.id,
      toPersonId: marySmith.id,
      relationshipType: 'SPOUSE',
      startDate: new Date('1974-06-20'),
    },
  });

  await prisma.relationship.create({
    data: {
      fromPersonId: johnSmith.id,
      toPersonId: davidSmith.id,
      relationshipType: 'PARENT_OF',
    },
  });

  await prisma.relationship.create({
    data: {
      fromPersonId: marySmith.id,
      toPersonId: davidSmith.id,
      relationshipType: 'PARENT_OF',
    },
  });

  // Create relationships for public family
  await prisma.relationship.create({
    data: {
      fromPersonId: robertDoe.id,
      toPersonId: graceDoe.id,
      relationshipType: 'SPOUSE',
      startDate: new Date('1970-12-15'),
    },
  });

  await prisma.relationship.create({
    data: {
      fromPersonId: robertDoe.id,
      toPersonId: sarahDoe.id,
      relationshipType: 'PARENT_OF',
    },
  });

  await prisma.relationship.create({
    data: {
      fromPersonId: graceDoe.id,
      toPersonId: sarahDoe.id,
      relationshipType: 'PARENT_OF',
    },
  });

  console.log('✅ Created test relationships');

  console.log('🎉 Seed completed successfully!');
  console.log(`
📊 Summary:
- Users: 2 (1 with private family, 1 with public family)
- Families: 2 (1 private, 1 public)
- People: 6 (3 per family)
- Relationships: 6 (spouse and parent-child relationships)

🔒 Test Data for RLS:
- user-1 (john.smith@example.com) owns private Smith family
- user-2 (jane.doe@example.com) owns public Doe family
- Use these IDs to test authentication and access control
  `);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
