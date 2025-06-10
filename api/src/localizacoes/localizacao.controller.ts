import { PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateLocalizacaoDto } from "./dto/create-localizacao.dto";
import { UpdateLocalizacaoDto } from "./dto/update-localizacao.dto";

const db = new PrismaClient().localizacao;

// Get all localizacoes
export const getAllLocalizacoes = async (req: Request, res: Response) => {
  try {
    const localizacoes = await db.findMany({
      where: {
        endereco: {
          contains: req.body.nome,
        },
      },
      orderBy: {
        endereco: "asc",
      },
    });
    res.status(200).json(localizacoes);
  } catch (e) {
    res.status(500).json({ e });
  }
};

// Get localizacao by id
export const getLocalizacaoById = async (req: Request, res: Response) => {
  try {
    const localizacao = await db.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res
      .status(200)
      .json(
        localizacao
          ? localizacao
          : { mensagem: "Consulta não gerou resultado" }
      );
  } catch (e) {
    res.status(500).json({ e });
  }
};

// Create localizacao
export const createLocalizacao = async (req: Request, res: Response) => {
  try {
    const newLocalizacao = plainToInstance(CreateLocalizacaoDto, req.body);
    const erros = await validate(newLocalizacao);

    if (erros.length > 0) {
      const mensagens = erros
        .map((e) => Object.values(e.constraints ?? {}))
        .flat();
      res.status(400).json({ erros: mensagens });
      return;
    }

    let novaLocalizacao = await db.create({
      data: {
        endereco: newLocalizacao.endereco,
        descricao: newLocalizacao.descricao,
      },
    });

    res.status(201).json(novaLocalizacao);
  } catch (e: any) {
    if (e.code === "P2002") {
      res.status(400).json({
        mensagem:
          "Não foi possível cadastrar localização. Já existe uma com o mesmo endereço.",
      });
      return;
    }
    res.status(500).json({ e });
  }
};

// Update localizacao
export const updateLocalizacao = async (req: Request, res: Response) => {
  try {
    const updatedLocalizacao = plainToInstance(UpdateLocalizacaoDto, req.body);
    const erros = await validate(updatedLocalizacao);

    if (erros.length > 0) {
      const mensagens = erros
        .map((e) => Object.values(e.constraints ?? {}))
        .flat();
      res.status(400).json({ erros: mensagens });
      return;
    }

    const { endereco } = req.body;
    await db.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        endereco: updatedLocalizacao.endereco,
        descricao: updatedLocalizacao.descricao,
      },
    });

    const localizacao = await db.findMany({
      where: {
        id: parseInt(req.params.id),
      },
    });

    res.status(201).json(localizacao);
  } catch (e: any) {
    if (e.code === "P2025") {
      res.status(400).json({ mensagem: "Registro não encontrado." });
      return;
    } else if (e.code === "P2002") {
      res
        .status(400)
        .json({
          mensagem:
            "Não foi possível atualizar localização. Já existe uma com o mesmo endereço.",
        });
      return;
    }
    res.status(500).json({ e });
  }
};

// Delete localizacao
export const deleteLocalizacao = async (req: Request, res: Response) => {
  try {
    await db.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json({ mensagem: "Localização deletada com sucesso" });
  } catch (e: any) {
    if (e.code === "P2025") {
      res.status(400).json({ mensagem: "Registro não encontrado." });
      return;
    }
    res.status(500).json({ e });
  }
};
