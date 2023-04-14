import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CustomerRouter from "./Portals/Customer/Router";
import KitchenRouter from "./Portals/Kitchen/Router";
import AdminRoutes from "./Portals/Admin/Routes";

const App = () => {
  return (
    <BrowserRouter>
      {/* Main Routes */}
      <CustomerRouter />
      <KitchenRouter />
      <AdminRoutes />
    </BrowserRouter>
  );
};

export default App;
