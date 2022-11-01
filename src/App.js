import './App.css';
import { createBrowserRouter } from "react-router-dom";
import { Route, RouterProvider } from 'react-router';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';
import Main from './Layout/Main';
import DashboardLayout from './Layout/DashboardLayout';

function App() {
  const routes = createBrowserRouter([
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
          element: <RequireAuth><Appointment /></RequireAuth>,
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth><DashboardLayout></DashboardLayout></RequireAuth>,
      children: [
        {
          path: "/dashboard",
          element: <MyAppointments />
        },
        {
          path: "/dashboard/review",
          element: <MyReview />
        },
        {
          path: "/dashboard/history",
          element: <MyHistory />
        },
        {
          path: "/dashboard/payment/:id",
          // loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}),
          element: <Payment />
        },
        {
          path: "/dashboard/users",
          element: <RequireAdmin><Users /></RequireAdmin>
        },
        {
          path: "/dashboard/addDoctor",
          element: <RequireAdmin><AddDoctor /></RequireAdmin>
        },
        {
          path: "/dashboard/manageDoctor",
          element: <RequireAdmin><ManageDoctors /></RequireAdmin>
        },
      ]
    },
  ]);
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
