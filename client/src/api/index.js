import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("adminprofile")) {
    console.log("inside api insterceptors");
    console.log(localStorage.getItem("adminprofile").token);
    req.headers.authorization = JSON.parse(
      localStorage.getItem("adminprofile")
    ).token;
  }
  return req;
});

export const signin = (formData) => API.post("/sadmin/login", formData);
export const createKitchenUser = (formData) =>
  API.post("/sadmin/createkitchenuser", formData);
export const loginKitchenUser = (formData) =>
  API.post("/sadmin/loginkitchenuser", formData);

// create dishes, addons, category
export const createNewDish = (formData) =>
  API.post("/sadmin/createNewDish", formData);
export const createNewaddon = (formData) =>
  API.post("/sadmin/addaddons", formData);
export const createNewCategory = (formData) =>
  API.post("/sadmin/addcategory", formData);

// get addons,category
export const getaddon = () => API.get("/sadmin/addons");
export const getCategory = () => API.get("/sadmin/categories");
export const getDishes = () => API.get("/sadmin/dishes");
// delete dish
export const deleteDish = (formData) => API.post("sadmin/deletedish", formData);

// customer page api
export const customerGetDishes = () => API.get("/scustomer/dishes");
export const customerGetDish = (formData) =>
  API.post("/scustomer/dish", formData);
export const customerGetCategories = () => API.get("/scustomer/categories");
export const customerGetCategory = (formData) =>
  API.post("scustomer/category", formData);
export const customerGetDishVeg = (formData) =>
  API.post("scustomer/veg", formData);
export const customerGetSearch = (formData) =>
  API.post("scustomer/search", formData);
