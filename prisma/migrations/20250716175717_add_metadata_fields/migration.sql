-- AlterTable
ALTER TABLE "family" ADD COLUMN     "metadata" JSONB;

-- AlterTable
ALTER TABLE "person" ADD COLUMN     "metadata" JSONB;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "metadata" JSONB;
