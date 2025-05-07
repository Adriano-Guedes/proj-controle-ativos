import { Router } from "express";
import { getAllHistoricos, getHistoricoById } from "../controllers/historicoAlocacao.controller"

const historicoRouter = Router();

historicoRouter.post("/", getAllHistoricos);
historicoRouter.get("/:id", getHistoricoById);

export default historicoRouter;