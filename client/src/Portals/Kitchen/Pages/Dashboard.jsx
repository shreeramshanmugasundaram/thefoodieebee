import { NavLink, useNavigate } from "react-router-dom";
import "./Dashboard.css";

import listicon from "../Images/list.webp";
import historyicon from "../Images/historyicon.webp";

import profile from "../Images/profile.webp";

import KitchenCard from "../Components/KitchenCard";

const livelist = [
  {
    orderid: "101",
    table: "5",
    dishes: [
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
    ],
  },

  {
    orderid: "101",
    table: "5",
    dishes: [
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
    ],
  },

  {
    orderid: "101",
    table: "5",
    dishes: [
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
    ],
  },
  {
    orderid: "101",
    table: "5",
    dishes: [
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
    ],
  },
];
const tablelist = [
  { tableno: "1", status: "complete" },
  { tableno: "2", status: "incomplete" },
  { tableno: "3", status: "incomplete" },
  { tableno: "4", status: "incomplete" },
  { tableno: "5", status: "complete" },
  { tableno: "6", status: "incomplete" },
  { tableno: "7", status: "incomplete" },
  { tableno: "8", status: "incomplete" },
];
const KitchenDashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/kitchen/login");
  };
  return (
    <div className="Kitchen__dashboard">
      <div className="Kitchen__top">
        <h1>Carvan Delight</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="Kitchen__wrapper">
        <div className="Kitchen__nav">
          <img src={profile} alt="kitchenprofile" />
          <h5>Vedika Patil</h5>
          <p>E034</p>

          <div>
            <NavLink to="/kitchen">
              <img src={listicon} alt="kitchenicon" /> Dashboard
            </NavLink>
            <NavLink to="/kitchen/history" id="kitchenhistoryicon">
              <img src={historyicon} alt="kitchenhisicon" /> History
            </NavLink>
          </div>
        </div>

        <div style={{ height: "100vh", overflow: "scroll" }}>
          {livelist.map((data) => {
            return <KitchenCard data={data} />;
          })}
        </div>
        <div className="kitchen__table">
          <h3>Table Order</h3>
          <div className="kitchen__tableorder">
            {tablelist.map((item) => {
              return (
                <>
                  {item.status !== "complete" ? (
                    <div style={{ background: "#FFB3B3" }} key={item.tableno}>
                      {item.tableno}
                    </div>
                  ) : (
                    <div style={{ background: "#A4FFA8" }} key={item.tableno}>
                      {item.tableno}
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenDashboard;
