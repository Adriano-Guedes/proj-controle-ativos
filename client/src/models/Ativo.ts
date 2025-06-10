import { LocalizacaoGet } from "./Localizacao";
import { UsuarioGet } from "./User";

export type AtivoCreate = {
  nome: string;
  codInterno?: string;
  descricao?: string;
  status: string;
  valor: number;
  dataAquisicao: string;
  observacao?: string;
};

export type AtivoUpdate = {
  id: number;
  nome: string;
  codInterno?: string;
  descricao?: string;
  status: string;
  valor: number;
  dataAquisicao: string;
  observacao?: string;
};

export type AtivoGet = {
  id: number;
  nome: string;
  codInterno?: string;
  descricao?: string;
  status: string;
  valor: string;
  dataAquisicao: string;
  observacao?: string;
  chaveResponsavel?: string;
  chaveLocalizacao?: number;
  responsavel?: UsuarioGet;
  localizacao?: LocalizacaoGet;
};

export type AtivoMove = {
  id: number;
  chaveResponsavel?: string;
  chaveLocalizacao?: number;
};
