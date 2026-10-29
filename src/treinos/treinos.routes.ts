import { Router} from "express";
import * as treinosController from "./treinos.controller";

const router = Router();
router.get("/api/treinos/:id", treinosController.GetAllTreinosbyID);
router.post("/api/treinos", treinosController.create);
export default router;