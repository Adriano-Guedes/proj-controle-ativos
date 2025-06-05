import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';

const Login: React.FC = () => {
    const [loginInfo, setLoginInfo] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', { login: loginInfo, senha });
            const token = response.data.data.token;
            login(token);
            navigate('/home');
        } catch (error) {
            console.error(error);
            alert('Erro ao fazer login');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={loginInfo} onChange={e => setLoginInfo(e.target.value)} placeholder="Login ou Email" />
            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" />
            <button type="submit">Entrar</button>
        </form>
    );
};

export default Login;
