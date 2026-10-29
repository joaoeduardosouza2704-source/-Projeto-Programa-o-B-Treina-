

export interface SerieProps {
    numero_serie: number;
    repeticoes:number;
    carga:number;
    exercicioID:string;
}
export class Serie {
    private _id: string;
    private _numero_serie:string;
    private _repeticoes:number;
    private _carga: number; 
    private _exercicioID:string;
constructor(props:SerieProps, id?:string){
    if(props.numero_serie <= 0){
        throw new Error("Insira um número de série válido");
    }
    if(props.repeticoes <= 0 ){
        throw new Error("Insira um número de repetições válido");
    }
    if(props.carga <= 0){
        throw new Error("Insira uma carga válida");

    }
    if (props.exercicioId !== undefined && props.exercicioId.trim().length === 0) {
            throw new Error("Se o ID do exercício for passado, não pode ser vazio.");
        }
    this._id = id ?? "";
    this._numero_serie = props.numero_serie;
    this._repeticoes = props.repeticoes;
    this._carga = props.carga;
    this._exercicioID = props.exercicioID;
}
public get id(): string { return this._id; }
public get numero_serie(): number { return this._numero_serie; }
public get repeticoes():number {return this._repeticoes;}
public get carga():number { return this._carga;}
public get exercicioID():string { return this._exercicioID;}

public set numero_serie(value:number){
    if (value <= 0) {
        throw new Error("Insira um número de série válido");
    }
    this._numero_serie = value;

}
public set repeticoes(value:number){
    if(value <= 0){
        throw new Error("Insira um número de repetições válido");
    }
    this._repeticoes = value;
}
public set carga(value:number){
    if(value <= 0){
        throw new Error("Insira uma carga válida");
    }
    this._carga = value;
}
}