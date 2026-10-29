import * as suplementosRepository from "./suplementos.repository";
import {Suplemento} from "./suplementos.entity";

export async function criarSuplemento(dados_brutos:any) {
    const suplemento = new Suplemento({
        nome: dados_brutos.nome,
        dosagem: dados_brutos.dosagem,
        usuarioID: dados_brutos.usuarioID,
        horario:dados_brutos.horario

    })
    return suplementosRepository.create(suplemento);
}