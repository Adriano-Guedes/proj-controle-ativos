import { PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateCargoDto } from "./dto/create-cargo.dto";
import { UpdateCargoDto } from "./dto/update-cargo.dto";

const db = new PrismaClient().cargo;

// Get all cargos
export const getAllCargos = async (req: Request, res: Response) => {
  try {
    const cargos = await db.findMany({
      where: {
        nome: { contains: req.body.nome },
      },
      orderBy: {
        nome: "asc",
      },
    });
    res
      .status(200)
      .json({ data: cargos });
  } catch (e) {
    res.status(500).json({ e });
  }
};

// Get cargo by id
export const getCargoById = async (req: Request, res: Response) => {
  try {
    const cargo = await db.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res
      .status(200)
      .json(
        cargo ? { data: cargo } : { mensagem: "Consulta não gerou resultado" }
      );
  } catch (e) {
    res.status(500).json({ e });
  }
};

// Create cargo
export const createCargo = async (req: Request, res: Response) => {
  try {
    const newCargo = plainToInstance(CreateCargoDto, req.body);
    const erros = await validate(newCargo);

    if (erros.length > 0) {
      const mensagens = erros
        .map((e) => Object.values(e.constraints ?? {}))
        .flat();
      res.status(400).json({ erros: mensagens });
      return;
    }

    let novoCargo = await db.create({
      data: {
        nome: newCargo.nome,
      },
    });

    res.status(201).json({ data: novoCargo });
  } catch (e: any) {
    if (e.code === "P2002") {
      res.status(400).json({
          mensagem:
            "Não foi possível cadastrar cargo. Já existe um com o mesmo nome.",
        });
      return;
    }
    res.status(500).json({ e });
  }
};

// Update cargo
export const updateCargo = async (req: Request, res: Response) => {
  try {
    const updatedCargo = plainToInstance(UpdateCargoDto, req.body);
    const erros = await validate(updatedCargo);

    if (erros.length > 0) {
      const mensagens = erros
        .map((e) => Object.values(e.constraints ?? {}))
        .flat();
      res.status(400).json({ erros: mensagens });
      return;
    }

    await db.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        nome: updatedCargo.nome,
      },
    });

    const cargo = await db.findMany({
      where: {
        id: parseInt(req.params.id),
      },
    });

    res.status(201).json({ data: cargo });
  } catch (e: any) {
    if (e.code === "P2025") {
      res.status(400).json({ mensagem: "Registro não encontrado." });
      return;
    } else if (e.code === "P2002") {
      res
        .status(400)
        .json({
          mensagem:
            "Não foi possível atualizar cargo. Já existe um com o mesmo nome.",
        });
      return;
    }
    res.status(500).json({ e });
  }
};

// Delete cargo
export const deleteCargo = async (req: Request, res: Response) => {
  try {
    await db.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json({ mensagem: "Cargo deletado com sucesso" });
  } catch (e: any) {
    if (e.code === "P2025") {
      res.status(400).json({ mensagem: "Registro não encontrado." });
      return;
    }
    res.status(500).json({ e });
  }
};
