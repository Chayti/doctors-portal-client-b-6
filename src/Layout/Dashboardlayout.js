import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Navbar from "../Pages/Shared/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Dashboard></Dashboard>
    </div>
  );
};

export default DashboardLayout;
