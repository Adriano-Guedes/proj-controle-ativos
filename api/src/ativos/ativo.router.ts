import { Router } from "express";

import { getAllAtivos, getAtivosByUsuario, getAtivoById, createAtivo, updateAtivo, deleteAtivo, moveAtivo } from "./ativo.controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const ativoRouter = Router();

ativoRouter.use(authMiddleware);

ativoRouter.post("/lista", getAllAtivos);
ativoRouter.post("/listaByUsuario", getAtivosByUsuario);
ativoRouter.get("/:id", getAtivoById);
ativoRouter.post("/", createAtivo);
ativoRouter.put("/:id", updateAtivo);
ativoRouter.delete("/:id", deleteAtivo);
ativoRouter.put("/alocar/:id", moveAtivo);

export default ativoRouter;