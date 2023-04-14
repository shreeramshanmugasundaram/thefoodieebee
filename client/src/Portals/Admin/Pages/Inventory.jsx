import "./UserDetail.css";
const data = [
  {
    name: "All Purpose flour",
    unit: "kg",
    price: "80",
    stock: "10",
  },
  {
    name: "All Purpose flour",
    unit: "kg",
    price: "80",
    stock: "10",
  },
  {
    name: "All Purpose flour",
    unit: "kg",
    price: "80",
    stock: "10",
  },
  {
    name: "All Purpose flour",
    unit: "kg",
    price: "80",
    stock: "10",
  },
  {
    name: "All Purpose flour",
    unit: "kg",
    price: "80",
    stock: "10",
  },
  {
    name: "All Purpose flour",
    unit: "kg",
    price: "80",
    stock: "10",
  },
  {
    name: "All Purpose flour",
    unit: "kg",
    price: "80",
    stock: "10",
  },
  {
    name: "All Purpose flour",
    unit: "kg",
    price: "80",
    stock: "10",
  },
  {
    name: "All Purpose flour",
    unit: "kg",
    price: "80",
    stock: "10",
  },
  {
    name: "All Purpose flour",
    unit: "kg",
    price: "80",
    stock: "10",
  },
  {
    name: "All Purpose flour",
    unit: "kg",
    price: "80",
    stock: "10",
  },
  {
    name: "All Purpose flour",
    unit: "kg",
    price: "80",
    stock: "10",
  },
];

const Inventory = () => {
  return (
    <div className="AdminTable">
      <h3>Inventory</h3>
      <div>
        <div className="AdminTable__userdetail__header">
          <div>Item Name</div>
          <div>Unit of measurement</div>
          <div>Unit Price(Rs)</div>
          <div>Quantity in Stock</div>
        </div>
        <div className="AdminTable__content">
          {data.map((item) => {
            return (
              <div className="AdminTable__userdetail__row" key={item?.name}>
                <div>{item?.name}</div>
                <div>{item?.unit}</div>
                <div>{item?.price}</div>
                <div>{item?.stock}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
