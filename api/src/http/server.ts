import express from 'express';
import ativosRouter from "../routes/ativo.router";

const app = express()
app.use(express.json())

app.use('/ativos', ativosRouter);
  

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})