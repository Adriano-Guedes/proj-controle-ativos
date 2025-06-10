import { Router } from "express";
import {getAllLocalizacoes, getLocalizacaoById, createLocalizacao, updateLocalizacao, deleteLocalizacao} from "./localizacao.controller"
import { authMiddleware } from "../middlewares/authMiddleware";

const localizacaoRouter = Router();

localizacaoRouter.use(authMiddleware);

localizacaoRouter.post("/lista", getAllLocalizacoes);
localizacaoRouter.get("/localizacao/:id", getLocalizacaoById);
localizacaoRouter.post("/", createLocalizacao);
localizacaoRouter.put("/localizacao/:id", updateLocalizacao);
localizacaoRouter.delete("/localizacao/:id", deleteLocalizacao);

export default localizacaoRouter;