import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const KitchenProtect = () => {
  const auth = JSON.parse(localStorage.getItem("kitchenprofile"));
  return auth ? <Outlet /> : <Navigate to="/kitchen/login" />;
};

export default KitchenProtect;
