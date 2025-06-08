import axios from "axios";
import { handleError } from "../helpers/ErrorHandler"
import { LocalizacaoCreate, LocalizacaoGet, LocalizacaoUpdate } from "../models/Localizacao";

const api = "http://localhost:3000/localizacoes";


export const createLocalizacao = async (localizacao: LocalizacaoCreate) => {
    try {
        const response = await axios.post<LocalizacaoGet>(api + "/", {
            endereco: localizacao.endereco,
            descricao: localizacao.descricao
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

export const updateLocalizacao = async (localizacao: LocalizacaoUpdate) => {
    try {
        const response = await axios.put<LocalizacaoGet>(api + `/localizacao/${localizacao.id}`, {
            endereco: localizacao.endereco,
            descricao: localizacao.descricao
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
}


export const getLocalizacao = async (id: number) => {
    try {
        const response = await axios.get<LocalizacaoGet>(api + `/localizacao/${id}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

export const getListaLocalizacao = async (filtro: string) => {
    try {
        const response = await axios.post<LocalizacaoGet[]>(api + "/lista", {
            nome: filtro,
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};