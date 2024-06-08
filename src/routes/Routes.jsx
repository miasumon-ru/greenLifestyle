import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Apartment from "../pages/Apartment/Apartment";
import PrivateRoute from "./PrivateRoute";

import Dashboard from "../layout/MainLayout/Dashboard";
import UserDashboard from "../pages/Dashboard/UserDashboard";






const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },

      {
        path: "/apartment",
        element: <PrivateRoute>
          <Apartment></Apartment>
        </PrivateRoute>
      },

    ],
  },
  {
    path : 'dashboard',
    element :<Dashboard></Dashboard>,
    children : [
      {
        path : 'userDashboard',
        element : <UserDashboard></UserDashboard>

      },
    ]
  }
]);

export default router