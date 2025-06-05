import { Cargo } from "./Cargo";

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  login: string;
  chaveCargo: number;

  cargo: Cargo;
}