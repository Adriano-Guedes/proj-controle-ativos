import { Router } from "express";
import {getAllCargos, getCargoById, createCargo, updateCargo, deleteCargo} from "./cargo.controller"
import { authMiddleware } from "../middlewares/authMiddleware";

const cargoRouter = Router();

cargoRouter.use(authMiddleware);

cargoRouter.post("/lista", getAllCargos);
cargoRouter.get("/cargo/:id", getCargoById);
cargoRouter.post("/", createCargo);
cargoRouter.put("/cargo/:id", updateCargo);
cargoRouter.delete("/cargo/:id", deleteCargo);

export default cargoRouter;