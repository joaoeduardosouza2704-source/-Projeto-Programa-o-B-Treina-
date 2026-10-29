import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as userRepository from "../users/users.repository";
import { error } from "node:console";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
throw new Error("FATAL: JWT_SECRET não foi definido no ambiente.");
}

export async function login(email: string, password_digitado: string){
    const user = await userRepository.findbyEmail(email);
    if(!user || !user.password) {
        throw new error("Email ou senha incorreto");
    }
    const senhaValida = await bcrypt.compare(password_digitado, user.password);
    if (!senhaValida) {
        throw new AppError("E-mail ou senha incorretos.", 401, "UNAUTHORIZED") ;
    }
    const token = jwt.sign({id: user.id, email:user.email}, JWT_SECRET, {expiresIn:"2h"});
    return { token, user:{
        id:user.id,
        name:user.name,
        email:user.email
    }
};
}


