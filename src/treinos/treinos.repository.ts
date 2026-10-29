import { prisma } from "../db";
import { Treino } from "./treinos.entity";

export async function findAllTreinosbyId(usuarioID: string){

    const treinosPrisma = await prisma.treino.findMany({
        where:{
            usuarioId:usuarioID
        }
    });
    const treinos = treinosPrisma.map((dadosPrisma) => {
        return new Treino({
            titulo:dadosPrisma.titulo,
            descricao: dadosPrisma.descricao ?? undefined,
            duracao_treino:dadosPrisma.duracao_treino,
            usuarioId: dadosPrisma.usuarioId
        }, dadosPrisma.id);
    });
    return treinos;
}
export async function create(novoTreino: Treino){
    const TreinoSalvo = await prisma.treino.create({
        data: {
            titulo: novoTreino.titulo,
            duracao_treino: novoTreino.duracao_treino,
            usuarioId: novoTreino.usuarioId,
        exercicios:{
            create: novoTreino.exercicios.map((ex) => ({
                nome:ex.nome,
                descanso:ex.descanso,
                series:{
                    create:ex.series.map((s) => ({
                        numero_serie: s.numero_serie,
                        repeticoes: s.repeticoes,
                        carga: s.carga
                    }))
                }
            }))
        }
        },
        include:{
            exercicios:{
                include:{
                    series:true
                }
            }
        }
    });
    return TreinoSalvo;
}
    

