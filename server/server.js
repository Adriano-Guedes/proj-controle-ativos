import express from 'express'
import Ativo from './models/Ativo.js'
import { PrismaClient } from './generated/prisma/client.js'

const db = new PrismaClient()

const app = express()
app.use(express.json())


app.get('/ativos', async (req, res) => {
    try {
        let ativos = []
        ativos = await db.ativo.findMany({
            where:{
                nome: req.query.nome,
                codInterno: req.query.codInterno,
                status: req.query.status
            }
        });
        res.status(200).json(ativos)
    } catch (error) {
        res.status(500).json({ error: "Erro ao consultar ativos", detalhes: error.message });
    }
})

app.get('/ativo/:id', async (req, res) => {
    try {
        const ativo = await db.ativo.findMany({
            where:{
                id: parseInt(req.params.id)
            }
        });
        res.status(200).json(ativo.length === 0 ? { mensagem: 'Consulta não gerou resultado' } : ativo);
    } catch (error) {
        res.status(500).json({ error: "Erro ao consultar ativo", detalhes: error.message });
    }
})


app.post('/ativo', async (req, res) => {
    try {
      const { nome, codInterno, descricao, valor, status, dataAquisicao, qtdReparos } = req.body;
  
      let novoAtivo = await db.ativo.create({
        data: {
          nome,
          codInterno,
          descricao,
          valor,
          status,
          dataAquisicao: new Date(dataAquisicao),
          qtdReparos
        }
      });
  
      res.status(201).json(novoAtivo);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar ativo", detalhes: error.message });
    }
  });

  app.put('/ativo/:id', async (req, res) => {
    try {
      const { nome, codInterno, descricao, valor, status, dataAquisicao, qtdReparos } = req.body;
      await db.ativo.update({
        where:{
            id: parseInt(req.params.id)
        },
        data: {
          nome,
          codInterno,
          descricao,
          valor,
          status,
          dataAquisicao: new Date(dataAquisicao),
          qtdReparos
        }
      });
  
      const ativos = await db.ativo.findMany({
        where:{
            id: parseInt(req.params.id)
        }
      });
  
      res.status(201).json(ativos);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar ativo", detalhes: error.message });
    }
  });

  app.delete('/ativo/:id', async (req,res) => {
    try {
        await db.ativo.delete({
            where:{
                id: parseInt(req.params.id)
            }
        })
        res.status(200).json('Ativo deletado com sucesso')
    } catch (error) {
        res.status(500).json({ error: "Erro ao excluir ativo", detalhes: error.message });
    }
  })
  

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})