import { PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateAtivoDto } from "./dto/create-ativo.dto";

const db = new PrismaClient().ativo;
const dbHistoricoMovimentacao = new PrismaClient().historicoAlocacao;

// Get all ativos
export const getAllAtivos = async (req: Request, res: Response) => {
  try {
    const filters: any = {};

    if (req.query.nome) {
      filters.nome = {
        contains: req.query.nome.toString(),
        mode: "insensitive",
      }; // busca sem case sensitive
    }

    if (req.query.codInterno) {
      filters.codInterno = req.query.codInterno.toString();
    }

    if (req.query.status) {
      filters.status = req.query.status.toString();
    }

    if (req.query.chaveResponsavel) {
      filters.chaveResponsavel = parseInt(
        req.query.chaveResponsavel.toString()
      );
    }

    if (req.query.chaveLocalizacao) {
      filters.chaveLocalizacao = parseInt(
        req.query.chaveLocalizacao.toString()
      );
    }

    const ativos = await db.findMany({
      where: filters,
      include: {
        responsavel: true,
        localizacao: true,
      },
      orderBy: {
        nome: "asc",
      },
    });

    res.status(200).json({ data: ativos });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

// Get ativo by id
export const getAtivoById = async (req: Request, res: Response) => {
  try {
    const ativo = await db.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
      include: {
        responsavel: true,
        localizacao: true,
      },
    });
    res
      .status(200)
      .json(
        ativo ? { data: ativo } : { mensagem: "Consulta não gerou resultado" }
      );
  } catch (e) {
    res.status(500).json({ e });
  }
};

// Create ativo
export const createAtivo = async (req: Request, res: Response) => {
  try {
    const newAtivo = plainToInstance(CreateAtivoDto, req.body);
    const erros = await validate(newAtivo);

    if (erros.length > 0) {
      const mensagens = erros
        .map((e) => Object.values(e.constraints ?? {}))
        .flat();
      res.status(400).json({ erros: mensagens });
      return;
    }

    let novoAtivo = await db.create({
      data: {
        nome: newAtivo.nome,
        codInterno: newAtivo.codInterno,
        descricao: newAtivo.descricao,
        status: newAtivo.status,
        valor: newAtivo.valor,
        dataAquisicao: new Date(newAtivo.dataAquisicao),
        observacao: newAtivo.observacao,
        chaveResponsavel: newAtivo.chaveResponsavel,
        chaveLocalizacao: newAtivo.chaveLocalizacao,
      },
    });

    res.status(201).json({ data: novoAtivo });
  } catch (e) {
    res.status(500).json({ e });
  }
};

// Update ativo
export const updateAtivo = async (req: Request, res: Response) => {
  try {
    const {
      nome,
      codInterno,
      descricao,
      status,
      valor,
      dataAquisicao,
      observacao,
    } = req.body;
    await db.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        nome,
        codInterno,
        descricao,
        status,
        valor,
        dataAquisicao: new Date(dataAquisicao),
        observacao,
      },
    });

    const ativos = await db.findMany({
      where: {
        id: parseInt(req.params.id),
      },
      include: {
        responsavel: true,
        localizacao: true,
      },
    });

    res.status(201).json({ data: ativos });
  } catch (e) {
    res.status(500).json({ e });
  }
};

// Delete ativo
export const deleteAtivo = async (req: Request, res: Response) => {
  try {
    await db.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json({ mensagem: "Ativo deletado com sucesso" });
  } catch (e) {
    res.status(500).json({ e });
  }
};

// Move ativo
export const moveAtivo = async (req: Request, res: Response) => {
  try {
    const { chaveResponsavel, chaveLocalizacao } = req.body;
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      res.status(400).json({ mensagem: "ID inválido" });
      return;
    }

    const ativo = await db.findUnique({
      where: { id },
      include: { responsavel: true, localizacao: true },
    });

    if (!ativo) {
      res.status(404).json({ mensagem: "Ativo não encontrado" });
      return;
    }

    const dataToUpdate: any = {};

    if (chaveLocalizacao !== undefined && chaveLocalizacao !== null) {
      const chaveLoc = parseInt(chaveLocalizacao);
      if (!isNaN(chaveLoc)) dataToUpdate.chaveLocalizacao = chaveLoc;
    }

    if (chaveResponsavel !== undefined && chaveResponsavel !== null) {
      const chaveResp = parseInt(chaveResponsavel);
      if (!isNaN(chaveResp)) dataToUpdate.chaveResponsavel = chaveResp;
    }

    await db.update({
      where: { id },
      data: dataToUpdate,
    });

    try {
      await dbHistoricoMovimentacao.create({
        data: {
          chaveAtivo: id,
          data: new Date(),
          chaveLocalizacaoOrigem: ativo?.chaveLocalizacao,
          chaveResponsavelOrigem: ativo?.chaveResponsavel,
          chaveLocalizacaoDestino:
            dataToUpdate.chaveLocalizacao ?? ativo?.chaveLocalizacao,
          chaveResponsavelDestino:
            dataToUpdate.chaveResponsavel ?? ativo?.chaveResponsavel,
        },
      });
    } catch (err) {
      console.error("Erro ao salvar histórico de movimentação:", err);
    }

    res.status(200).json({ mensagem: "Ativo atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: "Erro ao atualizar o ativo", error });
  }
};
