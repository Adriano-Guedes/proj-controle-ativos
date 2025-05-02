import { PrismaClient } from '../../generated/prisma';

const db = new PrismaClient().ativo;


import { Request, Response } from 'express';

// Get all ativos
export const getAllAtivos = async (req: Request, res: Response) => {
    try {
        const ativos = await db.findMany({
            // where: {
            //     nome: req.query.nome,
            //     codInterno: req.query.codInterno,
            //     status: req.query.status,
            //     chaveResponsavel: req.query.chaveResponsavel,
            //     chaveLocalizacao: req.query.chaveLocalizacao,
            // },
            include: {
                responsavel: true,
                localizacao: true
            },
            orderBy: {
                nome: 'asc',
            }
        });
        res.status(200).json({ data: ativos })
    } catch (e) {
        res.status(500).json({ e });
    }
}

// Get ativo by id
export const getAtivoById = async (req: Request, res: Response) => {
    try {
        const ativo = await db.findUnique({
            where: {
                id: parseInt(req.params.id)
            },
            include: {
                responsavel: true,
                localizacao: true
            }
        });
        res.status(200).json(ativo ? { data: ativo } : { mensagem: 'Consulta não gerou resultado' });
    } catch (e) {
        res.status(500).json({ e });
    }
}

// Create ativo
export const createAtivo = async (req: Request, res: Response) => {
    try {
        const { nome, codInterno, descricao, status, valor, dataAquisicao, descricaoProblema, qtdReparos, chaveResponsavel, chaveLocalizacao } = req.body;

        let novoAtivo = await db.create({
            data: {
                nome,
                codInterno,
                descricao,
                status,
                valor,
                dataAquisicao: new Date(dataAquisicao),
                descricaoProblema,
                qtdReparos,
                chaveResponsavel,
                chaveLocalizacao
            }
        });

        res.status(201).json({ data: novoAtivo });
    } catch (e) {
        res.status(500).json({ e });
    }
}

// Update ativo
export const updateAtivo = async (req: Request, res: Response) => {
    try {
        const { nome, codInterno, descricao, status, valor, dataAquisicao, descricaoProblema, qtdReparos, chaveResponsavel, chaveLocalizacao } = req.body;
        await db.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                nome,
                codInterno,
                descricao,
                status,
                valor,
                dataAquisicao: new Date(dataAquisicao),
                descricaoProblema,
                qtdReparos,
                chaveResponsavel,
                chaveLocalizacao
            }
        });

        const ativos = await db.findMany({
            where: {
                id: parseInt(req.params.id)
            },
            include: {
                responsavel: true,
                localizacao: true
            }
        });

        res.status(201).json({ data: ativos });
    } catch (e) {
        res.status(500).json({ e });
    }
}

// Delete ativo
export const deleteAtivo = async (req: Request, res: Response) => {
    try {
        await db.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(200).json({ mensagem: 'Ativo deletado com sucesso' });
    } catch (e) {
        res.status(500).json({ e });
    }
}