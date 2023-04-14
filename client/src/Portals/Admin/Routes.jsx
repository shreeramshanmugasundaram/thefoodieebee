import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import AdminProtect from "./ProtectedRoutes/AdminProtect";
import UserDetail from "./Pages/UserDetail";
import Transaction from "./Pages/Transaction";
import Logs from "./Pages/Logs";
import Inventory from "./Pages/Inventory";
import SettingTable from "./Pages/Coupons";
import Setting from "./Pages/Setting";
import ViewDishes from "./Pages/Dishes";
import EditDishes from "./Pages/EditDishes";
import Main from "./Pages/Main";
import PageNotFound from "../../Common/PageNotFound";
import LoginRedirect from "./ProtectedRoutes/LoginRedirect";
import AddDishes from "./Pages/AddDishes";
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<LoginRedirect />}>
        <Route path="login" element={<Login />}></Route>
      </Route>

      <Route path="/admin" element={<AdminProtect />}>
        <Route path="" element={<Main />}></Route>
        <Route path="userinfo" element={<UserDetail />}></Route>
        <Route path="transaction" element={<Transaction />}></Route>
        <Route path="inventory" element={<Inventory />}></Route>
        <Route path="logs" element={<Logs />}></Route>
        <Route path="setting" element={<Setting />}></Route>
        <Route path="coupons" element={<SettingTable />}></Route>
        <Route path="dishes" element={<ViewDishes />}></Route>
        <Route path="edit" element={<EditDishes />}></Route>
        <Route path="add" element={<AddDishes />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
