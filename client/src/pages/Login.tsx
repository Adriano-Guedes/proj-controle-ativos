import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { Usuario } from '../interfaces/Usuario';

const Login: React.FC = () => {
    const [loginInfo, setLoginInfo] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', { login: loginInfo, senha });
            
            const token: string = response.data.data.token;
            const usuario: Usuario = response.data.data.usuario;

            login(token, usuario);  // Agora passando token e usuario

            navigate('/home');
        } catch (error) {
            console.error(error);
            alert('Erro ao fazer login');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={loginInfo}
                onChange={e => setLoginInfo(e.target.value)}
                placeholder="Login ou Email"
                required
            />
            <input
                type="password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                placeholder="Senha"
                required
            />
            <button type="submit">Entrar</button>
        </form>
    );
};

export default Login;
