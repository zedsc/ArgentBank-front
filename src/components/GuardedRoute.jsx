import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const GuardedRoute = () => {
  const token = useSelector((state) => state.auth.userToken);

  if (!token) {
    return <Navigate to="/sign-in" replace />;
  }
  return <Outlet />;
};

export default GuardedRoute;
