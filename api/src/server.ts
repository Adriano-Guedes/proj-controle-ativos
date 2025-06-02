import "reflect-metadata";
import express from 'express';
import ativosRouter from "./ativos/ativo.router";
import cargosRouter from "./cargos/cargo.router";
import historicosRouter from "./historicos/historicoAlocacao.router";
import localizacoesRouter from "./localizacoes/localizacao.router";
import asuariosRouter from "./usuarios/usuario.router";
import authRouter from "./auth/auth.router"

const app = express()
app.use(express.json())

app.use('/login', authRouter)
app.use('/ativos', ativosRouter);
app.use('/cargos', cargosRouter);
app.use('/historicosMovimentacao', historicosRouter);
app.use('/localizacoes', localizacoesRouter);
app.use('/usuarios', asuariosRouter);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})