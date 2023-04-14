import * as api from "../api/index.js";
// import { AUTH } from "../constants/actionTypes";

export const createKitchenUser = async (formData) => {
  try {
    //login the users
    await api
      .createKitchenUser(formData)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
