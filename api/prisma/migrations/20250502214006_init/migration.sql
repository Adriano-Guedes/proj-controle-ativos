-- CreateTable
CREATE TABLE `Ativo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `codInterno` VARCHAR(191) NULL,
    `descricao` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL,
    `valor` DECIMAL(10, 2) NOT NULL,
    `dataAquisicao` DATETIME(3) NOT NULL,
    `descricaoProblema` VARCHAR(191) NULL,
    `qtdReparos` INTEGER NOT NULL,
    `chaveResponsavel` VARCHAR(191) NULL,
    `chaveLocalizacao` INTEGER NULL,

    UNIQUE INDEX `Ativo_codInterno_key`(`codInterno`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
CREATE TABLE `Localizacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `endereco` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Localizacao_endereco_key`(`endereco`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistoricoAlocacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `chaveLocalizacaoOrigem` INTEGER NULL,
    `chaveResponsavelOrigem` VARCHAR(191) NULL,
    `chaveLocalizacaoDestino` INTEGER NULL,
    `chaveResponsavelDestino` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ativo` ADD CONSTRAINT `Ativo_chaveResponsavel_fkey` FOREIGN KEY (`chaveResponsavel`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ativo` ADD CONSTRAINT `Ativo_chaveLocalizacao_fkey` FOREIGN KEY (`chaveLocalizacao`) REFERENCES `Localizacao`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_chaveCargo_fkey` FOREIGN KEY (`chaveCargo`) REFERENCES `Cargo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoricoAlocacao` ADD CONSTRAINT `HistoricoAlocacao_chaveLocalizacaoOrigem_fkey` FOREIGN KEY (`chaveLocalizacaoOrigem`) REFERENCES `Localizacao`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoricoAlocacao` ADD CONSTRAINT `HistoricoAlocacao_chaveResponsavelOrigem_fkey` FOREIGN KEY (`chaveResponsavelOrigem`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoricoAlocacao` ADD CONSTRAINT `HistoricoAlocacao_chaveLocalizacaoDestino_fkey` FOREIGN KEY (`chaveLocalizacaoDestino`) REFERENCES `Localizacao`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoricoAlocacao` ADD CONSTRAINT `HistoricoAlocacao_chaveResponsavelDestino_fkey` FOREIGN KEY (`chaveResponsavelDestino`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
