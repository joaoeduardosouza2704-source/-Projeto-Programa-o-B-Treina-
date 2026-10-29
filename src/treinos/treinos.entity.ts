import { Exercicios } from "./exercicios.entity";
export interface TreinoProps{
    titulo:string;
    duracao_treino:number;
    usuarioId:string;
    exercicios?: Exercicios[];
    descricao?: string;

}
export class Treino {
    private _id: string;
    private _titulo: string;
    private _duracao_treino: number;
    private _descricao: string | null; 
    private _usuarioId: string;
    private _data: Date;
    private _exercicios: Exercicios[]

constructor(props: TreinoProps, id?: string, data?: Date) {
        if (props.titulo.trim().length === 0) {
            throw new Error("O título do treino não pode estar vazio.");
        }
        if (props.duracao_treino <= 0) {
            throw new Error("A duração do treino deve ser maior que zero.");
        }
        this._id = id ?? "";
        this._titulo = props.titulo;
        this._duracao_treino = props.duracao_treino;
        this._descricao = props.descricao ?? null;
        this._usuarioId = props.usuarioId;
        this._data = data ?? new Date();
        this._exercicios = props.exercicios ?? [];
    }
    public get id(): string { return this._id; }
    public get titulo(): string { return this._titulo; }
    public get duracao_treino(): number { return this._duracao_treino; }
    public get descricao(): string | null { return this._descricao; }
    public get usuarioId(): string { return this._usuarioId; }
    public get data(): Date { return this._data; }
    public get exercicios(): Exercicios[] { return this._exercicios; }

    
    public set titulo(value: string) {
        if (value.trim().length === 0) {
            throw new Error("O título do treino não pode estar vazio.");
        }
        this._titulo = value;
    }
    public set duracao_treino(value: number) { 
        if (value <= 0) {

            throw new Error("A duração do treino deve ser maior que zero.");
        }
        
        this._duracao_treino = value;
    }
    public set descricao(value: string | null) { this._descricao = value; }
}