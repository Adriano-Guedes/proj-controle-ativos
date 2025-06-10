import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';
import { UsuarioGet, UsuarioLogado } from '../models/User';
import Navbar from '../components/Navbar';
import { createLocalizacao, deleteLocalizacao, getListaLocalizacao } from '../services/LocalizacaoService';
import { LocalizacaoCreate, LocalizacaoGet } from '../models/Localizacao';
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { toast } from "react-toastify";
import { FaTrashAlt } from 'react-icons/fa';


type Props = {};

type AtivoCreate2 = {
    endereco: string;
    descricao: string;
};

const validation = yup.object({
    endereco: yup.string().required('Endereço é obrigatório'),
    descricao: yup.string().optional().default(null),
}).required();


const LocalizacoesPage = (props: Props) => {
    const storedUser = localStorage.getItem("user");
    const user: UsuarioLogado | null = storedUser ? JSON.parse(storedUser) : null;
    const userLogado = useAuth().user;

    const [filtro, setFiltro] = useState("");
    const [localizacoes, setLocalizacoes] = useState<LocalizacaoGet[]>([]);
    const [modalCriarLocalizacao, setModalCriarLocalizacao] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AtivoCreate2>({ resolver: yupResolver(validation) })

    useEffect(() => {
        const fetchAtivos = async () => {
            try {
                const res = await getListaLocalizacao(filtro);
                if (res) {
                    setLocalizacoes(res);
                }
            } catch (error) {
                console.error("Erro ao buscar localizações", error);
            }
        };

        fetchAtivos();
    }, [userLogado, filtro]);

    const abrirModalCriarLocalizacao = () => {
        setModalCriarLocalizacao(true);
    }

    const limparFiltros = () => {
        setFiltro("");
    }

    const handleCriarLocalizacao = async (form: LocalizacaoCreate) => {
        try {
            const created = await createLocalizacao(form);
            if (created) {
                const lista = await getListaLocalizacao(filtro);
                if (lista) {
                    setLocalizacoes(lista);
                }
                toast.success("Ativo cadastrado");
                setModalCriarLocalizacao(false);
                reset();
            }
        } catch (error: any) {
            console.error("Erro ao criar localização:", error);
            const mensagem = typeof error?.message === 'string' ? error.message : 'Erro inesperado';
            toast.warning(mensagem);
        }
    };

    const handleExcluirLocalizacao = async (id: number) => {
        try {
            const deleted = await deleteLocalizacao(id);
            if (deleted) {
                const lista = await getListaLocalizacao(filtro);
                if (lista) {
                    setLocalizacoes(lista);
                }
                toast.success("Ativo cadastrado");
                setModalCriarLocalizacao(false);
                reset();
            }
        } catch (error: any) {
            console.error("Erro ao excluir localização:", error);
            const mensagem = typeof error?.message === 'string' ? error.message : 'Erro inesperado';
            toast.warning(mensagem);
        }
    };

    const fecharModalCriarLocalizacao = () => {
        setModalCriarLocalizacao(false);
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
            <Navbar paginaAtiva={5} />

            {/* Main Content Area */}
            <div className='flex-grow-1'>
                <div className="m-5 card" style={{ height: "780px", overflowY: "auto", overflowX: "hidden" }}>
                    <div className="row">
                        <div className="col-12">
                            <div>
                                <strong className="d-flex justify-content-center align-items-center p-2 mb-md-0 text-black">
                                    <span className="fs-4">Localizações</span>
                                </strong>
                            </div>
                            <hr className="my-3 w-75 mx-auto" />
                            <div className="row px-4">
                                <div className="col-8 d-flex justify-content-end p-3">
                                    <div className="input-group p-3">
                                        <span className="input-group-text">Filtro</span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Informe o filtro"
                                            value={filtro}
                                            onChange={(e) => setFiltro(e.target.value)}
                                        />

                                    </div>
                                </div>
                                <div className="col-4 d-flex justify-content-end p-3 py-4">
                                    <button
                                        className="btn btn-outline-secondary"
                                        onClick={abrirModalCriarLocalizacao}
                                    >
                                        Adicionar
                                    </button>
                                    <button
                                        className="btn btn-outline-secondary ms-2"
                                        onClick={limparFiltros}
                                    >
                                        Limpar Filtros
                                    </button>
                                </div>
                            </div>
                            <div className="p-3">
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Endereço</th>
                                            <th scope="col">Descrição</th>
                                            <th scope="col">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {localizacoes.length > 0 ? (
                                            localizacoes.map((loc) => (
                                                <tr>
                                                    <td>{loc.endereco}</td>
                                                    <td>{loc.descricao ?? "-"}</td>
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger rounded-circle p-2 border border-1 rounded border-black shadow-lg" // Removido mt-2
                                                            style={{
                                                                width: "40px",
                                                                height: "40px",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                            }}
                                                            title="Excluir Ativo"
                                                            onClick={() => handleExcluirLocalizacao(loc.id)}
                                                        >
                                                            <FaTrashAlt size={20} />
                                                        </button></td>
                                                </tr>

                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={2} className="text-center">
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


            {modalCriarLocalizacao && (
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
                                    <span className="fs-4">Criar Localização</span>
                                </strong>
                                <hr className="my-3 w-75 mx-auto" />
                                <div className='row'>
                                    <div className="col-12 px-5 py-3" style={{ height: "500px" }}>
                                        <form onSubmit={handleSubmit(handleCriarLocalizacao)}>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <label>Endereço <span style={{ color: 'red' }}>*</span></label>
                                                    <input className="form-control border border-1 rounded border-black" {...register('endereco')} />
                                                    {errors.endereco && <p style={{ color: 'red' }}>{errors.endereco.message}</p>}

                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-12'>

                                                    <label>Descrição</label>
                                                    <textarea className="form-control border border-1 rounded border-black" {...register('descricao')} />
                                                    {errors.descricao && <p style={{ color: 'red' }}>{errors.descricao.message}</p>}
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
                                                            fecharModalCriarLocalizacao();
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

        </div>
    );
};

export default LocalizacoesPage;
