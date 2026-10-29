import * as treinosRepository from "./treinos.repository";
import { Serie } from "./series.entity";
import { Exercicios } from "./exercicios.entity";
import { Treino } from  "./treinos.entity"

export async function Listar_Treinos_Usuario(usuarioID: string){
    return treinosRepository.findAllTreinosbyId(usuarioID);
}
export async function criarTreinoCompleto(dados_brutos: any) {
    
    const exerciciosValidados = dados_brutos.exercicios.map((exercicioBruto: any) => {
        
        const seriesValidas = exercicioBruto.series.map((seriesBrutas: any, index: number) => {
            return new Serie({
                numero_serie: index + 1, 
                repeticoes: seriesBrutas.repeticoes,
                carga: seriesBrutas.carga
            });
        }); 
        
        return new Exercicios({ 
            nome: exercicioBruto.nome,
            treinoID: "", 
            descanso: exercicioBruto.descanso, 
            series: seriesValidas
        });
    }); 

    const novoTreino = new Treino({
        titulo: dados_brutos.titulo,
        duracao_treino: dados_brutos.duracao_treino,
        usuarioId: dados_brutos.usuarioId,
        exercicios: exerciciosValidados
    });
    return treinosRepository.create(novoTreino);

    

} 