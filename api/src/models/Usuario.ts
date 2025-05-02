import { Ativo } from "./Ativo";
import { Cargo } from "./Cargo";
import { Manutencao } from "./Manutencao";

export interface Usuario {
    id: string;
    nome: string;
    email: string;
    login: string;
    senha: string;
    chaveCargo?: number | null;
    cargo?: Cargo | null;
    ativos?: Ativo[];
    manutencoes?: Manutencao[];
  }
  