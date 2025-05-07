import { Router } from "express";
import {getAllCargos, getCargoById, createCargo, updateCargo, deleteCargo} from "../controllers/cargo.controller"

const cargoRouter = Router();

cargoRouter.get("/", getAllCargos);
cargoRouter.get("/:id", getCargoById);
cargoRouter.post("/", createCargo);
cargoRouter.put("/:id", updateCargo);
cargoRouter.delete("/:id", deleteCargo);

export default cargoRouter;