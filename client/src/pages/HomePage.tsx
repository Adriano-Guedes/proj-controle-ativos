import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';
import { Ativo } from '../interfaces/Ativo';
import { Usuario } from '../interfaces/Usuario';


const Home: React.FC = () => {
    const [ativos, setAtivos] = useState<Ativo[]>([]);
    const [usuarioLogado, setUsuarioLogado] = useState<Usuario>()
    const { usuario, logout } = useAuth();
    const navigate = useNavigate();
    const [filtros, setFiltros] = useState({
        nome: "",
        codInterno: "",
        status: 0,
        chaveResponsavel: 0,
        chaveLocalizacao: 0
    });


    useEffect(() => {
        const fetchAtivos = async () => {
            try {
                await api.post('/ativos/lista', filtros).then((response) => {
                    setAtivos(response.data.data);
                    console.log("dados:", response.data.data);
                });

                await api.get(`/usuarios/${usuario?.id}`).then((response) => {
                    setUsuarioLogado(response.data.data);
                    console.log("dados usuario:", response.data.data);
                });
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
            {ativos.map((ativo) => (
                <div key={ativo.id}>
                    <h3>{ativo.nome}</h3>
                    <p>Responsável: {ativo.responsavel?.nome ?? ""}</p>
                    <p>Localização: {ativo.localizacao?.endereco ?? ""}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;
