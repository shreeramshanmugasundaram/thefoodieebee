import { useNavigate } from "react-router-dom";

const SettingCoupon = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>Coupon Generator</h3>
      <div className="AdminNewAccount">
        <div style={{ gridTemplateColumns: "repeat(3,1fr) repeat(3,0.5fr)" }}>
          <h5>New Coupon</h5>
          <input type="text" name="" id="" placeholder="Code name" />
          <input type="text" name="" id="" placeholder="Discount" />
          <input
            style={{ width: "12rem", outline: "none", height: "3.8rem" }}
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            name=""
            id=""
            placeholder="Start"
          />
          <input
            style={{ width: "12rem", outline: "none", height: "3.8rem" }}
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            name=""
            id=""
            placeholder="End"
          />
          <div>
            <button>Generate</button>
          </div>
        </div>
        <button
          style={{ margin: "20px 0 0 auto" }}
          onClick={() => navigate("/admin/coupons")}
        >
          View Coupons
        </button>
      </div>
    </>
  );
};

export default SettingCoupon;
