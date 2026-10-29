import { Router } from "express";
import { login } from "./auth.controller";
const router = Router();
router.post("/api/login", login);
export default router;

