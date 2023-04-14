import React from "react";
import { Navigate } from "react-router-dom";
import Common from "../Pages/Common";

const AdminProtect = () => {
  const auth = JSON.parse(localStorage.getItem("adminprofile"));
  return auth ? <Common /> : <Navigate to="/admin/login" />;
};

export default AdminProtect;
