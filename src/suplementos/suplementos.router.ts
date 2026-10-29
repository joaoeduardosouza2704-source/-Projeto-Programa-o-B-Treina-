import {Router} from "express";
import * as suplementosController from "./suplementos.controller";

const router = Router()
router.post("/api/usuarios/suplementos", suplementosController.new_Suplemento);
export default router