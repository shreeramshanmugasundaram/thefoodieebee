import "./KitchenCard.css";
// const data = {
//   orderid: "101",
//   table: "5",
//   dishes: [
//     { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
//     { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
//     { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
//     { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
//     { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
//     { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
//     { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
//     { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
//   ],
// };
const KitchenCard = ({ data }) => {
  return (
    <div className="KitchenCard__wrapper">
      <div className="KitchenCard__orderid">Order Id : {data.orderid}</div>
      <div className="KitchenCard__main">
        <div>{data.table}</div>
        <div>
          {data.dishes.map((item) => {
            return (
              <div>
                <h4>
                  {item.qty} - {item.name}
                </h4>
                <p>
                  {item.addon.map((addon) => {
                    return <span>{addon}</span>;
                  })}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KitchenCard;
