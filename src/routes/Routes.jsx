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
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import MakePayment from "../pages/Dashboard/Member/MakePayment";
import Payment from "../pages/Dashboard/Member/Payment";
import PaymentHistory from "../pages/Dashboard/Member/PaymentHistory";
import ManageMembers from "../pages/Dashboard/Admin/ManageMembers";
import MakeAnnouncement from "../pages/Dashboard/Admin/MakeAnnouncement";
import Announcement from "../components/Announcement/Announcement";
import AgreementRequest from "../pages/Dashboard/Admin/AgreementRequest";
import ManageCoupons from "../pages/Dashboard/Admin/ManageCoupons";






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
      {
        path : 'announcements',
        element : <Announcement></Announcement>

      },
      {
        path : 'myProfile',
        element : <MyProfile></MyProfile>

      },
      {
        path : 'makePayment',
        element : <MakePayment></MakePayment>

      },
      {
        path : 'payment',
        element : <Payment></Payment>

      },
      {
        path : 'paymentHistory',
        element : <PaymentHistory></PaymentHistory>

      },
      {
        path : 'manageMembers',
        element : <ManageMembers></ManageMembers>

      },
      {
        path : 'makeAnnouncement',
        element : <MakeAnnouncement></MakeAnnouncement>

      },
      {
        path : 'agreements',
        element : <AgreementRequest></AgreementRequest>

      },
      {
        path : 'manageCoupons',
        element : <ManageCoupons></ManageCoupons>

      },
    ]
  }
]);

export default router