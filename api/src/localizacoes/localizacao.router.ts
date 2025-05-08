import { Router } from "express";
import {getAllLocalizacoes, getLocalizacaoById, createLocalizacao, updateLocalizacao, deleteLocalizacao} from "./localizacao.controller"

const localizacaoRouter = Router();

localizacaoRouter.post("/lista", getAllLocalizacoes);
localizacaoRouter.get("/localizacao/:id", getLocalizacaoById);
localizacaoRouter.post("/", createLocalizacao);
localizacaoRouter.put("/localizacao/:id", updateLocalizacao);
localizacaoRouter.delete("/localizacao/:id", deleteLocalizacao);

export default localizacaoRouter;