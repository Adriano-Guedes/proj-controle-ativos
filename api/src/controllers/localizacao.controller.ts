import { PrismaClient } from '../../generated/prisma';

const db = new PrismaClient().localizacao;


import { Request, Response } from 'express';

// Get all localizacoes
export const getAllLocalizacoes = async (req: Request, res: Response) => {
    try {
        const localizacoes = await db.findMany({
            // where: {
            //     nome: req.query.nome
            // },
            orderBy: {
                endereco: 'asc',
            }
        });
        res.status(200).json({ data: localizacoes })
    } catch (e) {
        res.status(500).json({ e });
    }
}

// Get localizacao by id
export const getLocalizacaoById = async (req: Request, res: Response) => {
    try {
        const localizacao = await db.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(200).json(localizacao ? { data: localizacao } : { mensagem: 'Consulta não gerou resultado' });
    } catch (e) {
        res.status(500).json({ e });
    }
}

// Create localizacao
export const createLocalizacao = async (req: Request, res: Response) => {
    try {
        const { endereco } = req.body;

        let novaLocalizacao = await db.create({
            data: {
                endereco
            }
        });

        res.status(201).json({ data: novaLocalizacao });
    } catch (e) {
        res.status(500).json({ e });
    }
}

// Update localizacao
export const updateLocalizacao = async (req: Request, res: Response) => {
    try {
        const { endereco } = req.body;
        await db.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                endereco
            }
        });

        const localizacao = await db.findMany({
            where: {
                id: parseInt(req.params.id)
            }
        });

        res.status(201).json({ data: localizacao });
    } catch (e) {
        res.status(500).json({ e });
    }
}

// Delete localizacao
export const deleteLocalizacao = async (req: Request, res: Response) => {
    try {
        await db.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(200).json({ mensagem: 'Localização deletada com sucesso' });
    } catch (e) {
        res.status(500).json({ e });
    }
}