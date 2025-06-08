import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import RegisterPage from "../pages/RegisterPage";

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
            //   { path: "design-guide", element: <DesignGuide /> },
            //   {
            //     path: "company/:ticker",
            //     element: (
            //       <ProtectedRoute>
            //         <CompanyPage />
            //       </ProtectedRoute>
            //     ),
            //     children: [
            //       { path: "company-profile", element: <CompanyProfile /> },
            //       { path: "income-statement", element: <IncomeStatement /> },
            //       { path: "balance-sheet", element: <BalanceSheet /> },
            //       { path: "cashflow-statement", element: <CashflowStatement /> },
            //       { path: "historical-dividend", element: <HistoricalDividend /> },
            //     ],
            //   },
        ],
    },
]);