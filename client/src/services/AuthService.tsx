import axios from "axios";
import { handleError } from "../helpers/ErrorHandler"
import { UserProfileToken } from "../models/User";

const api = "http://localhost:3000/api";


export const loginAPI = async (username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "/login", {
            login: username,
            senha: password
        });
        return data;
    } catch (error) {
        handleError(error);
    }
}

export const registerAPI = async (nome: string, email: string, username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "/cadastro", {
            nome: nome,
            email: email,
            login: username,
            senha: password
        });
        return data;
    } catch (error) {
        handleError(error);
    }
}