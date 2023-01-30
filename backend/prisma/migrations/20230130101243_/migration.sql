/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `lastname` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `firstname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "connected" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "firstname" VARCHAR(255) NOT NULL,
ALTER COLUMN "lastname" SET DATA TYPE VARCHAR(255);
