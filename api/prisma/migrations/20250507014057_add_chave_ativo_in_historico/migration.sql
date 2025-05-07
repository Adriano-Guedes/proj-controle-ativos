/*
  Warnings:

  - Added the required column `chaveAtivo` to the `HistoricoAlocacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `HistoricoAlocacao` ADD COLUMN `chaveAtivo` INTEGER NOT NULL;
