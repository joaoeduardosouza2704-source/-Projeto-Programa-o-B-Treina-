import { Router } from "express";
import * as usersController from "./users.controller";

const router = Router();
router.get("/api/users", usersController.getAll);
router.get("/api/users/:id", usersController.findByID);
router.patch("/api/users/:username", usersController.updateUser);
router.delete('/api/users/:username', usersController.Delete);


export default router;