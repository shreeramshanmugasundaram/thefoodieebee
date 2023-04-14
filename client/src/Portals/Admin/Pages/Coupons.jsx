import "./Coupons.css";
import deleteicon from "../Images/delete.svg";
const data = [
  {
    name: "Orders >Rs.1000 in a week",
    code: "DISC10",
    discount: "10%",
    start: "12/12/2022",
    end: "12/12/2022",
    status: "enable",
  },
  {
    name: "Orders >Rs.1000 in a week",
    code: "DISC10",
    discount: "10%",
    start: "12/12/2022",
    end: "12/12/2022",
    status: "disable",
  },
  {
    name: "Orders >Rs.1000 in a week",
    code: "DISC10",
    discount: "10%",
    start: "12/12/2022",
    end: "12/12/2022",
    status: "enable",
  },
];
const SettingTable = () => {
  return (
    <div className="AdminTable">
      <h3>Coupons Codes</h3>
      <div className="AdminTable__setting__header">
        <div>Coupon Name</div>
        <div>Code Name</div>
        <div>Discount</div>
        <div>Start</div>
        <div>End</div>
        <div>Status</div>
        <div>Action</div>
      </div>
      <div
        className="AdminTable__content"
        style={{
          overflow: "scroll",
        }}
      >
        {data.map((item) => {
          return (
            <div className="AdminTable__setting__row" key={item?.mob}>
              <div>{item?.name}</div>
              <div>{item?.code}</div>
              <div>{item?.discount}</div>
              <div>{item?.start}</div>
              <div>{item?.end}</div>
              <div>
                {item.status === "enable" ? (
                  <div
                    className="statusapproved"
                    style={{ marginRight: "20px" }}
                  >
                    Enable
                  </div>
                ) : (
                  <div
                    className="statuspending"
                    style={{ marginRight: "20px" }}
                  >
                    Disable
                  </div>
                )}
              </div>
              <div>
                <img src={deleteicon} alt="deleteicon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SettingTable;
