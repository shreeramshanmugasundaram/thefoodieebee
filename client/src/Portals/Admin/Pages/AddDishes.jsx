import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditDishes.css";
import { createNewDish } from "../../../action/createNewDish";
import { createNewaddon } from "../../../action/createNewAddon";
import { createNewCategory } from "../../../action/createNewCategory";
import { getaddon } from "../../../action/getaddons";
import { getCategory } from "../../../action/getCategory";
// const addondata = [
//   { name: "Chesse", id: "D045", price: "50" },
//   { name: "Chesse", id: "D046", price: "50" },
//   { name: "Chesse", id: "D047", price: "50" },
//   { name: "Chesse", id: "D048", price: "80" },
// ];

const type = [
  {
    name: "Veg",
  },
  { name: "Non-Veg" },
];

const AddDishes = () => {
  const navigate = useNavigate();
  const [onpush1, setOnpush1] = useState();
  const [onpush2, setOnpush2] = useState();
  const [addondata, setAddondata] = useState([{}]);
  const [categorydata, setCategorydata] = useState([{}]);
  const [formdata, setformdata] = useState({});
  const [addonformdata, setaddonformdata] = useState({
    addonname: "",
    addonprice: "",
  });
  const [categoryformdata, setcategoryformdata] = useState({
    categoryname: "",
  });
  //
  const [checked, setChecked] = useState([]);
  const [image, setImage] = useState(null);
  const [categoryimg, setcategoryimg] = useState(null);

  // image conversion bs64
  const handleImageSelect = (e) => {
    setImage(e.target.files[0]);
  };
  const handleCategoryImage = (e) => {
    setcategoryimg(e.target.files[0]);
  };
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    setformdata({ ...formdata, addons: updatedList });
  };
  // handle changes
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handlesubmit = () => {
    createNewDish(formdata, image, navigate);
  };
  const handleAddAddons = () => {
    if (addonformdata.addonname !== "" && addonformdata.addonprice !== "") {
      createNewaddon(addonformdata);
      const newaddons = fetchAddonData();
      setOnpush1(newaddons);
    } else {
      alert("Enter all the required filled");
    }
  };
  const handleCategory = () => {
    if (categoryformdata.categoryname !== "" || categoryimg !== null) {
      createNewCategory(categoryformdata, categoryimg);
      const newcategory = fetchCategoryData();
      setOnpush2(newcategory);
    } else {
      alert("Enter all the required filled");
    }
  };

  const fetchAddonData = async () => {
    const result = (await getaddon()) || [{}];
    setAddondata(result);
  };
  const fetchCategoryData = async () => {
    const result = (await getCategory()) || [{}];
    setCategorydata(result);
  };
  useEffect(() => {
    fetchAddonData();
    fetchCategoryData();
  }, [onpush1, onpush2]);
  return (
    <div className="EditDishes">
      <h3>Add New Dish</h3>
      <div className="EditDishes__inputs">
        <label htmlFor="Dname">Dish Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Eg : Panner Pizza "
          value={formdata.name}
          onChange={handlechange}
        />
      </div>

      <div className="EditDishes__inputs">
        <label htmlFor="Dname">Choose Dish Image: </label>
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageSelect}
        />
      </div>

      <div className="EditDishes__inputs">
        <label htmlFor="Dname">Choose Description: </label>
        <textarea
          name="description"
          value={formdata.description}
          onChange={handlechange}
        />
      </div>
      {/* veg or non veg */}
      <div className="EditDishes__inputs">
        <label> Type</label>
        <div>
          {type.map((item) => {
            return (
              <div className="EditDishes__addons" key={item.name}>
                <input
                  type="radio"
                  name="type"
                  value={item.name}
                  style={{ marginRight: "10px" }}
                  onChange={handlechange}
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
          {categorydata.map((item) => {
            return (
              <div className="EditDishes__addons" key={item._id}>
                <input
                  type="radio"
                  name="category"
                  style={{ marginRight: "10px" }}
                  value={item?._id}
                  onChange={handlechange}
                />
                <label>{item?.categoryname}</label>
              </div>
            );
          })}
        </div>

        {/* add new category */}
        <div></div>
        <div className="EditDishes__addons__inputs">
          <input
            name="categoryname"
            type="text"
            placeholder="Add new Category"
            onChange={(e) =>
              setcategoryformdata({
                ...categoryformdata,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            type="file"
            accept="image/*"
            name="categoryimage"
            id="CategoryImage"
            onChange={handleCategoryImage}
          />
          <button
            className="Admin__btn"
            style={{
              padding: "0.5rem 2rem",
            }}
            onClick={handleCategory}
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
              <div className="EditDishes__addons" key={item._id}>
                <input
                  type="checkbox"
                  name="addons"
                  value={item?._id}
                  onChange={handleCheck}
                />
                <label>
                  {item?.addonname} - {item?.addonprice}/-
                </label>
              </div>
            );
          })}
        </div>

        {/* add new addons */}
        <div></div>

        <div className="EditDishes__addons__inputs">
          <input
            type="text"
            placeholder="Add new Addons"
            name="addonname"
            onChange={(e) =>
              setaddonformdata({
                ...addonformdata,
                [e.target.name]: e.target.value,
              })
            }
          />
          <input
            type="number"
            placeholder="Price of addons"
            name="addonprice"
            onChange={(e) =>
              setaddonformdata({
                ...addonformdata,
                [e.target.name]: e.target.value,
              })
            }
          />
          <button
            className="Admin__btn"
            style={{
              padding: "0.5rem 2rem",
            }}
            onClick={handleAddAddons}
          >
            Add
          </button>
        </div>
      </div>
      {/* price */}
      <div className="EditDishes__inputs">
        <label htmlFor="Dname">Price: </label>
        <input
          type="number"
          name="price"
          value={formdata.price}
          onChange={handlechange}
          placeholder="Eg : 80,90"
        />
      </div>
      <div className="EditDishes__save">
        <button
          onClick={handlesubmit}
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

export default AddDishes;
