import "./TotalRevenue.css";
import moneybag from "../Images/moneybag.svg";
import rupee from "../Images/rupee.svg";
const data = { total: "10k", lweek: "70k", lmonth: "270k" };

const TotalRevenue = () => {
  return (
    <div className="TotalRevenue">
      <div className="TotalRevenue__top">
        <h2>Total Revenue</h2>
        <img src={moneybag} alt="" />
      </div>

      <div className="TotalRevenue__center">
        <img src={rupee} alt="totalrevenuerupee" />
        {data.total}
      </div>

      <div className="TotalRevenue__bottom">
        <div>
          <h5>Last Week</h5>
          <div>
            <img src={rupee} alt="totalrevenuerupee" />
            {data.lweek}
          </div>
        </div>
        <div>
          <h5>Last Week</h5>
          <div>
            <img src={rupee} alt="totalrevenuerupee" />
            {data.lweek}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
