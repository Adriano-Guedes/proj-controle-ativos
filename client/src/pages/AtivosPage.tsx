import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { createAtivo, updateAtivo, moveAtivo, getAtivo, getListaAtivo, getListaAtivoByUsuario } from "../services/AtivosService"
import { useNavigate } from 'react-router-dom';
import { UsuarioGet, UsuarioLogado } from '../models/User';
import Navbar from '../components/Navbar';
import { AtivoGet } from '../models/Ativo';
import CardsAtivos from '../components/CardsAtivos';
import CardDetalhesAtivo from '../components/CardDetalhesAtivo';
import { LocalizacaoGet } from '../models/Localizacao';
import { Status } from '../enums/StatusEnum';
import { getListaUsuario } from '../services/UsuarioService';
import { getListaLocalizacao } from '../services/LocalizacaoService';
import * as Yup from "yup";


type Props = {};

const validation = Yup.object().shape({
    nome: Yup.string().required("Informe o nome"),
    codInterno: Yup.string(),
    descricao: Yup.string(),
    status:Yup.string().required("Selecione o status"),
    valor: Yup.number().required("Informe o valor de compra"),
    dataAquisicao: Yup.date().required("Informe a data de aquisição"),
    observacao: Yup.string()
})

const AtivosPage = (props: Props) => {
    const storedUser = localStorage.getItem("user");
    const user: UsuarioLogado | null = storedUser ? JSON.parse(storedUser) : null;
    const userLogado = useAuth().user;

    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [ativos, setAtivos] = useState<AtivoGet[]>([]);
    const [ativo, setAtivo] = useState<AtivoGet | null>(null);
    const [modalDetalhesAtivo, setModalDetalhesAtivo] = useState(false);
    const [modalCriarAtivo, setModalCriarAtivo] = useState(false);
    const [localizacoes, setLocalizacoes] = useState<LocalizacaoGet[]>([]);
    const [usuarios, setUsuarios] = useState<UsuarioGet[]>([]);
    const [chaveResponsavel, setChaveResponsavel] = useState("");
    const [chaveLocalizacao, setChaveLocalizacao] = useState(Number);
    const [status, setStatus] = useState<Status | "">("");
    const statusList = Object.values(Status);

    useEffect(() => {
        const fetchAtivos = async () => {
            try {
                const resUsers = await getListaUsuario("");
                if (resUsers) {
                    setUsuarios(resUsers);
                }
                const resLoc = await getListaLocalizacao("");
                if (resLoc) {
                    setLocalizacoes(resLoc);
                }
            } catch (error) {
                console.error("Erro ao buscar ativos", error);
            }
        };

        fetchAtivos();
    }, [userLogado]);

    useEffect(() => {
        const fetchAtivos = async () => {
            try {
                const res = await getListaAtivo(nome, nome, status, chaveResponsavel, chaveLocalizacao);
                if (res) {
                    setAtivos(res);
                }
            } catch (error) {
                console.error("Erro ao buscar ativos", error);
            }
        };

        fetchAtivos();
    }, [chaveResponsavel, chaveLocalizacao, nome, status]);

    const exibirDetalhesAtivo = (id: number) => {
        const ativoSelecionado = ativos.find((a) => a.id === id);
        setAtivo(ativoSelecionado ?? null);
        setModalDetalhesAtivo(true);
    };

    const fecharDetalhamentoAtivo = () => {
        setAtivo(null);
        setModalDetalhesAtivo(false)
    }

    const abrirModalCriarAtivo = () => {
        setModalCriarAtivo(true);
    }

    const fecharModalCriarAtivo = () => {
        setModalCriarAtivo(false);
    }

    const limparFiltros = () => {
        setNome("");
        setStatus("");
        setChaveResponsavel("");
        setChaveLocalizacao(0);
    }

    const fazerNd = () => { }

    return (
        <div
            className="d-flex vh-100"
            style={{
                backgroundImage: "url('/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Navbar paginaAtiva={2} />

            {/* Main Content Area */}
            <div className='flex-grow-1'>
                <div className="m-5 card" style={{ maxHeight: "900px", overflowY: "auto", overflowX: "hidden" }}>
                    <div>
                        <strong className="d-flex justify-content-center align-items-center p-2 text-black">
                            <span className="fs-4">Ativos</span>
                        </strong>
                    </div>
                    <div className="row px-4">
                        <div className="col-12 d-flex justify-content-end p-3">
                            <button
                                className="btn btn-outline-secondary"
                                onClick={abrirModalCriarAtivo}
                            >
                                Adicionar Ativo
                            </button>
                            <button
                                className="btn btn-outline-secondary ms-2"
                                onClick={limparFiltros}
                            >
                                Limpar Filtros
                            </button>
                        </div>
                    </div>
                    <div className="row px-4">
                        <div className="col-12 col-md-6 col-lg-6 p-3">
                            <div className="input-group border border-1 rounded border-black">
                                <span className="input-group-text">Nome</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Informe o nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 p-3">
                            <div className="input-group border border-1 rounded border-black">
                                <span className="input-group-text">Status</span>
                                <select
                                    className="form-select"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value as Status)}
                                >
                                    <option value="">Selecione um status</option>
                                    {statusList.map((s) => (
                                        <option key={s} value={s}>
                                            {s}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row px-4">
                        <div className="col-12 col-md-6 col-lg-6 p-3">
                            <div className="input-group border border-1 rounded border-black">
                                <span className="input-group-text">Responsável</span>
                                <select
                                    className="form-select"
                                    value={chaveResponsavel}
                                    onChange={(e) => setChaveResponsavel(e.target.value)}
                                >
                                    <option value="">Selecione um responsável</option>
                                    {usuarios.map((user) => (
                                        <option key={user.id} value={user.id}>
                                            {user.nome}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6 p-3">
                            <div className="input-group border border-1 rounded border-black">
                                <span className="input-group-text">Localização</span>
                                <select
                                    className="form-select"
                                    value={chaveLocalizacao}
                                    onChange={(e) => setChaveLocalizacao(parseInt(e.target.value, 10))}
                                >
                                    <option value="">Selecione uma localização</option>
                                    {localizacoes.map((loc) => (
                                        <option key={loc.id} value={loc.id}>
                                            {loc.endereco}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <CardsAtivos
                        ativos={ativos}
                        exibirDetalhesAtivo={exibirDetalhesAtivo} />
                </div>

            </div>
            {modalDetalhesAtivo && (
                <div
                    className="modal show fade d-block"
                    tabIndex={-1}
                    role="dialog"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                >
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className="modal-body col-10" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                            <CardDetalhesAtivo
                                ativo={ativo}
                                pagina={2}
                                fecharDetalhamentoAtivo={fecharDetalhamentoAtivo}
                                abrirModalEditAtivo={fazerNd}
                                abrirModalMoverAtivo={fazerNd}
                                abrirModalExcluirAtivo={fazerNd}
                            />
                        </div>
                    </div>
                </div>
            )}

            {modalCriarAtivo && (
                <div
                    className="modal show fade d-block"
                    tabIndex={-1}
                    role="dialog"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                >
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className="modal-body col-10" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                            <div className="m-5 position-relative card p-3 shadow-lg d-flex" style={{minHeight: "600px"}}>

                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div >
    );
};

export default AtivosPage;
