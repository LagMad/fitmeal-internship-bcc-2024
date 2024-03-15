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
import RencanaMakan from "../pages/Dashboard/RencanaMakan";
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
    element: <RencanaMakan />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
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
  //       path: "/dashboard",
  //       element: <Dashboard />,
  //     },
  //   ],
  // },
]);

export default Router;
