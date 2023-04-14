import * as api from "../api/index.js";
// import { AUTH } from "../constants/actionTypes";

export const signin = async (formData, navigate) => {
  try {
    //login the users
    await api
      .loginKitchenUser(formData)
      .then((response) => {
        localStorage.setItem("kitchenprofile", JSON.stringify(response.data));
        navigate("/kitchen");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
