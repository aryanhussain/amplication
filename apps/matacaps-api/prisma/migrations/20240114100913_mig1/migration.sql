/*
  Warnings:

  - Made the column `address` on table `Member` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "dob" TIMESTAMP(3),
ADD COLUMN     "profilePic" TEXT,
ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "address" SET DATA TYPE TEXT;
