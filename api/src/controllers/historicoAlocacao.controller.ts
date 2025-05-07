import { PrismaClient } from "../../generated/prisma";

const db = new PrismaClient().historicoAlocacao;

import { Request, Response } from "express";

// Get all históricos
export const getAllHistoricos = async (req: Request, res: Response) => {
  try {
    const chaveResponsavel = req.body.chaveResponsavel;
    const usuarios = await db.findMany({
      where: {
        chaveAtivo: parseInt(req.body.idAtivo),
        OR: [
          { chaveResponsavelOrigem: chaveResponsavel },
          { chaveResponsavelDestino: chaveResponsavel },
        ]
      },
      include: {
        localizacaoOrigem: true,
        responsavelOrigem: true,
        localizacaoDestino: true,
        responsavelDestino: true
      },
      orderBy: {
        data: "desc",
      },
    });
    res.status(200).json({ data: usuarios });
  } catch (e) {
    res.status(500).json({ e });
  }
};

// Get historico by id
export const getHistoricoById = async (req: Request, res: Response) => {
  try {
    const historico = await db.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
      include: {
        localizacaoOrigem: true,
        responsavelOrigem: true,
        localizacaoDestino: true,
        responsavelDestino: true
      }
    });
    res
      .status(200)
      .json(
        historico
          ? { data: historico }
          : { mensagem: "Consulta não gerou resultado" }
      );
  } catch (e) {
    res.status(500).json({ e });
  }
};