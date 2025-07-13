/*
  Warnings:

  - You are about to drop the `profiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `trees` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_tree_id_fkey";

-- DropForeignKey
ALTER TABLE "relationships" DROP CONSTRAINT "relationships_from_person_id_fkey";

-- DropForeignKey
ALTER TABLE "relationships" DROP CONSTRAINT "relationships_to_person_id_fkey";

-- DropForeignKey
ALTER TABLE "trees" DROP CONSTRAINT "trees_owner_id_fkey";

-- DropTable
DROP TABLE "profiles";

-- DropTable
DROP TABLE "trees";

-- CreateTable
CREATE TABLE "family" (
    "id" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "country_of_origin" TEXT,
    "privacy_level" "PrivacyLevel" NOT NULL DEFAULT 'PRIVATE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "family_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "person" (
    "id" TEXT NOT NULL,
    "family_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "maiden_name" TEXT,
    "gender" TEXT,
    "bio" TEXT,
    "profile_image_url" TEXT,
    "date_of_birth" TIMESTAMP(3),
    "date_of_death" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "person_family_id_idx" ON "person"("family_id");

-- AddForeignKey
ALTER TABLE "family" ADD CONSTRAINT "family_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_family_id_fkey" FOREIGN KEY ("family_id") REFERENCES "family"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationships" ADD CONSTRAINT "relationships_from_person_id_fkey" FOREIGN KEY ("from_person_id") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationships" ADD CONSTRAINT "relationships_to_person_id_fkey" FOREIGN KEY ("to_person_id") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE CASCADE;
