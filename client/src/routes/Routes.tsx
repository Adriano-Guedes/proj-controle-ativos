import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import RegisterPage from "../pages/RegisterPage";
import AtivosPage from "../pages/AtivosPage";
import UsuariosPage from "../pages/UsuarioPage";
import HistoricoPage from "../pages/HistoricoPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <LoginPage /> },
            { path: "registrar", element: <RegisterPage /> },
            {
                path: "principal",
                element: (
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "ativos",
                element: (
                    <ProtectedRoute>
                        <AtivosPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "usuarios",
                element: (
                    <ProtectedRoute>
                        <UsuariosPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "historicos",
                element: (
                    <ProtectedRoute>
                        <HistoricoPage />
                    </ProtectedRoute>
                ),
            },
            { path: "*", element: <Navigate to="/" replace /> },
        ],
    },
]);