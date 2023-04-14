import { NavLink, useNavigate } from "react-router-dom";
// importing css
import "./Nav.css";
// importing images
import dashboard from "../Images/icon/dashboard.svg";
import inventory from "../Images/icon/inventory.svg";
import logout from "../Images/icon/logout.svg";
import logs from "../Images/icon/logs.svg";
import profile from "../Images/icon/profile.svg";
import rupee from "../Images/icon/rupee.svg";
import transaction from "../Images/icon/transaction.svg";
import userdetail from "../Images/icon/userdetail.svg";
import stats from "../Images/icon/stats.svg";
import setting from "../Images/icon/setting.svg";

const AdminNav = () => {
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <div className="AdminNav">
      <img
        src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        alt="adminlogoimage"
      />
      <NavLink to="/admin" title="Dashboard">
        <img src={dashboard} alt="admindashboard" />
      </NavLink>

      <span></span>
      <NavLink to="/admin/userinfo" title="User Detail">
        <img src={userdetail} alt="adminuserdetail" />
      </NavLink>
      <NavLink to="/admin/transaction" title="Transaction">
        <img src={transaction} alt="admintransaction" />
      </NavLink>
      <NavLink to="/admin/inventory" title="Inventory">
        <img src={inventory} alt="admininventory" />
      </NavLink>
      <span></span>

      <NavLink to="">
        <img src={stats} alt="adminstats" />
      </NavLink>
      <NavLink to="/admin" title="coupons">
        <img src={rupee} alt="adminrupee" />
      </NavLink>

      <span></span>
      <NavLink to="/admin/logs" title="Logs">
        <img src={logs} alt="adminlogs" />
      </NavLink>

      <NavLink to="/admin/setting" title="Setting">
        <img src={setting} alt="adminsetting" />
      </NavLink>

      <NavLink to="/admin/dishes" title="Edit Menu">
        <img src={profile} alt="adminprofile" />
      </NavLink>
      <span></span>
      <NavLink to="/admin/login" title="Logout" onClick={handleLogout}>
        <img src={logout} alt="adminlogout" />
      </NavLink>
      <img
        src="https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="adminprofileimage"
      />
    </div>
  );
};

export default AdminNav;
