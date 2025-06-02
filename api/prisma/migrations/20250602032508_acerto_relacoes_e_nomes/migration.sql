-- AddForeignKey
ALTER TABLE `HistoricoAlocacao` ADD CONSTRAINT `HistoricoAlocacao_chaveAtivo_fkey` FOREIGN KEY (`chaveAtivo`) REFERENCES `Ativo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
