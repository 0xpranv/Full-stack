/*
  Warnings:

  - Added the required column `clerk_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "clerk_id" TEXT NOT NULL;
