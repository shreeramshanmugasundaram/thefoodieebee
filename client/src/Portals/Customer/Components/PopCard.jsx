import { useEffect, useState } from "react";
// importing css file
import "./PopCard.css";

// importing images
import DishRupee from "../Images/PopCardrupee.webp";
import PopCarddropdown from "../Images/PopCarddropdown.webp";
import PopCardrupee from "../Images/PopCardrupeewhite.webp";
import DummyImage from "../Images/slidefilterdemo.webp";
import { useShoppingCart } from "../context/shoppingCartContext";

import { getDish } from "../../../action/customer/getDish";

const PopCard = ({ dish_id }) => {
  const {
    getItemQuanity,
    increaseCartQuantity,
    getTempQuanity,
    increaseCartTemp,
    decreaseCartTemp,
    decreaseCartQuanity,
    removeFromCart,
  } = useShoppingCart();
  const [dishInfo, setDishInfo] = useState({ addonlist: [] });
  const quanity = getTempQuanity(dish_id);

  const handletotal = (e) => {
    console.log(e.target.name);
  };
  const handleBack = () => {
    const popcard = document.getElementById("PopCard");
    popcard.style.transform = "translate(0,100%)";
  };

  const fetchDish = async (dish_id) => {
    const result = await getDish({ _id: dish_id });
    setDishInfo(result);
  };
  useEffect(() => {
    fetchDish(dish_id);
  }, [dish_id]);

  return (
    <div className="PopCardbg" id="PopCard">
      <div className="PopCard">
        <div className="PopCard__content">
          {/* img of dish  */}
          <center>
            <img
              src={`http://localhost:5000/image/dish/${dish_id}.webp`}
              alt="popcardimg"
            />
          </center>

          {/* veg or non-veg icon */}
          {dishInfo?.type === "Veg" ? (
            <div className="veg__icon">
              <div></div>
            </div>
          ) : (
            <div className="nonveg__icon">
              <div></div>
            </div>
          )}

          {/* basic detail  */}
          <div className="PopCard__countertitle">
            <h3>{dishInfo?.name}</h3>

            {/* counter */}
            <div className="PopCard__counter">
              <button
                onClick={() =>
                  quanity === 1
                    ? removeFromCart(dish_id)
                    : decreaseCartTemp(dish_id)
                }
              >
                -
              </button>
              <span>{quanity}</span>
              <button
                onClick={() => {
                  increaseCartTemp(dish_id);
                }}
              >
                +
              </button>
            </div>
          </div>
          <p className="PopCard__des">{dishInfo?.description}</p>

          <div className="PopCard__addinfo">
            Additional info <img src={PopCarddropdown} alt="PopCarddropdown" />
          </div>
        </div>
        <div className="PopCard__addons">
          <h3>ADD-ONS</h3>
          {dishInfo.addonlist?.map((item) => {
            return (
              <div key={item?._id}>
                <p>{item?.addonname}</p>
                <label className="container">
                  <div className="PopCard__addonprice">
                    <img src={DishRupee} alt="popcardruppee" />
                    {item?.addonprice}
                  </div>
                  <input type="checkbox" onClick={handletotal} />
                  <span className="checkmark"></span>
                </label>
              </div>
            );
          })}
        </div>
        <div className="PopCard__additem">
          <div onClick={handleBack}>Back</div>
          <div>
            Add Item <img src={PopCardrupee} alt="popcardruppee" />
            {dishInfo.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopCard;
