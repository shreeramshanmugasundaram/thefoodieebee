import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import KitchenHistory from "./Pages/History";
import KitchenProtect from "./ProtectedRoutes/KitchenProtect";
import LoginRedirect from "./ProtectedRoutes/LoginRedirect";
import PageNotFound from "../../Common/PageNotFound";

const KitchenRoutes = () => {
  return (
    <Routes>
      <Route path="/kitchen" element={<LoginRedirect />}>
        <Route path="login" element={<Login />}></Route>
      </Route>

      <Route path="/kitchen" element={<KitchenProtect />}>
        <Route path="" element={<Dashboard />}></Route>
        <Route path="history" element={<KitchenHistory />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default KitchenRoutes;
