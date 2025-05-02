import { Router } from "express";

import { getAllAtivos, getAtivoById, createAtivo, updateAtivo, deleteAtivo } from "../controllers/ativo.controller";

const ativoRouter = Router();

ativoRouter.get("/", getAllAtivos);
ativoRouter.get("/:id", getAtivoById);
ativoRouter.post("/", createAtivo);
ativoRouter.put("/:id", updateAtivo);
ativoRouter.delete("/:id", deleteAtivo);


export default ativoRouter;