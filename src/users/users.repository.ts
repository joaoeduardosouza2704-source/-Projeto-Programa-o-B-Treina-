import { prisma } from "../db";
import {User} from "./users.entity";

export async function findAll(){
    const usuariosPrisma = await prisma.usuario.findMany({
        include:{
            treinos:true,
        }
    });

    const usuarios = usuariosPrisma.map((dadosprisma) => {
        const usuario = new User({
            nome: dadosprisma.nome,
            username:dadosprisma.username,
            email:dadosprisma.email,
        },
        dadosprisma.id,
        dadosprisma.criadoEm
        );
        if(dadosprisma.treinos){
            usuario.treinos = dadosprisma.treinos;
        }
        return usuario;
    });
    return usuarios;
}
export async function createUser(novoUsuario:User){
    const newUser = await prisma.usuario.create({
        data:{
            nome: novoUsuario.nome,
            username: novoUsuario.username,
            email:novoUsuario.email
        }
    });
    return new User({
        username: newUser.username,
        nome: newUser.nome,
        email: newUser.email
    }, newUser.id , newUser.criadoEm);
}
    


