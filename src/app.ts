import "dotenv/config"
import { loadConfig } from "./config";
import express from "express";
import usersRoutes from "./users/users.routes";
import treinosRoutes from "./treinos/treinos.routes";
import suplementoRoutes from "./suplementos/suplementos.router";


const config = loadConfig();
const app = express();
app.use(express.json())

app.use(usersRoutes);
app.use(treinosRoutes);
app.use(suplementoRoutes);
app.listen(config.port, () => {
 console.log(`Servidor rodando em http://localhost:${config.port}`);
});
