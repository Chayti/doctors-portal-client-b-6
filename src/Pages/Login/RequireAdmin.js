import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../contexts/AuthProvider';

const RequireAdmin = ({children}) => {
    const {user, loading, logOut} = useContext(AuthContext);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if(loading || adminLoading){
        return <Loading></Loading>
    }

    if(!user || !admin){
        logOut()
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;