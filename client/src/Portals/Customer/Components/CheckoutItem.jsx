import { useState } from "react";

import dropdown from "../Images/Checkoutcartdropdown.webp";
import checkoutrupee from "../Images/CheckoutRupee.webp";
const CheckoutItem = ({ item }) => {
  const [count, setcount] = useState(1);

  const handleincrement = () => {
    setcount((prev) => prev + 1);
  };

  const handledecrement = () => {
    if (count !== 1) {
      setcount((prev) => prev - 1);
    }
  };
  return (
    <div className="CheckoutCart__item">
      {/* veg or non veg */}
      {item.type === "veg" ? (
        <div className="veg__icon">
          <div></div>
        </div>
      ) : (
        <div className="nonveg__icon">
          <div></div>
        </div>
      )}
      <div className="CheckoutCart__details">
        <h3>{item.title}</h3>
        <p>Addon on : {item.addon.map((item) => item)}</p>
        <button>
          Cusomize <img src={dropdown} alt="CheckoutCartDropdown" />
        </button>
      </div>

      <div className="CheckoutCart__qty">
        <div className="PopCard__counter">
          <button onClick={handledecrement}>-</button>
          <span style={{ margin: "0 0.5rem" }}>{count}</span>
          <button onClick={handleincrement}>+</button>
        </div>
        <div>
          <img src={checkoutrupee} alt="checkoutcartrupee" />
          {item.rup}
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
