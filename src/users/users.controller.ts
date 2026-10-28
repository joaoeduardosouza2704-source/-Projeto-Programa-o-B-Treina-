import type { Request, Response, NextFunction } from "express";
import * as usersServices from "./users.services";
import {User} from "./users.entity";

export async function getAll(req:Request, res:Response, next:NextFunction){
    try{
        const Users: User = await usersServices.ListallUsers();
        res.json(Users);
    }
    catch (err){
        next(err);
    }
}
export async function create(req:Request, res: Response, next:NextFunction){
    try{
        const dadosBody = req.body;
        const usuarioCriado = await usersServices.New_User(dadosBody);
    }
    catch(err){
        next(err);
    }
}