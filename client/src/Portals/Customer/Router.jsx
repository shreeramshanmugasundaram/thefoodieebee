import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import CheckoutCart from "./Pages/Cart";
import Collectinfo from "./Pages/Collect";
import PaymentStatus from "./Pages/Status";

import { ShoppingCartProvider } from "./context/shoppingCartContext";

const CustomerRoutes = () => {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route index path="/" element={<Home />}></Route>

        {/* Menu Route */}
        <Route path="/menu" element={<Menu />}></Route>

        {/* Checkout route */}
        <Route path="/checkout" element={<CheckoutCart />}></Route>
        <Route path="/collect" element={<Collectinfo />}></Route>
        <Route path="/status" element={<PaymentStatus />}></Route>
      </Routes>
    </ShoppingCartProvider>
  );
};

export default CustomerRoutes;
