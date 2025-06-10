import { FaArrowCircleLeft } from "react-icons/fa";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type Props = {
    paginaAtiva: number;
};

const Navbar = ({ paginaAtiva }: Props) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [ativa1, setAtiva1] = useState(false);
    const [ativa2, setAtiva2] = useState(false);
    const [ativa3, setAtiva3] = useState(false);
    const [ativa4, setAtiva4] = useState(false);
    const [ativa5, setAtiva5] = useState(false);

    useEffect(() => {
        setAtiva1(paginaAtiva === 1);
        setAtiva2(paginaAtiva === 2);
        setAtiva3(paginaAtiva === 3);
        setAtiva4(paginaAtiva === 4);
        setAtiva5(paginaAtiva === 5);
    }, [paginaAtiva]);

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px" }}>
            <strong className="d-flex justify-content-center align-items-center mb-3 mb-md-0 text-white">
                <span className="fs-4">Track-PRO</span>
            </strong>

            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a
                        onClick={() => navigate("/principal")}
                        className={`nav-link ${ativa1 ? "active" : "text-white"}`}
                        style={{ cursor: "pointer" }}
                    >
                        Principal
                    </a>
                </li>
                {user?.chaveCargo === 1 && (
                    <>
                        <li>
                            <a
                                onClick={() => navigate("/ativos")}
                                className={`nav-link ${ativa2 ? "active" : "text-white"}`}
                                style={{ cursor: "pointer" }}
                            >
                                Ativos
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => navigate("/historicos")}
                                className={`nav-link ${ativa3 ? "active" : "text-white"}`}
                                style={{ cursor: "pointer" }}
                            >
                                Histórico
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => navigate("/usuarios")}
                                className={`nav-link ${ativa4 ? "active" : "text-white"}`}
                                style={{ cursor: "pointer" }}
                            >
                                Usuários
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => navigate("/localizacoes")}
                                className={`nav-link ${ativa5 ? "active" : "text-white"}`}
                                style={{ cursor: "pointer" }}
                            >
                                Localizações
                            </a>
                        </li>
                    </>
                )}
            </ul>
            <hr />
            <div className="d-flex flex-column align-items-center justify-content-center text-center">
                <strong>{user?.nome}</strong>
                <hr style={{ width: "100%" }} />
                <button
                    type="button"
                    className="btn btn-light rounded-circle p-2"
                    style={{
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    title="Sair"
                    onClick={logout}
                >
                    <FaArrowCircleLeft size={20} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
