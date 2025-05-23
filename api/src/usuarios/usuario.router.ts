import { Router } from "express";
import {getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario} from "./usuario.controller"

const usuarioRouter = Router();

usuarioRouter.post("/lista", getAllUsuarios);
usuarioRouter.get("/:id", getUsuarioById);
usuarioRouter.post("/", createUsuario);
usuarioRouter.put("/:id", updateUsuario);
usuarioRouter.delete("/:id", deleteUsuario);

export default usuarioRouter;