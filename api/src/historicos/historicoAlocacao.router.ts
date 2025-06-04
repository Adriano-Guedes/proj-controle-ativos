import { Router } from "express";
import { getAllHistoricos, getHistoricoById } from "./historicoAlocacao.controller"
import { authMiddleware } from "../middlewares/authMiddleware";

const historicoRouter = Router();

historicoRouter.use(authMiddleware);

historicoRouter.post("/", getAllHistoricos);
historicoRouter.get("/:id", getHistoricoById);

export default historicoRouter;