-- DropForeignKey
ALTER TABLE `HistoricoAlocacao` DROP FOREIGN KEY `HistoricoAlocacao_chaveAtivo_fkey`;

-- DropIndex
DROP INDEX `HistoricoAlocacao_chaveAtivo_fkey` ON `HistoricoAlocacao`;

-- AddForeignKey
ALTER TABLE `HistoricoAlocacao` ADD CONSTRAINT `HistoricoAlocacao_chaveAtivo_fkey` FOREIGN KEY (`chaveAtivo`) REFERENCES `Ativo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
