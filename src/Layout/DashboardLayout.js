import React from 'react';
import { Outlet } from 'react-router';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Dashboard></Dashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;