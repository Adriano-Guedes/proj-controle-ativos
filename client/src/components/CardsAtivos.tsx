import { useAuth } from "../context/useAuth";
import { FaInfo, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { AtivoGet } from "../models/Ativo";
import { MdModeEdit } from "react-icons/md";
import { TbTransfer } from "react-icons/tb";

type Props = {
    ativos: AtivoGet[];
    exibirDetalhesAtivo: (id: number) => void;
    pagina: number;
    fecharDetalhamentoAtivo: () => void;
    abrirModalMoverAtivo: (id: number) => void;
    excluirAtivo: (id: number) => void;
    abrirModalEditarAtivo: (id: number) => void;
};

const CardsAtivos = ({ ativos, exibirDetalhesAtivo, pagina, fecharDetalhamentoAtivo, abrirModalEditarAtivo, abrirModalMoverAtivo, excluirAtivo }: Props) => {

    return (
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center m-5 d-flex align-items-center justify-content-center">
            {ativos.length > 0 ? (
                ativos.map((ativo) => (
                    <div key={ativo.id} className="col">
                        <div className="card mb-4 rounded-3 shadow-lg">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">{ativo.nome}</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>
                                        <small className="text-muted d-block">Código interno</small>
                                        {ativo.codInterno ? ativo.codInterno : "-"}
                                    </li>
                                    <li className="mt-2">
                                        <small className="text-muted d-block">Status</small>
                                        {ativo.status}
                                    </li>
                                </ul>
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center gap-2"> {/* Adicionado d-flex, justify-content-center e gap-2 */}
                                        <button
                                            type="button"
                                            className="btn btn-primary rounded-circle p-2 border border-1 rounded border-black shadow-lg"
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                            title="Fechar Janela"
                                            onClick={() => exibirDetalhesAtivo(ativo.id)}
                                        >
                                            <FaInfo size={20} />
                                        </button>

                                        {pagina === 2 && (
                                            <>
                                            <button
                                                    type="button"
                                                    className="btn btn-primary rounded-circle p-2 border border-1 rounded border-black shadow-lg" // Removido mt-2
                                                    style={{
                                                        width: "40px",
                                                        height: "40px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                    title="Editar Ativo"
                                                    onClick={() => abrirModalEditarAtivo(ativo.id)}
                                                >
                                                    <FaRegEdit size={20} />
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary rounded-circle p-2 border border-1 rounded border-black shadow-lg" // Removido mt-2
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
                                                    className="btn btn-danger rounded-circle p-2 border border-1 rounded border-black shadow-lg" // Removido mt-2
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
                        </div>
                    </div>
                ))
            ) : (
                <div className="w-100 text-center">
                    <div className="alert alert-warning" role="alert">
                        Consulta não gerou resultados.
                    </div>
                </div>
            )}
        </div >
    )
}

export default CardsAtivos;