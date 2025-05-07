import { PrismaClient } from "../../generated/prisma";

const db = new PrismaClient().usuario;

import { Request, Response } from "express";

// Get all usuarios
export const getAllUsuarios = async (req: Request, res: Response) => {
  try {
    const filters: any = {};

    if (req.body.nome) {
      filters.nome = { contains: req.body.nome, mode: 'insensitive' }
    }

    if (req.body.email) {
      filters.email = req.body.email;
    }

    if (req.body.login) {
      filters.login = req.body.login;
    }

    if (req.body.chaveCargo) {
      filters.chaveCargo = parseInt(req.body.chaveCargo);
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

    res.status(200).json({ data: usuarios });
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

    res.status(200).json({ data: usuario });
  } catch (e) {
    console.error(e);
    res.status(500).json({ e });
  }
};

// Create usuario
export const createUsuario = async (req: Request, res: Response) => {
  try {
    const { nome, email, login, senha, chaveCargo } = req.body;

    //validar senha
    //verificar se n tem nenhum email nem login igual no banco
    //criptografar a senha

    let novoUsuario = await db.create({
      data: {
        nome,
        email,
        login,
        senha,
        chaveCargo,
      },
    });

    res.status(201).json({ data: novoUsuario });
  } catch (e) {
    res.status(500).json({ e });
  }
};

// Update usuario
export const updateUsuario = async (req: Request, res: Response) => {
  try {
    const { nome, email, chaveCargo } = req.body;

    const dataToUpdate: any = {};
    if (nome !== undefined) dataToUpdate.nome = nome;
    if (email !== undefined) dataToUpdate.email = email;
    if (chaveCargo !== undefined) dataToUpdate.chaveCargo = chaveCargo;

    if (Object.keys(dataToUpdate).length === 0) {
      res.status(400).json({ mensagem: "Nenhum campo para atualizar" });
    }

    await db.update({
      where: {
        id: req.params.id,
      },
      data: dataToUpdate,
    });

    const usuario = await db.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        cargo: true,
      },
    });

    res.status(200).json({ data: usuario });
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
    if (e.code === 'P2025') {
      res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    console.error(e);
    res.status(500).json({ erro: e });
  }
};

