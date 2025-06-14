import { PrismaClient } from "../../generated/prisma";
import bcrypt from 'bcrypt';
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { CreateUsuarioDto } from "./dto/create-usuario.dto";
import { UpdateUsuarioDto } from "./dto/update-usuario.dto";

const db = new PrismaClient().usuario;

// Get all usuarios
export const getAllUsuarios = async (req: Request, res: Response) => {
  try {
    const filters: any = {};

    if (req.body.nome) {
      filters.nome = {
        contains: req.body.nome.toString(),
      };
    }

    if (req.body.email) {
      filters.email = { contains: req.body.email.toString()};
    }

    if (req.body.nomeCargo) {
      filters.cargo = { nome: {contains: req.body.nomeCargo}};
    }

    const usuarios = await db.findMany({
      where: filters,
      select: {
        id: true,
        nome: true,
        email: true,
        login: true,
        chaveCargo: true,
        cargo: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
    res.status(200).json(usuarios);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e });
  }
};

// Get usuario by id
export const getUsuarioById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const usuario = await db.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        login: true,
        chaveCargo: true,
        cargo: true,
      },
    });

    if (!usuario) {
      res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(200).json(usuario);
  } catch (e) {
    console.error(e);
    res.status(500).json({ e });
  }
};

// Update usuario
export const updateUsuario = async (req: Request, res: Response) => {
  try {
    const newDataUsuario = plainToInstance(UpdateUsuarioDto, req.body);
    const erros = await validate(newDataUsuario);
    if (erros.length > 0) {
      const mensagens = erros.map(e => Object.values(e.constraints ?? {})).flat();
      res.status(400).json({ erros: mensagens });
      return;
    }

    await db.update({
      where: {
        id: req.params.id,
      },
      data: newDataUsuario,
    });

    const usuario = await db.findUnique({
      where: {
        id: req.params.id,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        login: true,
        chaveCargo: true,
        cargo: true,
      },
    });

    res.status(200).json(usuario);
  } catch (e) {
    console.error(e);
    res.status(500).json({ erro: e });
  }
};

// Delete usuario
export const deleteUsuario = async (req: Request, res: Response) => {
  try {
    await db.delete({
      where: { id: req.params.id },
    });

    res.status(200).json({ mensagem: "Usuário deletado com sucesso" });
  } catch (e: any) {
    if (e.code === "P2025") {
      res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    console.error(e);
    res.status(500).json({ erro: e });
  }
};
