import axios from "axios";
import { handleError } from "../helpers/ErrorHandler"
import { HistoricoGet } from "../models/Historico";

const api = "http://localhost:3000/historicosMovimentacao";


export const getHistorico = async (id: number) => {
    try {
        const response = await axios.get<HistoricoGet[]>(api + `/${id}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

export const getListaHistorico = async (chaveUsuario: string, chaveLocalizacao: number) => {
    try {
        const response = await axios.post<HistoricoGet[]>(api + "/", {
            chaveResponsavel: chaveUsuario,
            chaveLocalizacao: chaveLocalizacao
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};