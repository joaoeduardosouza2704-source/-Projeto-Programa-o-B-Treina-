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
export async function getbyID(usuarioID: string){
    const usuarioPrisma = await prisma.usuario.findUnique({
        where:{
           id:usuarioID,
        }
    });
    const usuario = new User({
        nome: usuarioPrisma.nome,
        username: usuarioPrisma.username,
        email: usuarioPrisma.email,
        usuarioID:usuarioPrisma.id,
        criadoEm:usuarioPrisma.criadoEm
    }
    );
    return usuario;
}



export async function createUser(novoUsuario:User){
    const newUser = await prisma.usuario.create({
        data:{
            nome: novoUsuario.nome,
            username: novoUsuario.username,
            email:novoUsuario.email,
            password: novoUsuario.password
        }
    });
    return new User({
        username: newUser.username,
        nome: newUser.nome,
        email: newUser.email,
        password: newUser.password
    }, newUser.id , newUser.criadoEm);
}
export async function findbyEmail(user_email:string){
    const usuarioPrisma = await prisma.usuario.findUnique({
        where:{
            email:user_email,
        }
    });
    const usuario = new User({
        nome: usuarioPrisma.nome,
        username: usuarioPrisma.username,
        email: usuarioPrisma.email,
        usuarioID:usuarioPrisma.id,
        criadoEm:usuarioPrisma.criadoEm,
        password:usuarioPrisma.password
        
    }
    );
    return usuario;
}
export async function updateUsername(username_novo:string, username:string){
    const usuarioPrisma = await prisma.usuario.update({
        where:{
            username:username
        },
        data:{
            username:username_novo
        }

    });
    const usuarioAtualizado = new User({
        nome: usuarioPrisma.nome,
        username: usuarioPrisma.username,
        email: usuarioPrisma.email,
        usuarioID:usuarioPrisma.id,
        criadoEm:usuarioPrisma.criadoEm,
        password:usuarioPrisma.password
        
    }
    );
    return usuarioAtualizado;
}
    


