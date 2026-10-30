import type { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError";
export function errorHandler( err:Error, req:Request, res:Response, next:NextFunction){
    console.error("LOG INTERNO DO SERVER:", err);
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            error:{
                code:err.code,
                message:err.message
            },
        });
    }
    return res.status(500).json({
        error:{
            code:"INTERNAL SERVER ERROR",
            message:"Ocorreu um erro interno inesperado no servidor",
        },
    });
}