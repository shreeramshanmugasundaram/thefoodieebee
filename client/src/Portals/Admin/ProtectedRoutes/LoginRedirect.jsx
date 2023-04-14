import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Common from "../Pages/Common";

const LoginRedirect = () => {
  const auth = JSON.parse(localStorage.getItem("adminprofile"));
  return auth ? <Navigate to="/admin" /> : <Outlet />;
};

export default LoginRedirect;
