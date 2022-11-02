import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AddDoctor";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors";
import MyAppointments from "../Pages/Dashboard/MyAppointments";
import MyHistory from "../Pages/Dashboard/MyHistory";
import MyReview from "../Pages/Dashboard/MyReview";
import Payment from "../Pages/Dashboard/Payment";
import Users from "../Pages/Dashboard/Users";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import RequireAdmin from "../Pages/Login/RequireAdmin";
import RequireAuth from "../Pages/Login/RequireAuth";
import SignUp from "../Pages/Login/SignUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/appointment",
        element: (
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <RequireAuth>
        <DashboardLayout></DashboardLayout>
      </RequireAuth>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointments />,
      },
      {
        path: "/dashboard/review",
        element: <MyReview />,
      },
      {
        path: "/dashboard/history",
        element: <MyHistory />,
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(`https://secret-dusk-46242.herokuapp.com/booking/${params.id}`),
        element: <Payment />,
      },
      {
        path: "/dashboard/users",
        element: (
          <RequireAdmin>
            <Users />
          </RequireAdmin>
        ),
      },
      {
        path: "/dashboard/addDoctor",
        element: (
          <RequireAdmin>
            <AddDoctor />
          </RequireAdmin>
        ),
      },
      {
        path: "/dashboard/manageDoctor",
        element: (
          <RequireAdmin>
            <ManageDoctors />
          </RequireAdmin>
        ),
      },
    ],
  },
]);
