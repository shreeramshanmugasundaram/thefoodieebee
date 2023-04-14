import { NavLink } from "react-router-dom";
import "./History.css";

import listicon from "../Images/list.webp";
import historyicon from "../Images/historyicon.webp";
// import searchicon from "../Images/search.webp";
import profile from "../Images/profile.webp";

import KitchenHistoryCard from "../Components/KitchenHistoryCard";

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
const KitchenHistory = () => {
  return (
    <div className="Kitchen__dashboard">
      <div className="Kitchen__top">
        <h1>Carvan Delight</h1>
        <button>Logout</button>
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

        <div>
          <div className="Kitchen__searchhistory">
            Search |
            <input type="text" />
            <button
              style={{
                padding: "8px 16px",
                outlineColor: "transparent",
                border: "none",
                background: "#5900D9",
                borderRadius: "10px",
                fontSize: "16px",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              search
            </button>
          </div>
          <div style={{ height: "86vh", overflow: "scroll" }}>
            {livelist.map((data) => {
              return <KitchenHistoryCard data={data} />;
            })}
          </div>
        </div>

        <div className="kitchen__table">
          <div className="kitchen__date">
            Date : <input type="date" name="" id="" />
          </div>
          <h3 style={{ marginBottom: "1rem" }}>Total Orders </h3>
          <div className="kitchen__tcount">56</div>
        </div>
      </div>
    </div>
  );
};

export default KitchenHistory;
