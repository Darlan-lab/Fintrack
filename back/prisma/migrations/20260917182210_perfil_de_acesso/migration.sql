-- CreateEnum
CREATE TYPE "Autorizacao" AS ENUM ('USUARIO', 'SUPORTE', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "perfil" "Autorizacao" NOT NULL DEFAULT 'USUARIO';
