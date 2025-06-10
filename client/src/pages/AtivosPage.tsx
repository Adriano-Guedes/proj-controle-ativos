import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { createAtivo, updateAtivo, moveAtivo, getAtivo, getListaAtivo, getListaAtivoByUsuario, deleteAtivo } from "../services/AtivosService"
import { UsuarioGet, UsuarioLogado } from '../models/User';
import Navbar from '../components/Navbar';
import { AtivoCreate, AtivoGet, AtivoMove } from '../models/Ativo';
import CardsAtivos from '../components/CardsAtivos';
import CardDetalhesAtivo from '../components/CardDetalhesAtivo';
import { LocalizacaoGet } from '../models/Localizacao';
import { Status } from '../enums/StatusEnum';
import { getListaUsuario } from '../services/UsuarioService';
import { getListaLocalizacao } from '../services/LocalizacaoService';
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { toast } from "react-toastify";


type Props = {};

type AtivoCreate2 = {
    nome: string;
    codInterno: string;
    descricao: string;
    status: string;
    valor: number;
    dataAquisicao: string;
    observacao: string;
};

const validation = yup.object({
    nome: yup.string().required('Nome é obrigatório'),
    codInterno: yup.string().optional().default(null),
    descricao: yup.string().optional().default(null),
    status: yup.string().required('Status é obrigatório'),
    valor: yup
        .number()
        .typeError('Valor deve ser um número')
        .required('Valor é obrigatório')
        .positive('Valor deve ser positivo'),
    dataAquisicao: yup
        .string()
        .required('Data de aquisição é obrigatória')
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Formato da data inválido (YYYY-MM-DD)'),
    observacao: yup.string().optional().default(null),
}).required();


