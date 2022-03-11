import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = () => {
  const location = useLocation();
  const { user } = useAuth();
  return user?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ form: location }} />
  );
};

export default PrivateRoute;
