import { prisma } from "../db";
import { Suplemento } from "./suplementos.entity";

export async function create(suplemento:Suplemento){
    const NovoSuplemento = await prisma.suplemento.create({
        data:{
            nome:suplemento.nome,
            dosagem:suplemento.dosagem,
            usuarioID:suplemento.usuarioId
        }
    })
    return new Suplemento({
        nome: NovoSuplemento.nome,
        dosagem: NovoSuplemento.dosagem,
        horario:NovoSuplemento.horario,
        usuarioID:NovoSuplemento.usuarioID
    }, NovoSuplemento.id);
}