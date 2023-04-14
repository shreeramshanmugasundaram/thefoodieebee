import "./Logs.css";
const data = [
  {
    date: "12/02/2023",
    time: "12:45",
    portal: "Customer",
    act: "Order placed table 5",
  },
  {
    date: "12/02/2023",
    time: "12:45",
    portal: "Customer",
    act: "Order placed table 5",
  },
  {
    date: "12/02/2023",
    time: "12:45",
    portal: "Customer",
    act: "Order placed table 5",
  },
  {
    date: "12/02/2023",
    time: "12:45",
    portal: "Customer",
    act: "Order placed table 5",
  },
  {
    date: "12/02/2023",
    time: "12:45",
    portal: "Customer",
    act: "Order placed table 5",
  },
  {
    date: "12/02/2023",
    time: "12:45",
    portal: "Customer",
    act: "Order placed table 5",
  },
  {
    date: "12/02/2023",
    time: "12:45",
    portal: "Customer",
    act: "Order placed table 5",
  },
  {
    date: "12/02/2023",
    time: "12:45",
    portal: "Customer",
    act: "Order placed table 5",
  },
  {
    date: "12/02/2023",
    time: "12:45",
    portal: "Customer",
    act: "Order placed table 5",
  },
  {
    date: "12/02/2023",
    time: "12:45",
    portal: "Customer",
    act: "Order placed table 5",
  },
  {
    date: "12/02/2023",
    time: "12:45",
    portal: "Customer",
    act: "Order placed table 5",
  },
  {
    date: "12/02/2023",
    time: "12:45",
    portal: "Customer",
    act: "Order placed table 5",
  },
  {
    date: "12/02/2023",
    time: "12:45",
    portal: "Customer",
    act: "Order placed table 5",
  },
  {
    date: "12/02/2023",
    time: "12:45",
    portal: "Customer",
    act: "Order placed table 5",
  },
  {
    date: "12/02/2023",
    time: "12:45",
    portal: "Customer",
    act: "Order placed table 5",
  },
];

const Logs = () => {
  return (
    <div className="AdminTable">
      <h3>Transaction Details</h3>
      <div>
        <div className="AdminTable__logs__header">
          <div>Date</div>
          <div>Time</div>
          <div>Portal</div>
          <div>Activity</div>
        </div>
        <div className="AdminTable__content">
          {data.map((item) => {
            return (
              <div className="AdminTable__logs__row" key={item?.mob}>
                <div>{item.date}</div>
                <div>{item.time}</div>
                <div>{item.portal}</div>
                <div>{item.act}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Logs;
