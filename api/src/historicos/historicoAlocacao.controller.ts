import { PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateHistoricoAlocacaoDto } from "./dto/create-historicoAlocacao.dto";
import { log } from "console";

const db = new PrismaClient().historicoAlocacao;

// Get all históricos
export const getAllHistoricos = async (req: Request, res: Response) => {
  try {
    const chaveResponsavel = req.body.chaveResponsavel;
    const chaveLocalizacao = req.body.chaveLocalizacao;

    const where: any = {};

    const andFilters: any[] = [];

    if (chaveResponsavel) {
      andFilters.push({
        OR: [
          { chaveResponsavelOrigem: chaveResponsavel },
          { chaveResponsavelDestino: chaveResponsavel },
        ],
      });
    }

    if (chaveLocalizacao) {
      andFilters.push({
        OR: [
          { chaveLocalizacaoOrigem: chaveLocalizacao },
          { chaveLocalizacaoDestino: chaveLocalizacao },
        ],
      });
    }

    if (andFilters.length > 0) {
      where.AND = andFilters;
    }

    const historicos = await db.findMany({
      where,
      include: {
        ativo: true,
        localizacaoOrigem: true,
        responsavelOrigem: {
          select: {
            id: true,
            nome: true,
            email: true,
            login: true,
            chaveCargo: true,
            cargo: true,
          },
        },
        localizacaoDestino: true,
        responsavelDestino: {
          select: {
            id: true,
            nome: true,
            email: true,
            login: true,
            chaveCargo: true,
            cargo: true,
          },
        },
      },
      orderBy: { data: "desc" },
    });

    if (historicos.length === 0) {
      return res.status(200).json({ mensagem: "Consulta não gerou resultado" });
    }

    return res.status(200).json(historicos);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Erro ao buscar históricos" });
  }
};

// Get historico by id
export const getHistoricoById = async (req: Request, res: Response) => {
  try {
    const historico = await db.findMany({
      where: {
        chaveAtivo: parseInt(req.params.id),
      },
      include: {
        ativo: true,
        localizacaoOrigem: true,
        responsavelOrigem: {
          select: {
            id: true,
            nome: true,
            email: true,
            login: true,
            chaveCargo: true,
            cargo: true,
          },
        },
        localizacaoDestino: true,
        responsavelDestino: {
          select: {
            id: true,
            nome: true,
            email: true,
            login: true,
            chaveCargo: true,
            cargo: true,
          },
        },
      },
      orderBy: {
        data: "desc",
      },
    });

    res
      .status(200)
      .json(
        historico
          ? historico
          : { mensagem: "Consulta não gerou resultado" }
      );
  } catch (e) {
    res.status(500).json({ e });
  }
};
