import { Localizacao } from "./Localizacao";
import { Responsavel } from "./Responsavel";

export interface Ativo {
  id: number;
  chaveResponsavel: string;
  chaveLocalizacao: number;
  codInterno: string;
  dataAquisicao: string;
  descricao: string;
  nome: string;
  observacao: string;
  status: string;
  valor: string;

  localizacao?: Localizacao;
  responsavel?: Responsavel;
}