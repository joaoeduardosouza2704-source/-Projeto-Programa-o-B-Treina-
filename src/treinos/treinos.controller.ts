import * as treinosService from "./treinos.services";
import type { Response, Request, NextFunction} from "express";
import {Treino} from "./treinos.entity";
import { Serie } from "./series.entity";
import { Exercicios } from "./exercicios.entity";

export async function GetAllTreinosbyID(req:Request, res:Response, next:NextFunction){
    try{
    const id = req.params.id;
    const Treinos:Treino[] = await treinosService.Listar_Treinos_Usuario(id);
    res.json(Treinos);
    }
    catch(err){
        next(err);
    }
}
export async function create(req:Request, res:Response, next:NextFunction){
    try {
        const dados_brutos = req.body;
        const treino_salvo = await treinosService.criarTreinoCompleto(dados_brutos);
    
        return res.json(treino_salvo);
    }
    catch(err){
        next(err);
    }
}



