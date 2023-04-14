import "./Cards.css";
import arrowup from "../Images/arrowup.svg";
import groupicon from "../Images/group.svg";
const data = {
  title: "Customer Cards",
  img: "",
  status: "gain",
  percentage: "20%",
  qty: "100",
  color: " #46B2F9",
  link: "/admin/userinfo",
};
const Cards = () => {
  return (
    <div className="AdminCards__wrapper">
      <div className="AdminCards">
        <div>
          <h4 style={{ color: data.color }}>
            {data.title}
            <img src={groupicon} alt="cardicon" />
          </h4>
          <p>
            <img src={arrowup} alt="arrowup" />
            {data.percentage}
          </p>
        </div>

        <div>
          <h3>{data.qty}</h3>
          <a href={data.link}>See all details</a>
        </div>
      </div>
      <div
        style={{
          background: data.color,
          height: "16px",
          borderRadius: "0 0 20px 20px ",
        }}
      ></div>
    </div>
  );
};

export default Cards;
