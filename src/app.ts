import "dotenv/config";
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
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[REQUISIÇÃO CHEGOU] Método: ${req.method} | URL: ${req.url}`);
  next();
});
app.use(express.json())
app.use(usersRoutes);
app.use(treinosRoutes);
app.use(suplementoRoutes);
app.use(authRoutes);
app.use((req:Request, res:Response , next:NextFunction) => {
    const err: AppError = new AppError("A rota solicitada não existe.", 404, "ROUTE_NOT_FOUND");
    next(err);
});
app.use(errorHandler);


app.listen(config.port, () => {
 console.log(`Servidor rodando em http://localhost:${config.port}`);
});
