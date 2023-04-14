import AdminNav from "../Components/Nav";
import AdminSearch from "../Components/Search";
import { Outlet } from "react-router-dom";
import "./Common.css";
const Common = () => {
  return (
    <div className="Admin__wrapper">
      <AdminNav />
      <div style={{ marginBottom: "1rem" }}>
        <AdminSearch />
        <Outlet />
      </div>
    </div>
  );
};
export default Common;
