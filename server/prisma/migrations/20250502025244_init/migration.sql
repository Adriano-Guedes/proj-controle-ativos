/*
  Warnings:

  - You are about to drop the column `status` on the `Ativo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Ativo` DROP COLUMN `status`,
    ADD COLUMN `chaveLocalizacao` INTEGER NULL,
    ADD COLUMN `chaveResponsavel` VARCHAR(191) NULL,
    ADD COLUMN `chaveStatus` INTEGER NULL,
    MODIFY `codInterno` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `login` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `chaveCargo` INTEGER NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    UNIQUE INDEX `Usuario_login_key`(`login`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cargo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Cargo_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StatusAtivo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `StatusAtivo_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StatusManutencao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `StatusManutencao_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manutencao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NULL,
    `dataEntrada` DATETIME(3) NOT NULL,
    `dataSaida` DATETIME(3) NULL,
    `relatorio` VARCHAR(191) NULL,
    `chaveResponsavel` VARCHAR(191) NOT NULL,
    `chaveStatus` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Localizacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `endereco` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Localizacao_endereco_key`(`endereco`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ativo` ADD CONSTRAINT `Ativo_chaveStatus_fkey` FOREIGN KEY (`chaveStatus`) REFERENCES `StatusAtivo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ativo` ADD CONSTRAINT `Ativo_chaveResponsavel_fkey` FOREIGN KEY (`chaveResponsavel`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ativo` ADD CONSTRAINT `Ativo_chaveLocalizacao_fkey` FOREIGN KEY (`chaveLocalizacao`) REFERENCES `Localizacao`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_chaveCargo_fkey` FOREIGN KEY (`chaveCargo`) REFERENCES `Cargo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Manutencao` ADD CONSTRAINT `Manutencao_chaveResponsavel_fkey` FOREIGN KEY (`chaveResponsavel`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Manutencao` ADD CONSTRAINT `Manutencao_chaveStatus_fkey` FOREIGN KEY (`chaveStatus`) REFERENCES `StatusManutencao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
