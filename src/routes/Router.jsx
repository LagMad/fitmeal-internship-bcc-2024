import { createBrowserRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

// Route
import ProtectedRoute from "../components/routes/ProtectedRoute";
import AuthRoute from "../components/routes/AuthRoute";

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
// import SignupPage from "../pages/SignupPage";

// export default Router;

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
    path: "/lacaknutrisi",
    element: <LacakNutrisi />,
  },
  {
    path: "/rencanamakan",
    element: <RencanaMakan/>,
  },
  {
    path: "/dashboard/",
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
    path: "/lupapassword",
    element: <LupaPassword />,
  },

  // {
  //   element: <AuthRoute />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Home />,
  //     },
  //     {
  //       path: "/login",
  //       element: <LoginPage />,
  //     },
  //     {
  //       path: "/signup",
  //       element: <RegisterPage />,
  //     },
  //   ],
  // },
  // {
  //   element: <ProtectedRoute />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Home />,
  //     },
  //     {
  //       path: "/dashboard",
  //       element: <Dashboard />,
  //     },
  //     {
  //       path: "/lacaknutrisi",
  //       element: <LacakNutrisi />,
  //     },
  //     {
  //       path: "/rencanamakan",
  //       element: <RencanaMakan />,
  //     },
  //     {
  //       path: "/informasinutrisi",
  //       element: <InformasiNutrisi />,
  //     },
  //   ],
  // },
]);

export default Router;
