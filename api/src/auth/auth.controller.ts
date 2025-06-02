import { PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";
import { generateToken } from "../utils/jwt";
import bcrypt from 'bcrypt';

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
                OR: [
                    { email: login },
                    { login: login }
                ]
            }
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

        res.json({ data: { token } });

    } catch (e) {
        res.status(500).json({ e });
        res.status(500).json({ message: "Erro interno do servidor." });
    }
};
