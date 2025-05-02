import { Localizacao } from "./Localizacao";
import { StatusAtivo } from "./StatusAtivo";
import { Usuario } from "./Usuario";

export interface Ativo {
    id: number;
    nome: string;
    codInterno?: string | null;
    descricao?: string | null;
    valor: number;
    dataAquisicao: Date;
    qtdReparos: number;
    chaveStatus?: number | null;
    chaveResponsavel?: string | null;
    chaveLocalizacao?: number | null;
    status?: StatusAtivo | null;
    responsavel?: Usuario | null;
    localizacao?: Localizacao | null;
  }
  