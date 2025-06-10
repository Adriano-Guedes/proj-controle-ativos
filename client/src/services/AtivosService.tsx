import axios from "axios";
import { handleError } from "../helpers/ErrorHandler"
import { LocalizacaoCreate, LocalizacaoGet, LocalizacaoUpdate } from "../models/Localizacao";
import { AtivoCreate, AtivoGet, AtivoMove, AtivoUpdate } from "../models/Ativo";

const api = "http://localhost:3000/ativos";


export const createAtivo = async (ativo: AtivoCreate) => {
    try {
        const response = await axios.post<AtivoGet>(api + "/", {
            nome: ativo.nome,
            codInterno: ativo.codInterno,
            descricao: ativo.descricao,
            status: ativo.status,
            valor: ativo.valor,
            dataAquisicao: ativo.dataAquisicao,
            observacao: ativo.observacao
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

export const updateAtivo = async (ativo: AtivoUpdate) => {
    try {
        const response = await axios.put<AtivoGet>(api + `/${ativo.id}`, {
            id: ativo.id,
            nome: ativo.nome,
            codInterno: ativo.codInterno,
            descricao: ativo.descricao,
            status: ativo.status,
            valor: ativo.valor,
            dataAquisicao: ativo.dataAquisicao,
            observacao: ativo.observacao
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

export const moveAtivo = async (ativo: AtivoMove) => {
    try {
        const response = await axios.put<AtivoGet>(api + `/alocar/${ativo.id}`, {
            id: ativo.id,
            chaveResponsavel: ativo.chaveResponsavel,
            chaveLocalizacao: ativo.chaveLocalizacao
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
}


export const getAtivo = async (id: number) => {
    try {
        const response = await axios.get<AtivoGet>(api + `/${id}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

export const deleteAtivo = async (id: number) => {
    try {
        const response = await axios.delete<AtivoGet>(api + `/${id}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

export const getListaAtivo = async (nome: string = "", status: string = "", chaveResponsavel: string = "", chaveLocalizacao: number = 0) => {
    try {
        const response = await axios.post<AtivoGet[]>(api + "/lista", {
            nome: nome ?? "",
            status: status ?? "",
            chaveResponsavel: chaveResponsavel ?? "",
            chaveLocalizacao: chaveLocalizacao ?? 0
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const getListaAtivoByUsuario = async (filtro: string) => {
    try {
        const response = await axios.post<AtivoGet[]>(api + "/listaByUsuario", {
            chaveResponsavel: filtro,
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};