import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { createAtivo, updateAtivo, moveAtivo, getAtivo, getListaAtivo, getListaAtivoByUsuario } from "../services/AtivosService"
import Navbar from '../components/Navbar';
import { AtivoGet } from '../models/Ativo';
import CardsAtivos from '../components/CardsAtivos';
import CardDetalhesAtivo from '../components/CardDetalhesAtivo';



type Props = {};

const HomePage = (props: Props) => {
    const userLogado = useAuth().user;

    const [ativos, setAtivos] = useState<AtivoGet[]>([]);
    const [ativo, setAtivo] = useState<AtivoGet | null>(null);
    const [modalDetalhesAtivo, setModalDetalhesAtivo] = useState(false);

    useEffect(() => {
        const fetchAtivos = async () => {
            try {
                const res = await getListaAtivoByUsuario(userLogado?.id ?? "");
                if (res) {
                    setAtivos(res);
                }
            } catch (error) {
                console.error("Erro ao buscar ativos", error);
            }
        };

        fetchAtivos();
    }, [userLogado]);

    const exibirDetalhesAtivo = (id: number) => {
        const ativoSelecionado = ativos.find((a) => a.id === id);
        setAtivo(ativoSelecionado ?? null);
        setModalDetalhesAtivo(true);
    };

    const fecharDetalhamentoAtivo = () => {
        setAtivo(null);
        setModalDetalhesAtivo(false)
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
            <Navbar paginaAtiva={1} />

            {/* Main Content Area */}
            <div className='flex-grow-1'>
                <div className="m-5 card" style={{ maxHeight: "900px", overflowY: "auto", overflowX: "hidden" }}>
                    <div>
                        <strong className="d-flex justify-content-center align-items-center p-2 text-black">
                            <span className="fs-4">Meus Ativos</span>
                        </strong>
                    </div>
                    <CardsAtivos ativos={ativos} exibirDetalhesAtivo={exibirDetalhesAtivo} />
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
                                pagina={1}
                                fecharDetalhamentoAtivo={fecharDetalhamentoAtivo}
                                abrirModalEditAtivo={fazerNd}
                                abrirModalMoverAtivo={fazerNd}
                                abrirModalExcluirAtivo={fazerNd}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
