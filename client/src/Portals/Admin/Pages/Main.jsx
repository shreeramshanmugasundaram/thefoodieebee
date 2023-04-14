import Cards from "../Components/Cards";
import TotalRevenue from "../Components/TotalRevenue";
import LineChart from "../Components/RevenueChart";
// importing css
import "./Main.css";

const data = [
  {
    tackid: "1021234",
    name: "Shreeram Shanmugasundaram",
    date: "12/02/2023",
    time: "07.59",
    amt: "750",
    method: "online",
    status: "approved",
  },
  {
    tackid: "1021234",
    name: "Shreeram Shanmugasundaram",
    date: "12/02/2023",
    time: "07.59",
    amt: "750",
    method: "online",
    status: "pending",
  },
  {
    tackid: "1021234",
    name: "Shreeram Shanmugasundaram",
    date: "12/02/2023",
    time: "07.59",
    amt: "750",
    method: "online",
    status: "pending",
  },
];

const Main = () => {
  return (
    <div className="MainWrapper">
      {/* top cards */}
      <div className="Main__top">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      {/*totol revenue  */}
      <div className="Main__center">
        <TotalRevenue />
        <LineChart />
      </div>

      <div className="Main__bottom">
        <div className="AdminTable">
          <h3>Transaction Details</h3>
          <div>
            <div className="AdminTable__transaction__header">
              <div>Tracking ID</div>
              <div>Customer</div>
              <div>Date</div>
              <div>Time</div>
              <div>Amount(Rs)</div>
              <div>Payment method</div>
              <div>Status</div>
            </div>
            <div className="AdminTable__content" style={{ height: "100%" }}>
              {data.map((item) => {
                return (
                  <div className="AdminTable__transaction__row" key={item?.mob}>
                    <div>{item.tackid}</div>
                    <div>{item.name}</div>
                    <div>{item.date}</div>
                    <div>{item.time}</div>
                    <div>{item.amt}</div>
                    <div>{item.method}</div>
                    <div>
                      {item.status === "approved" ? (
                        <div className="statusapproved">Approved</div>
                      ) : (
                        <div className="statuspending">Pending</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
