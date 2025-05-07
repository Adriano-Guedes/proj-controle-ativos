import { PrismaClient } from '../../generated/prisma';

const db = new PrismaClient().cargo;


import { Request, Response } from 'express';

// Get all cargos
export const getAllCargos = async (req: Request, res: Response) => {
    try {
        const cargos = await db.findMany({
            // where: {
            //     nome: req.query.nome
            // },
            orderBy: {
                nome: 'asc',
            }
        });
        res.status(200).json({ data: cargos })
    } catch (e) {
        res.status(500).json({ e });
    }
}

// Get cargo by id
export const getCargoById = async (req: Request, res: Response) => {
    try {
        const cargo = await db.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(200).json(cargo ? { data: cargo } : { mensagem: 'Consulta não gerou resultado' });
    } catch (e) {
        res.status(500).json({ e });
    }
}

// Create cargo
export const createCargo = async (req: Request, res: Response) => {
    try {
        const { nome } = req.body;

        let novoCargo = await db.create({
            data: {
                nome
            }
        });

        res.status(201).json({ data: novoCargo });
    } catch (e) {
        res.status(500).json({ e });
    }
}

// Update cargo
export const updateCargo = async (req: Request, res: Response) => {
    try {
        const { nome } = req.body;
        await db.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                nome
            }
        });

        const cargo = await db.findMany({
            where: {
                id: parseInt(req.params.id)
            }
        });

        res.status(201).json({ data: cargo });
    } catch (e) {
        res.status(500).json({ e });
    }
}

// Delete cargo
export const deleteCargo = async (req: Request, res: Response) => {
    try {
        await db.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(200).json({ mensagem: 'Cargo deletado com sucesso' });
    } catch (e) {
        res.status(500).json({ e });
    }
}