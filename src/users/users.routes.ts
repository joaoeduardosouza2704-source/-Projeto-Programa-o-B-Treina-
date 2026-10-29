import { Router } from "express";
import * as usersController from "./users.controller";

const router = Router();
router.get("/api/users", usersController.getAll);
router.post("/api/users", usersController.create);

export default router;