import type { Request, Response, NextFunction } from "express";
import * as authService from "./auth.services";

export async function login(req: Request, res: Response, next:NextFunction){
    try {
        const email = req.body.email;
        const password = req.body.password;
        if (!email || !password){
            throw new Error("Senha e email são obrigatórios");
        }
        const result = await authService.login(email, password);
        res.status(200).json(result);
    }
    catch(error:any){
    next(error);
    }
}
