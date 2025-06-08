import { Router } from "express";
import {getAllUsuarios, getUsuarioById, updateUsuario, deleteUsuario} from "./usuario.controller"
import { authMiddleware } from "../middlewares/authMiddleware"; 

const usuarioRouter = Router();

usuarioRouter.use(authMiddleware);

usuarioRouter.post("/lista", getAllUsuarios);
usuarioRouter.get("/:id", getUsuarioById);
usuarioRouter.put("/:id", updateUsuario);
usuarioRouter.delete("/:id", deleteUsuario);

export default usuarioRouter;