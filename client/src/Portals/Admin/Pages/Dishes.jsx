import { useNavigate } from "react-router-dom";
import "./Dishes.css";
import deletedishes from "../Images/delete.svg";
import editdishes from "../Images/edit.svg";

import { getDishes } from "../../../action/getDishes";
import { deleteDish } from "../../../action/deleteDish";
import { useEffect, useState } from "react";

const ViewDishes = () => {
  const navigate = useNavigate();
  const [deleted, setDeleted] = useState();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const result = await getDishes();
    setData(result);
    console.log(result);
  };
  const handledelete = async (e) => {
    const deleted = await deleteDish({ _id: e.target.alt });
    setDeleted(deleted);
  };
  useEffect(() => {
    fetchData();
  }, [deleted]);
  return (
    <>
      <div className="AdminTable">
        <h3>Edit Menu</h3>

        {/* <h3>Dishes</h3> */}
        <div
          style={{
            width: "95%",
            margin: "10px auto",
          }}
        >
          <div style={{ textAlign: "right" }}>
            <button
              className="Admin__btn"
              onClick={() => navigate("/admin/add")}
              style={{ margin: "10px" }}
            >
              + Add New Dish
            </button>
          </div>
          <div className="AdminTable__dishes__header">
            <div>Dishes</div>
            <div>Description</div>
            <div>Addons</div>

            <div>Price</div>
            <div>Remove</div>
          </div>
          <div
            className="AdminTable__content"
            style={{ height: "65vh", overflowX: "hidden" }}
          >
            {data.map((item) => {
              return (
                <div className="AdminTable__dishes__row" key={item?._id}>
                  <div>
                    <img
                      src={`http://localhost:5000/image/dish/${item?._id}.webp`}
                      alt="admindishesimage"
                    />
                    <p>{item.name}</p>
                  </div>
                  <div className="AdminTable__dishes__des">
                    {item?.description}
                  </div>
                  <div className="AdminTable__dishes__addons">
                    <ul>
                      {item.addons.map((item) => {
                        return (
                          <li>
                            {item.addonname} - {item.addonprice}/-
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div>{item.price}.00/-</div>
                  <div>
                    <img
                      className="deletedishicon"
                      src={deletedishes}
                      alt={item._id}
                      onClick={handledelete}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDishes;
