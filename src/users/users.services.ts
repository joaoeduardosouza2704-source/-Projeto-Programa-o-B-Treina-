import * as usersRepository from "./users.repository";
import { User } from "./users.entity";

export async function ListallUsers(){
    return usersRepository.findAll();
}
export async function New_User(dadosUsuario:User){
    const novoUsuario = new User(dadosUsuario);
    return usersRepository.createUser(novoUsuario);
}