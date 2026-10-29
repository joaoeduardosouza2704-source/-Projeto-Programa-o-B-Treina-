import "dotenv/config"
import { loadConfig } from "./config";
import {AppError} from "./errors/AppError";
import express from "express";
import usersRoutes from "./users/users.routes";
import treinosRoutes from "./treinos/treinos.routes";
import suplementoRoutes from "./suplementos/suplementos.router";
import authRoutes from "./auth/auth.routes";
import { errorHandler } from "./errors/errorHandler";

const config = loadConfig();
const app = express();
app.use(express.json())
app.use((req:Request, res:Responde , next:Next Function) => {
    const err: AppError = new AppError("A rota solicitada não existe.", 404, "ROUTE_NOT_FOUND");
    next(err);
});
app.use(errorHandler);
app.use(usersRoutes);
app.use(treinosRoutes);
app.use(suplementoRoutes);
app.use(authRoutes);



app.listen(config.port, () => {
 console.log(`Servidor rodando em http://localhost:${config.port}`);
});
