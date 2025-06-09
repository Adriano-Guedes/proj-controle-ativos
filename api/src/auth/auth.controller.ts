import { PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";
import { generateToken } from "../utils/jwt";
import bcrypt from "bcrypt";
import { CreateUsuarioDto } from "../usuarios/dto/create-usuario.dto";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

const db = new PrismaClient().usuario;

export const login = async (req: Request, res: Response) => {
  try {
    var login = req.body.login;
    var senha = req.body.senha;

    if (!login || !senha) {
      res.status(400).json({ message: "Login e senha são obrigatórios." });
      return;
    }

    const user = await db.findFirst({
      where: {
        OR: [{ email: login }, { login: login }],
      },
    });

    if (!user) {
      res.status(401).json({ message: "Login ou senha inválida." });
      return;
    }

    const senhaValidada = await bcrypt.compare(senha, user.senha);

    if (!senhaValidada) {
      res.status(401).json({ message: "Login ou senha inválida." });
    }

    const token = generateToken({ userId: user.id.toString() });

    let id = user.id;
    let nome = user.nome;
    let email = user.email;
    let chaveCargo = user.chaveCargo;

    res.status(200).json({ token, id, nome, email, chaveCargo });
  } catch (e) {
    res.status(500).json({ e });
    res.status(500).json({ message: "Erro interno do servidor." });
  }
};

// Create usuario
export const createUsuario = async (req: Request, res: Response) => {
  try {
    const newUsuario = plainToInstance(CreateUsuarioDto, req.body);
    const erros = await validate(newUsuario);

    console.log(newUsuario);
    if (erros.length > 0) {
      const mensagens = erros
        .map((e) => Object.values(e.constraints ?? {}))
        .flat();
      res.status(400).json({ erros: mensagens });
      return;
    }

    const usuarios = await db.findMany({
      where: { OR: [{ email: newUsuario.email }, { login: newUsuario.login }] },
    });
    if (usuarios.length > 0) {
      res
        .status(400)
        .json({ message: "Email ou login já registrados, tente outro." });
      return;
    }

    const hash = await bcrypt.hash(newUsuario.senha, 10);

    const novoUsuario = await db.create({
      data: {
        nome: newUsuario.nome,
        email: newUsuario.email,
        login: newUsuario.login,
        senha: hash,
        chaveCargo: 2,
      },
    });

    const token = generateToken({ userId: novoUsuario.id.toString() });

    let id = novoUsuario.id;
    let nome = novoUsuario.nome;
    let email = novoUsuario.email;
    let chaveCargo = novoUsuario.chaveCargo;

    res.status(200).json({ token, id, nome, email, chaveCargo });
  } catch (e) {
    res.status(500).json({ e });
  }
};
