import { PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateAtivoDto } from "./dto/create-ativo.dto";
import { login } from "../auth/auth.controller";

const db = new PrismaClient().ativo;
const dbLocalizacao = new PrismaClient().localizacao;
const dbUsuario = new PrismaClient().usuario;

const dbHistoricoMovimentacao = new PrismaClient().historicoAlocacao;

// Get all ativos
export const getAllAtivos = async (req: Request, res: Response) => {
  try {
    const filters: any = {};

    if (req.body.nome) {
      filters.nome = {
        contains: req.body.nome.toString(),
      };
    }

    if (req.body.codInterno) {
      filters.codInterno = {
        contains: req.body.codInterno.toString(),
      };
    }

    if (req.body.status) {
      filters.status = req.body.status.toString();
    }

    if (req.body.chaveResponsavel) {
      filters.chaveResponsavel = req.body.chaveResponsavel;
    }

    if (req.body.chaveLocalizacao) {
      filters.chaveLocalizacao = req.body.chaveLocalizacao;
    }

    const ativos = await db.findMany({
      where: filters,
      include: {
        responsavel: {
          select: {
            id: true,
            nome: true,
            email: true,
            login: true,
            chaveCargo: true,
            cargo: true,
          },
        },
        localizacao: true,
      },
      orderBy: {
        nome: "asc",
      },
    });

    res
      .status(200)
      .json(ativos ? ativos : { message: "Consulta não gerou resultado" });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export const getAtivosByUsuario = async (req: Request, res: Response) => {
  try {
    const filters: any = {};

    if (req.body.chaveResponsavel) {
      filters.chaveResponsavel = req.body.chaveResponsavel;
    }

    const ativos = await db.findMany({
      where: filters,
      include: {
        responsavel: {
          select: {
            id: true,
            nome: true,
            email: true,
            login: true,
            chaveCargo: true,
            cargo: true,
          },
        },
        localizacao: true,
      },
      orderBy: {
        nome: "asc",
      },
    });

    res
      .status(200)
      .json(ativos ? ativos : { message: "Consulta não gerou resultado" });
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
        responsavel: {
          select: {
            id: true,
            nome: true,
            email: true,
            login: true,
            chaveCargo: true,
            cargo: true,
          },
        },
        localizacao: true,
      },
    });
    res
      .status(200)
      .json(ativo ? ativo : { message: "Consulta não gerou resultado" });
  } catch (e) {
    res.status(500).json({ e });
  }
};

// Create ativo
export const createAtivo = async (req: Request, res: Response) => {
  try {
    const newAtivo = plainToInstance(CreateAtivoDto, req.body);
    console.log(newAtivo);
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
        codInterno: newAtivo.codInterno === "" ? null : newAtivo.codInterno,
        descricao: newAtivo.descricao === "" ? null : newAtivo.descricao,
        status: newAtivo.status,
        valor: newAtivo.valor,
        dataAquisicao: new Date(newAtivo.dataAquisicao),
        observacao: newAtivo.observacao === "" ? null : newAtivo.observacao,
        chaveResponsavel: newAtivo.chaveResponsavel,
        chaveLocalizacao: newAtivo.chaveLocalizacao,
      },
    });

    console.log("criado: ", novoAtivo);

    res.status(201).json(novoAtivo);
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

    res.status(201).json(ativos);
  } catch (e) {
    res.status(500).json({ e });
  }
};

// Delete ativo
export const deleteAtivo = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    await db.delete({
      where: { id },
    });

    res.status(200).json({ message: "Ativo deletado com sucesso" });
  } catch (e: any) {
    console.error("Erro ao deletar ativo:", e);
    res
      .status(500)
      .json({ error: "Erro ao deletar ativo", details: e.message });
  }
};

// Move ativo
export const moveAtivo = async (req: Request, res: Response) => {
  try {
    var id = req.body.id;
    var chaveResponsavel = req.body.chaveResponsavel;
    var chaveLocalizacao = req.body.chaveLocalizacao;

    if (isNaN(id)) {
      res.status(400).json({ message: "ID inválido" });
      return;
    }

    if (!chaveResponsavel && !chaveLocalizacao) {
      res.status(400).json({ message: "Nenhuma movimentação a ser realizada" });
      return;
    }

    if (chaveLocalizacao) {
      const localizacao = await dbLocalizacao.findUnique({
        where: { id: chaveLocalizacao },
      });
      if (!localizacao) {
        res.status(404).json({ message: "Localização não encontrada" });
        return;
      }
    } else {
      chaveLocalizacao = null;
    }

    if (chaveResponsavel) {
      const usuario = await dbUsuario.findUnique({
        where: { id: chaveResponsavel },
      });
      if (!usuario) {
        res.status(404).json({ message: "Usuário não encontrado" });
        return;
      }
    } else {
      chaveResponsavel = null;
    }

    const ativo = await db.findUnique({
      where: { id },
      include: { responsavel: true, localizacao: true },
    });

    if (!ativo) {
      res.status(404).json({ message: "Ativo não encontrado" });
      return;
    }

    const updateData: any = {};

    updateData.chaveResponsavel = chaveResponsavel;
    updateData.chaveLocalizacao = chaveLocalizacao;

    await db.update({
      where: { id },
      data: updateData,
    });

    // Registrar histórico
    try {
      await dbHistoricoMovimentacao.create({
        data: {
          chaveAtivo: id,
          data: new Date(),
          chaveLocalizacaoOrigem: ativo.chaveLocalizacao,
          chaveResponsavelOrigem: ativo.chaveResponsavel,
          chaveLocalizacaoDestino: chaveLocalizacao,
          chaveResponsavelDestino: chaveResponsavel,
        },
      });
    } catch (err) {
      console.error("Erro ao salvar histórico de movimentação:", err);
    }

    res.status(200).json({ message: "Ativo atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar o ativo", error });
  }
};
