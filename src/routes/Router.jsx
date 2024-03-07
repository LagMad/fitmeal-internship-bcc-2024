import { createBrowserRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

// Route
// import ProtectedRoute from "../components/routes/ProtectedRoute";
// import AuthRoute from "../components/routes/AuthRoute";

// Page
import Home from "../pages/Home";
// import LoginPage from "../pages/LoginPage";
// import SignupPage from "../pages/SignupPage";

// export default Router;

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default Router;

// const Router = createBrowserRouter([
//     {
//       element: <AuthRoute />,
//       children: [
//         {
//           path: "/login",
//           element: <LoginPage />,
//         },
//         {
//           path: "/signup",
//           element: <SignupPage />,
//         },
//       ],
//     },
//     {
//       element: <ProtectedRoute />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//       ],
//     },
//   ]);

//   export default Router;
