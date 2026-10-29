
import type { Response, Request, NextFunction} from "express";
import * as suplementosServices from "./suplementos.services"

export async function new_Suplemento(req:Request, res:Response ,next:NextFunction){
    try {
        const dados_brutos = req.body 
        const novoSuplemento = await suplementosServices.criarSuplemento(dados_brutos);
        return res.json(novoSuplemento)
    }
    catch(err){
        next(err);
    }
}