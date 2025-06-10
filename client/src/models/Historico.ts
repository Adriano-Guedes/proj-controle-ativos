import { AtivoGet } from "./Ativo";
import { LocalizacaoGet } from "./Localizacao";
import { UsuarioGet } from "./User";

export type HistoricoGet = {
    id: number;
    data: string;
    chaveAtivo: number;
    chaveLocalizacaoOrigem?: number;
    chaveResponsavelOrigem?: string;
    chaveLocalizacaoDestino?: number;
    chaveResponsavelDestino?: string;
    ativo: AtivoGet;
    localizacaoOrigem?: LocalizacaoGet;
    responsavelOrigem?: UsuarioGet;
    localizacaoDestino?: LocalizacaoGet;
    responsavelDestino?: UsuarioGet;
};
