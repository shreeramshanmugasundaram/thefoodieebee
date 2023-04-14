import "./Menu.css";
import SlideFilter from "../Components/Slidefilter";
import DishCard from "../Components/DishCard";
import PopCard from "../Components/PopCard";

// import image
import MenuLogo from "../Images/MenuLogo.webp";
import MenuCart from "../Images/MenuCart.webp";
import MenuSearch from "../Images/MenuSearch.webp";
import { useEffect, useState } from "react";
import { getDishes } from "../../../action/customer/getDishes";
import { getDishVeg } from "../../../action/customer/getDishVeg";
import { getSearch } from "../../../action/customer/getSearch";

// sampledata for card

const Menu = () => {
  const [dishList, setDishList] = useState([]);
  const [currClick, setCurrClick] = useState();
  const [distCat, setDishCat] = useState("");
  // to fetch init data
  const fetchInitData = async () => {
    const result = await getDishes();
    setDishList(result);
  };
  const handleSearch = async (e) => {
    const result = await getSearch({ name: e.target.value });
    setDishList(result);
  };
  const handleRadioChange = async (e) => {
    const result = await getDishVeg({ type: e.target.value });
    setDishList(result);
  };
  useEffect(() => {
    fetchInitData();
  }, []);
  return (
    <div className="Menu__warpper">
      {/* top */}
      <div className="Menu__top">
        <div className="Menu__title">
          Menu <img src={MenuLogo} alt="MenuLogo" />
        </div>
        <div className="Menu__cartLogo">
          <img src={MenuCart} alt="MenuCart" />
        </div>
      </div>

      {/* search bar */}

      <div className="Menu__search">
        <img src={MenuSearch} alt="MenuSearch" />
        <input
          type="text"
          name="searchquery"
          id="MenuSearch"
          onChange={handleSearch}
          placeholder="what would you like to eat?"
        />
      </div>

      {/* slide filter section */}
      <div className="Menu__sidefilter">
        <SlideFilter setDish={setDishList} />
      </div>

      {/* veg and non veg section */}
      <div className="Menu__Veg">
        <label className="container">
          All
          <input
            type="radio"
            name="radio"
            value="all"
            onChange={handleRadioChange}
          />
          <span className="checkmark veg_radio"></span>
        </label>
        <label className="container">
          Veg
          <input
            type="radio"
            name="radio"
            value="Veg"
            onChange={handleRadioChange}
          />
          <span className="checkmark veg_radio"></span>
        </label>
        <label className="container">
          Non-Veg
          <input
            type="radio"
            name="radio"
            value="Non-Veg"
            onChange={handleRadioChange}
          />
          <span className="checkmark non_veg_ration"></span>
        </label>
      </div>

      {/* list of Dishes */}

      {dishList.map((item) => {
        return <DishCard data={item} key={item._id} action={setCurrClick} />;
      })}

      {/* Go to Cart Button */}
      {/* <div className="Menu__bottomDiv">
        <div className="Menu__placebtn">Place Order</div>
      </div> */}

      {/*Pop Card */}
      <PopCard dish_id={currClick} />
    </div>
  );
};

export default Menu;
