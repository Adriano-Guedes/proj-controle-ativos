import { AtivoGet } from "../models/Ativo";
import { FaComputer } from "react-icons/fa6";
import { formatarData, formatarMoeda } from "../helpers/Formatadores";
import { IoClose } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { TbTransfer } from "react-icons/tb";
import { FaTrashAlt } from "react-icons/fa";



type Props = {
    ativo: AtivoGet | null;
    pagina: number;
    fecharDetalhamentoAtivo: () => void;
    abrirModalEditAtivo: () => void;
    abrirModalMoverAtivo: (id: number) => void;
    excluirAtivo: (id: number) => void;
};

const CardDetalhesAtivo = ({ ativo, pagina, fecharDetalhamentoAtivo, abrirModalEditAtivo, abrirModalMoverAtivo, excluirAtivo }: Props) => {
    if (!ativo) return null;

    return (
        <div className="m-5 position-relative card p-3 shadow-lg d-flex">
            <div className="row">
                <strong className="d-flex justify-content-center align-items-center mb-3 mb-md-0 text-black">
                    <span className="fs-4">Detalhes Ativo</span>
                </strong>
            </div>
            <hr className="my-3 w-75 mx-auto" />
            <div className="row">
                <div className="col-11">
                    <div className="row align-items-center">
                        <div className="col-2 align-middle">
                            <div className="border border-2 rounded border-black p-2 d-flex justify-content-center align-items-center">
                                <FaComputer size={64} />
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="row">
                                <div className="col-4">
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>
                                            <small className="text-muted d-block">Nome:</small>
                                            {ativo.nome}
                                        </li>
                                        <li className="mt-2">
                                            <small className="text-muted d-block">Código Interno:</small>
                                            {ativo.codInterno ?? ''}
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>
                                            <small className="text-muted d-block">Status:</small>
                                            {ativo.status}
                                        </li>
                                        <li className="mt-2">
                                            <small className="text-muted d-block">Valor Aquisição:</small>
                                            R$ {formatarMoeda(ativo.valor)}
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>
                                            <small className="text-muted d-block">Data Aquisição:</small>
                                            {formatarData(ativo.dataAquisicao)}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <small className="text-muted d-block">Descrição:</small>
                                    {ativo.descricao ?? ''}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <small className="text-muted d-block">Observação:</small>
                                    {ativo.observacao ?? ''}
                                </div>
                            </div>

                            {pagina === 2 && (
                                <div className="row">
                                    <div className="col-6">
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>
                                                <small className="text-muted d-block">Responsavel:</small>
                                                {ativo.responsavel?.nome ?? "[SEM RESPONSÁVEL]"}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>
                                                <small className="text-muted d-block">Localização:</small>
                                                {ativo.localizacao?.endereco ?? "[NÃO ALOCADO]"}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                <div className="col-1">
                    <button
                        type="button"
                        className="btn btn-light rounded-circle p-2 border border-1 rounded border-black shadow"
                        style={{
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        title="Fechar Janela"
                        onClick={fecharDetalhamentoAtivo}
                    >
                        <IoClose size={20} />
                    </button>
                    {pagina === 2 && (
                        <>
                            <button
                                type="button"
                                className="btn btn-light rounded-circle p-2 border border-1 rounded border-black shadow mt-2"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                title="Editar Ativo"
                                onClick={fecharDetalhamentoAtivo}
                            >
                                <MdModeEdit size={20} />
                            </button>
                            <button
                                type="button"
                                className="btn btn-light rounded-circle p-2 border border-1 rounded border-black shadow mt-2"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                title="Mover Ativo"
                                onClick={() => abrirModalMoverAtivo(ativo.id)}
                            >
                                <TbTransfer size={20} />
                            </button>
                            <button
                                type="button"
                                className="btn btn-light rounded-circle p-2 border border-1 rounded border-black shadow mt-2"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                title="Excluir Ativo"
                                onClick={() => excluirAtivo(ativo.id)}
                            >
                                <FaTrashAlt size={20} />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardDetalhesAtivo;
