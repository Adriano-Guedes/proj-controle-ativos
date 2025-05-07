/*
  Warnings:

  - You are about to drop the column `descricaoProblema` on the `Ativo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Ativo` DROP COLUMN `descricaoProblema`,
    ADD COLUMN `observacao` TEXT NULL;
