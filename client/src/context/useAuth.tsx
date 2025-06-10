import { createContext } from "react";
import { UserProfile } from "../models/User";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginAPI, registerAPI } from "../services/AuthService";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";

type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    registerUser: (nome: string, email: string, login: string, senha: string) => void;
    loginUser: (login: string, senha: string) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if(user && token){
            setUser(JSON.parse(user));
            setToken(token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        }
        setIsReady(true);
    }, [])

    const registerUser = async(nome: string, email: string, username: string, password: string) => {
        await registerAPI(nome, email, username, password).then((res) => {
            if(res) {
                localStorage.setItem("token", res?.data.token);
                const userObj = {
                    id: res?.data.id,
                    nome: res?.data.nome,
                    email: res?.data.email,
                    chaveCargo: res?.data.chaveCargo
                }
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res?.data.token!);
                setUser(userObj!);
                toast.success("Bem vindo!");
                navigate("/principal");
            }
        }).catch((e) => toast.warning("Erro no servidor!"));
    };

    const loginUser = async(login: string, password: string) => {
        await loginAPI(login, password).then((res) => {
            if(res) {
                localStorage.setItem("token", res?.data.token);
                const userObj = {
                    id: res?.data.id,
                    nome: res?.data.nome,
                    email: res?.data.email,
                    chaveCargo: res?.data.chaveCargo,
                }
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res?.data.token!);
                setUser(userObj!);
                toast.success("Bem vindo!");
                navigate("/principal");
            }
        }).catch((e) => toast.warning("Erro no servidor!"));
    };


    const isLoggedIn = () => {
        return !!user;
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken("");
        navigate("/");
    }

    return(
        <UserContext.Provider value={{loginUser, user, token, logout, isLoggedIn, registerUser}}>
            {isReady ? children : null}
        </UserContext.Provider>
    )
};

export const useAuth = () => React.useContext(UserContext);