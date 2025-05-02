import { Ativo } from "./Ativo";

export interface Localizacao {
    id: number;
    endereco: string;
    ativos?: Ativo[];
  }
  