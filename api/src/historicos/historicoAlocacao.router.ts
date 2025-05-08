import { Router } from "express";
import { getAllHistoricos, getHistoricoById } from "./historicoAlocacao.controller"

const historicoRouter = Router();

historicoRouter.post("/", getAllHistoricos);
historicoRouter.get("/:id", getHistoricoById);

export default historicoRouter;