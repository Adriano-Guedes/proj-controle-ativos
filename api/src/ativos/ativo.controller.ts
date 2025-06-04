import { PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateAtivoDto } from "./dto/create-ativo.dto";

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
        contains: req.body.codInterno.toString()
      }
    }

    if (req.body.status) {
      filters.status = req.body.status.toString();
    }

    if (req.body.chaveResponsavel) {
      filters.chaveResponsavel = parseInt(
        req.body.chaveResponsavel.toString()
      );
    }

    if (req.body.chaveLocalizacao) {
      filters.chaveLocalizacao = parseInt(
        req.body.chaveLocalizacao.toString()
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

    res.status(200).json(ativos ? { data: ativos } : { mensagem: "Consulta não gerou resultado" });
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
    var chaveResponsavel = req.body.chaveResponsavel;
    var chaveLocalizacao = req.body.chaveLocalizacao;
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      res.status(400).json({ mensagem: "ID inválido" });
      return
    }

    if (!chaveResponsavel && !chaveLocalizacao) {
      res.status(400).json({ mensagem: "Nenhuma movimentação a ser realizada" });
      return
    }

    if (chaveLocalizacao) {
      const localizacao = await dbLocalizacao.findUnique({
        where: { id: chaveLocalizacao },
      });
      if (!localizacao) {
        res.status(404).json({ mensagem: "Localização não encontrada" });
        return
      }
    }else{
      chaveLocalizacao = null;
    }

    if (chaveResponsavel) {
      const usuario = await dbUsuario.findUnique({
        where: { id: chaveResponsavel },
      });
      if (!usuario) {
        res.status(404).json({ mensagem: "Usuário não encontrado" });
        return
      }
    }else{
      chaveResponsavel = null;
    }

    const ativo = await db.findUnique({
      where: { id },
      include: { responsavel: true, localizacao: true },
    });

    if (!ativo) {
      res.status(404).json({ mensagem: "Ativo não encontrado" });
      return
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

    res.status(200).json({ mensagem: "Ativo atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: "Erro ao atualizar o ativo", error });
  }
};
