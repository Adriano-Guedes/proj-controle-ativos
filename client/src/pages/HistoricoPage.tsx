import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { getListaUsuario } from '../services/UsuarioService';
import { getListaHistorico } from "../services/HistoricoService";
import { useNavigate } from 'react-router-dom';
import { UsuarioGet, UsuarioLogado } from '../models/User';
import Navbar from '../components/Navbar';
import { HistoricoGet } from '../models/Historico';
import { getListaLocalizacao } from '../services/LocalizacaoService';
import { LocalizacaoGet } from '../models/Localizacao';
import { AtivoGet } from '../models/Ativo';
import { getListaAtivo } from '../services/AtivosService';



type Props = {};

const HistoricoPage = (props: Props) => {
    const storedUser = localStorage.getItem("user");
    const user: UsuarioLogado | null = storedUser ? JSON.parse(storedUser) : null;
    const userLogado = useAuth().user;

    const navigate = useNavigate();
    const [chaveResponsavel, setChaveResponsavel] = useState("");
    const [chaveLocalizacao, setChaveLocalizacao] = useState(Number);
    const [chaveAtivo, setChaveAtivo] = useState(Number);
    const [historicos, setHistoricos] = useState<HistoricoGet[]>([]);
    const [localizacoes, setLocalizacoes] = useState<LocalizacaoGet[]>([]);
    const [usuarios, setUsuarios] = useState<UsuarioGet[]>([]);
    const [ativos, setAtivos] = useState<AtivoGet[]>([]);



    useEffect(() => {
        const fetchAtivos = async () => {
            try {
                const res = await getListaHistorico(chaveResponsavel, chaveLocalizacao, chaveAtivo);
                if (res) {
                    setHistoricos(res);
                }
                const resUsers = await getListaUsuario("");
                if (resUsers) {
                    setUsuarios(resUsers);
                }
                const resLoc = await getListaLocalizacao("");
                if (resLoc) {
                    setLocalizacoes(resLoc);
                }
                const resAtivos = await getListaAtivo();
                if (resAtivos) {
                    setAtivos(resAtivos);
                }
            } catch (error) {
                console.error("Erro ao buscar histórico", error);
            }
        };

        fetchAtivos();
    }, [userLogado]);

    useEffect(() => {
        const fetchAtivos = async () => {
            try {
                const res = await getListaHistorico(chaveResponsavel, chaveLocalizacao, chaveAtivo);
                if (res) {
                    setHistoricos(res);
                }
            } catch (error) {
                console.error("Erro ao buscar histórico", error);
            }
        };

        fetchAtivos();
    }, [chaveResponsavel, chaveLocalizacao, chaveAtivo]);

    return (
        <div
            className="d-flex vh-100"
            style={{
                backgroundImage: "url('/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Navbar paginaAtiva={3} />

            {/* Main Content Area */}
            <div className='flex-grow-1'>
                <div className="m-5 card" style={{ height: "780px", overflowY: "auto", overflowX: "hidden" }}>
                    <div className="row">
                        <div className="col-12">
                            <div>
                                <strong className="d-flex justify-content-center align-items-center p-2 mb-md-0 text-black">
                                    <span className="fs-4">Histórico de Movimentações</span>
                                </strong>
                            </div>
                            <hr className="my-3 w-75 mx-auto" />
                            <div className="row px-4 justify-content-end">
                                <div className="col-12 col-md-6 col-lg-4 p-3">
                                    <div className="input-group border border-1 rounded border-black">
                                        <span className="input-group-text">Ativo</span>
                                        <select
                                            className="form-select"
                                            value={chaveAtivo}
                                            onChange={(e) => setChaveAtivo(parseInt(e.target.value, 10))}
                                        >
                                            <option value="">Selecione...</option>
                                            {ativos.map((ativo) => (
                                                <option key={ativo.id} value={ativo.id}>
                                                    {ativo.nome}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4 p-3">
                                    <div className="input-group border border-1 rounded border-black">
                                        <span className="input-group-text">Responsável</span>
                                        <select
                                            className="form-select"
                                            value={chaveResponsavel}
                                            onChange={(e) => setChaveResponsavel(e.target.value)}
                                        >
                                            <option value="">Selecione...</option>
                                            {usuarios.map((user) => (
                                                <option key={user.id} value={user.id}>
                                                    {user.nome}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4 p-3">
                                    <div className="input-group border border-1 rounded border-black">
                                        <span className="input-group-text">Localização</span>
                                        <select
                                            className="form-select"
                                            value={chaveLocalizacao}
                                            onChange={(e) => setChaveLocalizacao(parseInt(e.target.value, 10))}
                                        >
                                            <option value="">Selecione...</option>
                                            {localizacoes.map((loc) => (
                                                <option key={loc.id} value={loc.id}>
                                                    {loc.endereco}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="p-3">
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Ativo</th>
                                            <th scope="col">De Responsável</th>
                                            <th scope="col">Para Responsável</th>
                                            <th scope="col">De Localização</th>
                                            <th scope="col">Para Localização</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {historicos.length > 0 ? (
                                            historicos.map((histórico) => (
                                                <tr>
                                                    <td>{histórico.ativo.nome}</td>
                                                    <td className="text-danger">{histórico.responsavelOrigem?.nome ?? "-"}</td>
                                                    <td className="text-success">{histórico.responsavelDestino?.nome ?? "-"}</td>
                                                    <td className="text-danger">{histórico.localizacaoOrigem?.endereco ?? "-"}</td>
                                                    <td className="text-success">{histórico.localizacaoDestino?.endereco ?? "-"}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={5} className="text-center">
                                                    <div className="alert alert-warning mb-0" role="alert">
                                                        Consulta não gerou resultados.
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoricoPage;
