import { useAuth } from "../context/useAuth";
import { FaInfo } from "react-icons/fa";
import { AtivoGet } from "../models/Ativo";

type Props = {
  ativos: AtivoGet[];
  exibirDetalhesAtivo: (id: number) => void;
};

const CardsAtivos = ({ ativos, exibirDetalhesAtivo }: Props) => {

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
                                <button type="button" className="btn btn-md btn-outline-primary" onClick={() => exibirDetalhesAtivo(ativo.id)}>
                                     <FaInfo className="me-2" size={20} /> Detalhes
                                </button>
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
        </div>
    )
}

export default CardsAtivos;