const AtivosPage = (props: Props) => {
    const storedUser = localStorage.getItem("user");
    const user: UsuarioLogado | null = storedUser ? JSON.parse(storedUser) : null;
    const userLogado = useAuth().user;
    const [nome, setNome] = useState("");
    const [ativos, setAtivos] = useState<AtivoGet[]>([]);
    const [ativo, setAtivo] = useState<AtivoGet | null>(null);
    const [ativoMover, setAtivoMover] = useState<AtivoMove | null>(null);
    const [modalDetalhesAtivo, setModalDetalhesAtivo] = useState(false);
    const [modalMoverAtivo, setModalMoverAtivo] = useState(false);
    const [modalCriarAtivo, setModalCriarAtivo] = useState(false);
    const [localizacoes, setLocalizacoes] = useState<LocalizacaoGet[]>([]);
    const [usuarios, setUsuarios] = useState<UsuarioGet[]>([]);
    const [chaveResponsavel, setChaveResponsavel] = useState("");
    const [chaveLocalizacao, setChaveLocalizacao] = useState<number>(0);
    const [status, setStatus] = useState<Status | "">("");
    const statusList = Object.values(Status);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AtivoCreate2>({ resolver: yupResolver(validation) })


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
                const res = await getListaAtivo(nome, status, chaveResponsavel, chaveLocalizacao);
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

    const handleCriarAtivo = async (form: AtivoCreate) => {
        try {
            const created = await createAtivo(form);
            if (created) {
                const lista = await getListaAtivo(nome, status, chaveResponsavel, chaveLocalizacao);
                if (lista) {
                    setAtivos(lista);
                }
                toast.success("Ativo cadastrado");
                setModalCriarAtivo(false);
                reset();
            }
        } catch (error: any) {
            console.error("Erro ao criar ativo:", error);
            const mensagem = typeof error?.message === 'string' ? error.message : 'Erro inesperado';
            toast.warning(mensagem);
        }
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

    const removerAtivo = async (id: number) => { 
        try {
            const excluir = await deleteAtivo(id);
            if (excluir) {
                const lista = await getListaAtivo(nome, status, chaveResponsavel, chaveLocalizacao);
                if (lista) {
                    setAtivos(lista);
                }
                toast.success("Ativo excluído com sucesso");
                fecharDetalhamentoAtivo();
            }
        } catch (error: any) {
            console.error("Erro ao criar ativo:", error);
            const mensagem = typeof error?.message === 'string' ? error.message : 'Erro inesperado';
            toast.warning(mensagem);
        }
    }

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
            <div className='flex-grow-1' >
                <div className="m-5 card" style={{ height: "780px", overflowY: "auto", overflowX: "hidden" }}>
                    <div>
                        <strong className="d-flex justify-content-center align-items-center p-2 text-black">
                            <span className="fs-4">Ativos</span>
                        </strong>
                    </div>
                    <hr className="my-3 w-75 mx-auto" />
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
                    <hr className="my-3 w-75 mx-auto" />
                    <div style={{ maxHeight: "800px", overflowY: "auto", overflowX: "hidden" }}>
                        <CardsAtivos
                            ativos={ativos}
                            exibirDetalhesAtivo={exibirDetalhesAtivo} />
                    </div>
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
                                excluirAtivo={removerAtivo}
                            />
                        </div>
                    </div>
                    {modalMoverAtivo && (
                        <div className='row'>
                            <div className='col-2'></div>
                            <div className="modal-body col-10" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                                {ativo?.nome}
                            </div>
                        </div>
                    )}
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
                        <div className='col-3'></div>
                        <div className='col-9'>
                            <div className="m-5 position-relative card p-3 d-flex">
                                <strong className="d-flex justify-content-center align-items-center mb-3 mb-md-0 text-black">
                                    <span className="fs-4">Criar Ativo</span>
                                </strong>
                                <hr className="my-3 w-75 mx-auto" />
                                <div className='row'>
                                    <div className="col-12 px-5 py-3" style={{ height: "500px" }}>
                                        <form onSubmit={handleSubmit(handleCriarAtivo)}>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <label>Nome*</label>
                                                    <input className="form-control border border-1 rounded border-black" {...register('nome')} />
                                                    {errors.nome && <p style={{ color: 'red' }}>{errors.nome.message}</p>}

                                                </div>
                                                <div className='col-6'>
                                                    <label>Código Interno</label>
                                                    <input className="form-control border border-1 rounded border-black" {...register('codInterno')} />
                                                    {errors.codInterno && <p style={{ color: 'red' }}>{errors.codInterno.message}</p>}

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-12'>

                                                    <label>Descrição</label>
                                                    <textarea className="form-control border border-1 rounded border-black" {...register('descricao')} />
                                                    {errors.descricao && <p style={{ color: 'red' }}>{errors.descricao.message}</p>}
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-4'>
                                                    <label>Status <span className='red'>*</span></label>
                                                    <select className="form-select border border-1 rounded border-black" {...register('status')}>
                                                        <option value="">Selecione um status</option>
                                                        <option value="OPERANTE">OPERANTE</option>
                                                        <option value="INOPERANTE">INOPERANTE</option>
                                                        <option value="EM MANUTENÇÃO">EM MANUTENÇÃO</option>
                                                        <option value="DESCARTADO">DESCARTADO</option>
                                                    </select>
                                                    {errors.status && <p style={{ color: 'red' }}>{errors.status.message}</p>}
                                                </div>
                                                <div className='col-4'>
                                                    <label>Valor*</label>
                                                    <input className="form-control border border-1 rounded border-black" type="number" step="0.01" {...register('valor')} />
                                                    {errors.valor && <p style={{ color: 'red' }}>{errors.valor.message}</p>}

                                                </div>
                                                <div className='col-4'>
                                                    <label>Data de Aquisição*</label>
                                                    <input className="form-control border border-1 rounded border-black" type="date" {...register('dataAquisicao')} />
                                                    {errors.dataAquisicao && <p style={{ color: 'red' }}>{errors.dataAquisicao.message}</p>}

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-12'>

                                                    <label>Observação</label>
                                                    <textarea className="form-control border border-1 rounded border-black" {...register('observacao')} />
                                                    {errors.observacao && <p style={{ color: 'red' }}>{errors.observacao.message}</p>}
                                                </div>
                                            </div>
                                            <div className="row pt-3 justify-content-center text-center">
                                                <div className="col-auto">
                                                    <button className="btn btn-primary w-100 py-2 mb-4" type="submit">
                                                        Salvar
                                                    </button>
                                                </div>
                                                <div className="col-auto">
                                                    <button
                                                        className="btn btn-danger w-100 py-2 mb-4"
                                                        type="button"
                                                        onClick={() => {
                                                            reset();
                                                            fecharModalCriarAtivo();
                                                        }}
                                                    >
                                                        Cancelar
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
};

export default AtivosPage;
