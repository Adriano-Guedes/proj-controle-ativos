import { StatusManutencao } from "./StatusManutencao";
import { Usuario } from "./Usuario";

export interface Manutencao {
    id: number;
    descricao?: string | null;
    dataEntrada: Date;
    dataSaida?: Date | null;
    relatorio?: string | null;
    chaveResponsavel: string;
    chaveStatus: number;
    responsavel: Usuario;
    status?: StatusManutencao | null;
  }
  