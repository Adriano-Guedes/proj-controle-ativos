import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { createAtivo, updateAtivo, moveAtivo, getAtivo, getListaAtivo, getListaAtivoByUsuario } from "../services/AtivosService";
import { getListaUsuario } from '../services/UsuarioService';
import { useNavigate } from 'react-router-dom';
import { UsuarioGet, UsuarioLogado } from '../models/User';
import Navbar from '../components/Navbar';



type Props = {};

const UsuariosPage = (props: Props) => {
    const storedUser = localStorage.getItem("user");
    const user: UsuarioLogado | null = storedUser ? JSON.parse(storedUser) : null;
    const userLogado = useAuth().user;

    const navigate = useNavigate();
    const [filtro, setFiltro] = useState("");
    const [usuarios, setusuarios] = useState<UsuarioGet[]>([]);
    const [usuario, setUsuario] = useState<UsuarioGet | null>(null);

    useEffect(() => {
        const fetchAtivos = async () => {
            try {
                const res = await getListaUsuario(filtro);
                if (res) {
                    setusuarios(res);
                }
            } catch (error) {
                console.error("Erro ao buscar usuarios", error);
            }
        };

        fetchAtivos();
    }, [userLogado, filtro]);

    return (
        <div
            className="d-flex vh-100"
            style={{
                backgroundImage: "url('/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Navbar paginaAtiva={4} />

            {/* Main Content Area */}
            <div className='flex-grow-1'>
                <div className="m-5 card" style={{ height: "780px", overflowY: "auto", overflowX: "hidden" }}>
                    <div className="row">
                        <div className="col-12">
                            <div>
                                <strong className="d-flex justify-content-center align-items-center p-2 mb-md-0 text-black">
                                    <span className="fs-4">Usuários</span>
                                </strong>
                            </div>
                            <hr className="my-3 w-75 mx-auto" />
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
                            <div className="p-3">
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Nome</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Login</th>
                                            <th scope="col">Cargo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {usuarios.length > 0 ? (
                                            usuarios.map((usuario) => (
                                                <tr>
                                                    <td>{usuario.nome}</td>
                                                    <td>{usuario.email}</td>
                                                    <td>{usuario.login}</td>
                                                    <td>{usuario.cargo.nome}</td>
                                                </tr>

                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={4} className="text-center">
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

export default UsuariosPage;
