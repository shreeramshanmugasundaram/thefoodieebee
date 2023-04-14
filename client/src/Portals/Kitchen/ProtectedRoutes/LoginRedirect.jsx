import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const LoginRedirect = () => {
  const auth = JSON.parse(localStorage.getItem("kitchenprofile"));
  return auth ? <Navigate to="/kitchen" /> : <Outlet />;
};

export default LoginRedirect;
