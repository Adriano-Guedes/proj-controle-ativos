import { Router } from "express";

import { getAllAtivos, getAtivoById, createAtivo, updateAtivo, deleteAtivo, moveAtivo } from "./ativo.controller";

const ativoRouter = Router();

ativoRouter.post("/lista", getAllAtivos);
ativoRouter.get("/:id", getAtivoById);
ativoRouter.post("/", createAtivo);
ativoRouter.put("/:id", updateAtivo);
ativoRouter.delete("/:id", deleteAtivo);
ativoRouter.post("/:id", moveAtivo);

export default ativoRouter;