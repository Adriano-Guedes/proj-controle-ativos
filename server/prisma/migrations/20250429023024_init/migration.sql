-- CreateTable
CREATE TABLE `Ativo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `codInterno` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `valor` DECIMAL(10, 2) NOT NULL,
    `status` ENUM('Funcional', 'Com_Defeito', 'Em_Reparo', 'Reparo_Finalizado') NOT NULL,
    `dataAquisicao` DATETIME(3) NOT NULL,
    `qtdReparos` INTEGER NOT NULL,

    UNIQUE INDEX `Ativo_codInterno_key`(`codInterno`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
