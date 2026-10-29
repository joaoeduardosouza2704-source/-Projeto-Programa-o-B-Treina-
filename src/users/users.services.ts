import * as usersRepository from "./users.repository";
import { User } from "./users.entity";
import bcrypt from 'bcryptjs';
export async function ListallUsers(){
    return usersRepository.findAll();
}
export async function New_User(dadosUsuario:User){
    const novoUsuario = new User(dadosUsuario);
    const senhaHash = await bcrypt.hash(novoUsuario.password, 10);
    novoUsuario.password = senhaHash;
    return usersRepository.createUser(novoUsuario);
}
export async function ListaUser(usuarioID: string){
    return usersRepository.getbyID(usuarioID);
}
export async function atualizaUsername(novo_username:string, username:string){
    return usersRepository.updateUsername(novo_username, username);
}
export async function deleteUsername(username:string){
    return usersRepository.deleteUsername(username);
}
