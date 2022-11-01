import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import useAdmin from "../../hooks/useAdmin";
import { signOut } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const RequireAdmin = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();

  if (loading || adminLoading) {
    return <Loading></Loading>;
  }

  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;
