// importing images
import "./DishCard.css";
import DishStar from "../Images/DishStar.webp";
import DishRupee from "../Images/DishRupee.webp";

// sample dish image
import DishImg from "../Images/slidefilterdemo.webp";

const DishCard = ({ data, action }) => {
  const handleaddcart = () => {
    action(data._id);
    const popcard = document.getElementById("PopCard");
    popcard.style.transform = "translate(0, 0)";
  };
  return (
    <div className="Menu__dishcard">
      <div className="Menu__dishcardcontent">
        {/* veg or non-veg icon */}
        {data.type === "Veg" ? (
          <div className="veg__icon">
            <div></div>
          </div>
        ) : (
          <div className="nonveg__icon">
            <div></div>
          </div>
        )}

        {/* Dish Name */}
        <h3>{data.name}</h3>
        <div className="Menu__rating">
          <h3>
            {data.rating} 4.5 <img src={DishStar} alt="Dishstar" />
          </h3>
        </div>

        {/* Dish Description */}
        <p>Description</p>
        <p className="Menu__dishcardcontent__paragraph">
          {data.description.substring(0, 200)}...
        </p>

        {/* amount */}
        <div className="Menu__cardamount">
          <img src={DishRupee} alt="rupeesicon" />
          <div>{data.price}</div>
        </div>
      </div>

      {/* next div for image and button */}

      <div className="Menu__cardImg">
        <img
          src={`http://localhost:5000/image/dish/${data._id}.webp`}
          alt="dishimage"
          loading="lazy"
        />
        <div className="Menu__cardbtn" onClick={handleaddcart}>
          + Add to Cart
        </div>
      </div>
    </div>
  );
};

export default DishCard;
