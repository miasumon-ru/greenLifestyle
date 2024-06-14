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
import AdminRoutes from "./AdminRoutes";
import MemberRoutes from "./MemberRoutes";






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
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'userDashboard',
        element: <UserDashboard></UserDashboard>

      },
      {
        path: 'announcements',
        element: <Announcement></Announcement>

      },
      {
        path: 'myProfile',
        element: <MyProfile></MyProfile>

      },

      // member Routes
      {
        path: 'makePayment',
        element: <MemberRoutes>
          <MakePayment></MakePayment>
        </MemberRoutes>

      },
      {
        path: 'payment',
        element: <MemberRoutes>
          <Payment></Payment>
        </MemberRoutes>

      },
      {
        path: 'paymentHistory',
        element: <MemberRoutes>
          <PaymentHistory></PaymentHistory>
        </MemberRoutes>

      },

      // admin routes
      {
        path: 'manageMembers',
        element: <AdminRoutes>
          <ManageMembers></ManageMembers>
        </AdminRoutes>

      },
      {
        path: 'makeAnnouncement',
        element: <AdminRoutes>

          <MakeAnnouncement></MakeAnnouncement>

        </AdminRoutes>

      },
      {
        path: 'agreements',
        element: <AdminRoutes>
          <AgreementRequest></AgreementRequest>
        </AdminRoutes>

      },
      {
        path: 'manageCoupons',
        element: <AdminRoutes>
          <ManageCoupons></ManageCoupons>
        </AdminRoutes>

      },
    ]
  }
]);

export default router