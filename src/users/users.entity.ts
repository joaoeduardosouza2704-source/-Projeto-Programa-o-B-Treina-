import type { Treino } from "@prisma/client";

export interface UsersProps {
    nome:string;
    username: string;
    email: string;
    password?: string;
}
export class User {
    private _id: string;
    private _nome: string;
    private _username: string;
    private _email: string;
    private _criadoEm: Date;
    private _password?:string;
    private _treinos: Treino[];

constructor(props:UsersProps, id?: string, criadoEm?: Date){
    this._id = id ?? "";
    this._nome = props.nome;
    this._username = props.username;
    this._email = props.email;
    this._criadoEm = criadoEm ?? new Date();
    this._treinos = [];
    this._password = props.password;
}
public get id():string {return this._id;}
public get nome():string {return this._nome;}
public get email():string{return this._email;}
public get username(): string{return this._username;}
public get criadoEm(): Date{return this._criadoEm;}
public get treinos(): Treino[] {return this._treinos;}
public get password():string {return this._password;}

public set nome(value:string) { this._nome = value;}
public set email(value:string){this._email = value;}
public set username(value:string){this._username = value;}
public set treinos(value: Treino[]){ this._treinos = value;}
public set password(value:string){this._password = value;}
}

