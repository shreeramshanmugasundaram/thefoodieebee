import "./Cart.css";
import CheckoutItem from "../Components/CheckoutItem";
import Checkoutcoupon from "../Images/Checkoutcoupon.webp";
import CheckoutCartrupee from "../Images/CheckoutRupee.webp";
const items = [
  {
    type: "veg",
    title: "Panner tikka Piza with zero bill",
    addon: ["chesse garlic bread"],
    qty: "1",
    rup: "270",
  },
  {
    type: "veg",
    title: "Panner tikka Pzza",
    addon: ["chesse garlic bread"],
    qty: "1",
    rup: "270",
  },
  {
    type: "veg",
    title: "Panner tikka Pizza",
    addon: ["chesse garlic bread"],
    qty: "1",
    rup: "270",
  },
];

const bill = [
  { title: "Item total", amt: 270 },
  { title: "Taxes", amt: 270 },
  { title: "Total", amt: 270 },
];
const CheckoutCart = () => {
  return (
    <div className="CheckoutCart__wrapper">
      <div className="CheckoutCart">
        <div className="CheckoutCart__title">Cart total</div>
        {/* check out list item */}
        <div className="CheckoutCart__items">
          {items.map((item) => {
            return <CheckoutItem item={item} key={item.title} />;
          })}
        </div>
        {/*  coupon code title*/}
        <div className="CheckoutCart__coupon">
          <img src={Checkoutcoupon} alt="checkoutcoupon" />
          Have coupon code? Enter coupon and get exciting offers
        </div>
        <div className="CheckoutCart__input">
          <input type="text" name="" id="" placeholder="Coupon Code" />
          <button>Check</button>
        </div>
        {/* bill details */}

        <div className="CheckoutCart__bill">
          <h2>Bill Details</h2>
          {bill.map((item) => {
            return (
              <>
                {item.title === "Total" ? <hr /> : ""}
                <div>
                  <div>{item.title}</div>
                  <div>
                    <img src={CheckoutCartrupee} alt="checkoutcartrupee" />
                    {item.amt}
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {/* Place Order button */}
        <center>
          <button className="CheckoutCart__placeorder">Place Order</button>
        </center>
      </div>
    </div>
  );
};

export default CheckoutCart;
