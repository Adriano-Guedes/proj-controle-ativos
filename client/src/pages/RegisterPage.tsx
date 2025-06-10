import * as Yup from "yup";
import { useAuth } from "../context/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


type Props = {};

type RegisterFormInputs = {
    nome: string;
    email: string;
    login: string;
    senha: string;
};

const validation = Yup.object().shape({
    nome: Yup.string().required("Informe o nome"),
    email: Yup.string().required("Informe o email"),
    login: Yup.string().required("Informe um nome de login"),
    senha: Yup.string()
        .required("Informe a senha!")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/,
            "A senha deve conter ao menos uma letra maiúscula, uma minúscula e um caractere especial"
        ),
})

const RegisterPage = (props: Props) => {
    const navigate = useNavigate();
    const { registerUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>({ resolver: yupResolver(validation) })

    const handleRegister = (form: RegisterFormInputs) => {
        registerUser(form.nome, form.email, form.login, form.senha);
    };
    const handleCancelar = () => {
        navigate("/");
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
            <div className="card p-3 shadow w-100" style={{ maxWidth: "400px", backgroundColor: "rgb(255, 255, 255)" }}>
                <div className="form-signin w-75 m-auto">
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <h1 className="h3 mb-3 fw-normal text-center">Criar conta</h1>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Nome"
                                {...register("nome")}
                            />
                            <label htmlFor="floatingInput">Nome <span style={{ color: 'red' }}>*</span></label>
                            {errors.nome && <p className="text-danger mt-1">{errors.nome.message}</p>}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Email"
                                {...register("email")}
                            />
                            <label htmlFor="floatingInput">Email <span style={{ color: 'red' }}>*</span></label>
                            {errors.email && <p className="text-danger mt-1">{errors.email.message}</p>}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Login"
                                {...register("login")}
                            />
                            <label htmlFor="floatingInput">Login <span style={{ color: 'red' }}>*</span></label>
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
                            <label htmlFor="floatingPassword">Senha <span style={{ color: 'red' }}>*</span></label>
                            {errors.senha && <p className="text-danger mt-1">{errors.senha.message}</p>}
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-primary w-100 py-2 mb-4" type="submit">
                                    Criar
                                </button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-danger w-100 py-2 mb-4" type="button" onClick={handleCancelar}>
                                    Cancelar
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>


    );

};


export default RegisterPage;