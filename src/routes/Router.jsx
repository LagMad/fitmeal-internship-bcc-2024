import { createBrowserRouter } from "react-router-dom";
import React from "react";

// Route
import ProtectedRoute from "../components/routes/ProtectedRoute";

// Page
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import LacakNutrisi from "../pages/Dashboard/LacakNutrisi";
import Dashboard from "../pages/Dashboard/DashboardProfile";
import InformasiNutrisi from "../pages/InformasiNutrisi";
import LupaPassword from "../pages/LupaPasswordPage";
import DashboardRencanaMakan from "../pages/Dashboard/DashboardRencanaMakan";
import RencanaMakan from "../pages/RencanaMakan";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/lupapassword",
    element: <LupaPassword />,
  },
  {
    path: "/informasinutrisi",
    element: <InformasiNutrisi />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/lacaknutrisi",
        element: <LacakNutrisi />,
      },
      {
        path: "/dashboard/rencanamakan",
        element: <DashboardRencanaMakan />,
      },
      {
        path: "/informasinutrisi",
        element: <InformasiNutrisi />,
      },
      {
        path: "/rencanamakan",
        element: <RencanaMakan />,
      },
    ],
  },
]);

export default Router;
