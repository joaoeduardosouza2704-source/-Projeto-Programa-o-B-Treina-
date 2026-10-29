
import { Serie } from "./series.entity";
export interface ExerciciosProps {
    nome:string;
    treinoID:string;   
    series?:Serie[]; 
    descanso?:number;
    
}
export class Exercicios {
    private _id: string;
    private _nome:string;
    private _treinoId:string;
    private _descanso:number | null;
    private _series: Serie[]
constructor(props:ExerciciosProps, id?:string){
    if(props.nome.trim().length === 0) {
        throw new Error("Insira um nome de exercício válido");
    }
    
    this._id = id ?? "";
    this._nome = props.nome;
    this._treinoId = props.treinoID;
    this._descanso = props.descanso ?? null;
    this._series = props.series ?? [];
}
public get id(): string { return this._id; }
public get nome(): string { return this._nome; }
public get treinoId(): string { return this._treinoId; }
public get descanso(): number | null { return this._descanso; }
public get series(): Serie[] { return this._series; }
public adicionarSerie(novaSerie: Serie) {
        this._series.push(novaSerie);
    }
public set nome(value:string) {
    if(value.trim().length === 0){
        throw new Error("Insira um nome válido");
    }
    this._nome = value;
}
public set descanso(value:number){
    if(value < 0){
        throw new Error("O tempo de descanso não pode ser negativo");
}
}
}
