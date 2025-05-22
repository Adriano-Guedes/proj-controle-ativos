import { Router } from "express";
import {getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario} from "./usuario.controller"

const usuarioRouter = Router();

usuarioRouter.post("/lista", getAllUsuarios);
usuarioRouter.get("/usuario/:id", getUsuarioById);
usuarioRouter.post("/", createUsuario);
usuarioRouter.put("/usuario/:id", updateUsuario);
usuarioRouter.delete("/usuario/:id", deleteUsuario);

export default usuarioRouter;