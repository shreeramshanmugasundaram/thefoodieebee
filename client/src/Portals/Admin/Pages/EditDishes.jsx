import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./EditDishes.css";

const addondata = [
  { name: "Chesse", id: "D045", price: "50" },
  { name: "Chesse", id: "D045", price: "50" },
  { name: "Chesse", id: "D045", price: "50" },
  { name: "Chesse", id: "D045", price: "80" },
];

const type = [
  {
    name: "Veg",
  },
  { name: "Non-Veg" },
];
const EditDishes = () => {
  const { state } = useLocation();
  const [name, setname] = useState(state);
  console.log(state);
  return (
    <div className="EditDishes">
      <h3>Edit Dish</h3>
      <div className="EditDishes__inputs">
        <label htmlFor="Dname">Dish Name: </label>
        <input
          type="text"
          name=""
          id="Dname"
          placeholder="Eg : Panner Pizza "
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </div>

      <div className="EditDishes__inputs">
        <label htmlFor="Dname">Choose Dish Image: </label>
        <input type="file" name="" id="Dname" />
      </div>

      <div className="EditDishes__inputs">
        <label htmlFor="Dname">Choose Description: </label>
        <textarea
          name=""
          id="Dname"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </div>
      {/* veg or non veg */}
      <div className="EditDishes__inputs">
        <label> Type</label>
        <div>
          {type.map((item) => {
            return (
              <div className="EditDishes__addons">
                <input
                  type="radio"
                  name="food"
                  id="Dname"
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="Dname">{item.name}</label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cat */}
      <div className="EditDishes__inputs">
        <label> Category</label>
        <div>
          {addondata.map((item) => {
            return (
              <div className="EditDishes__addons">
                <input
                  type="radio"
                  name="food"
                  id="Dname"
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="Dname">
                  {item.name} - {item?.price}/-
                </label>
              </div>
            );
          })}
        </div>

        {/* add new category */}
        <div></div>
        <div className="EditDishes__addons__inputs">
          <input type="text" placeholder="Add new Category" />
          <button
            className="Admin__btn"
            style={{
              padding: "0.5rem 2rem",
            }}
          >
            Add
          </button>
        </div>
      </div>

      {/*  addons section*/}
      <div className="EditDishes__inputs">
        <label> Addons</label>
        <div>
          {addondata.map((item) => {
            return (
              <div className="EditDishes__addons">
                <input type="checkbox" name="" id="Dname" />
                <label htmlFor="Dname">
                  {item.name} - {item?.price}/-
                </label>
              </div>
            );
          })}
        </div>

        {/* add new addons */}
        <div></div>
        <div className="EditDishes__addons__inputs">
          <input type="text" placeholder="Add new Addons" />
          <input type="number" placeholder="Price of addons" />
          <button
            className="Admin__btn"
            style={{
              padding: "0.5rem 2rem",
            }}
          >
            Add
          </button>
        </div>
      </div>
      {/* price */}
      <div className="EditDishes__inputs">
        <label htmlFor="Dname">Price: </label>
        <input type="number" name="" id="Dname" placeholder="Eg : 80,90" />
      </div>
      <div className="EditDishes__save">
        <button
          className="Admin__btn"
          style={{
            marginTop: "1rem",
            padding: "1rem 2rem",
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditDishes;
