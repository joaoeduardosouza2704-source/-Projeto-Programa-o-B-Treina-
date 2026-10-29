export interface SuplementosProps {
    nome: string;
    dosagem: string;
    usuarioID:string;
    horario?:string;
}
export class Suplemento {
    private _id: string;
    private _nome: string;
    private _dosagem: string;
    private _horario: string;
    private _usuarioID: string;

constructor(props: SuplementosProps, id?:string){
        if (props.nome.trim().length === 0) {
            throw new Error("O nome do suplemento não pode ser vazio");
        }
        if (props.dosagem.trim().length === 0) {
            throw new Error("A dosagem não pode ser vazia");
        }
        if (props.usuarioID.trim().length === 0 ){
            throw new Error("O ID é obrigatório");
        }
        this._id = id ?? "";
        this._nome = props.nome;
        this._dosagem = props.dosagem;
        this._horario = props.horario ?? "";
        this._usuarioID = props.usuarioID;
    }
    public get id(): string { return this._id; }
    public get usuarioId(): string { return this._usuarioID; }
    public get nome(): string {return this._nome;}
    public get dosagem():string {return this._dosagem;}
    public get horario():string {return this._horario;}

    public set nome(value: string) {
        if (value.trim().length ===0){
            throw new Error("O nome do suplemento não pode estar vazio");
        }
        this._nome = value;
    }
    public set dosagem(value:string){
        if(value.trim().length === 0 ){
            throw new Error("A dosagem não pode ser vazia");
        }
        this._dosagem = value;
    
    }
    public set horario(value:string){
        
        this._horario = value;
    }

}