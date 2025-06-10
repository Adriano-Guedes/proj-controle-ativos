/*
  Warnings:

  - You are about to alter the column `nome` on the `Ativo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `codInterno` on the `Ativo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `status` on the `Ativo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `nome` on the `Cargo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `nome` on the `Usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `email` on the `Usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(150)`.
  - You are about to alter the column `login` on the `Usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `Ativo` MODIFY `nome` VARCHAR(100) NOT NULL,
    MODIFY `codInterno` VARCHAR(50) NULL,
    MODIFY `descricao` TEXT NULL,
    MODIFY `status` VARCHAR(50) NOT NULL,
    MODIFY `descricaoProblema` TEXT NULL;

-- AlterTable
ALTER TABLE `Cargo` MODIFY `nome` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `Localizacao` MODIFY `endereco` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `Usuario` MODIFY `nome` VARCHAR(100) NOT NULL,
    MODIFY `email` VARCHAR(150) NOT NULL,
    MODIFY `login` VARCHAR(50) NOT NULL,
    MODIFY `senha` VARCHAR(255) NOT NULL;
