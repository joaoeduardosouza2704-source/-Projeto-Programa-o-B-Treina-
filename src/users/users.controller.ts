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
        res.json(usuarioCriado);
    }
    catch(err){
        next(err);
    }
}
export async function findByID(req:Request, res:Response, next:NextFunction){
    try{
        const id = req.params.id;
        const User: User = await usersServices.ListaUser(id);
        res.json(User);
    }
    catch(err){
        next(err);
    }
}
export async function updateUser(req:Request, res:Response, next:NextFunction){
    try {
        const username = req.params.username
        const novo_username = req.body.novo_username
        const usuarioAtualizado: User = await usersServices.atualizaUsername(novo_username, username);
        res.json(usuarioAtualizado);
    }
    catch(err){
        next(err);
    }
}
export async function Delete(req:Request, res:Response, next:NextFunction){
    try{
        const username = req.params.username
        const usuarioDeletado = await usersServices.deleteUsername(username);
        res.json(200);
    }
    catch(err){
        next(err);
    }
}