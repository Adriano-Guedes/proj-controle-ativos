import { Router } from "express";
import { login, createUsuario } from "./auth.controller";

const authRouter = Router();

authRouter.post("/", login);
authRouter.post("/registrar", createUsuario);

export default authRouter;
