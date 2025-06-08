import { CargoGet } from "./Cargo";

export type UserProfileToken = {
    id: string;
    nome: string;
    email: string;
    token: string;
    cargo: number;
};

export type UserProfile = {
    id: string;
    nome: string;
    email: string;
};

export type UsuarioGet = {
    id: string;
    nome: string;
    email: string;
    login: string;
    chaveCargo: number;
    cargo: CargoGet;
};

export type UsuarioUpdate = {
    id: string;
    nome: string;
    email: string;
    login: string;
};