import axios from "axios";
import { handleError } from "../helpers/ErrorHandler"
import { LocalizacaoCreate, LocalizacaoGet, LocalizacaoUpdate } from "../models/Localizacao";
import { UsuarioGet, UsuarioUpdate } from "../models/User";

const api = "http://localhost:3000/usuarios";


export const updateUsuario = async (usuario: UsuarioUpdate) => {
    try {
        const response = await axios.put<UsuarioGet>(api + `/${usuario.id}`, {
            nome: usuario.nome,
            email: usuario.email
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
}


export const getUsuario = async (idUsuario: string) => {
    try {
        const response = await axios.get<UsuarioGet>(api + `/${idUsuario}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

export const getListaUsuario = async (filtro: string) => {
    try {
        const response = await axios.post<UsuarioGet[]>(api + "/lista", {
            nome: filtro,
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};