import * as Yup from "yup";
import { useAuth } from "../context/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

type Props = {};

type LoginFormInputs = {
    login: string;
    senha: string;
};

const validation = Yup.object().shape({
    login: Yup.string().required("Usuário ou email necessário!"),
    senha: Yup.string().required("Informe a senha!"),
});


const LoginPage = (props: Props) => {
    const navigate = useNavigate();
    const { loginUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({ resolver: yupResolver(validation) })

    const handleLogin = (form: LoginFormInputs) => {
        loginUser(form.login, form.senha);
    };
    const handleCadastro = () => {
        navigate("/registrar");
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                backgroundImage: "url('/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="card p-3 shadow w-100" style={{ maxWidth: "400px", backgroundColor: "rgba(255,255,255,0.9)" }}>
                <div className="form-signin w-75 m-auto">
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <h1 className="h2 mb-3 fw-normal text-center"><FaLocationDot className="me-2" size={28} />Track-PRO</h1>

                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Login ou Email"
                                {...register("login")}
                            />
                            <label htmlFor="floatingInput">Login</label>
                            {errors.login && <p className="text-danger mt-1">{errors.login.message}</p>}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Senha"
                                {...register("senha")}
                            />
                            <label htmlFor="floatingPassword">Senha</label>
                            {errors.senha && <p className="text-danger mt-1">{errors.senha.message}</p>}
                        </div>

                        <button className="btn btn-primary w-100 py-2 mb-2" type="submit">
                            Entrar <FaArrowCircleRight className="me-2" size={20} />
                        </button>

                        <button className="btn btn-secondary w-100 py-2" type="button" onClick={handleCadastro}>
                            Cadastrar
                        </button>

                        <p className="mt-5 mb-3 text-body-secondary">© 2025</p>
                    </form>
                </div>
            </div>

        </div>
    );

};


export default LoginPage;