/*
  Warnings:

  - Added the required column `duracao_treino` to the `Treino` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Treino" ADD COLUMN     "duracao_treino" INTEGER NOT NULL;
