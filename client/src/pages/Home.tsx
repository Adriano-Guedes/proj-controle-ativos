import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface Ativo {
    id: number;
    nome: string;
    status: string;
}

const Home: React.FC = () => {
    const [ativos, setAtivos] = useState<Ativo[]>([]);
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAtivos = async () => {
            try {
                const { data } = await api.post('/ativos/lista');
                console.log(data)
                setAtivos(data);
            } catch (error) {
                console.error('Erro ao buscar ativos', error);
            }
        };
        fetchAtivos();
    }, []);


    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div>
            <h1>Ativos</h1>
            <button onClick={handleLogout}>Sair</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {ativos.map(ativo => (
                        <tr key={ativo.id}>
                            <td>{ativo.id}</td>
                            <td>{ativo.nome}</td>
                            <td>{ativo.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
