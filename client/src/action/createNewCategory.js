import * as api from "../api/index.js";
// import { AUTH } from "../constants/actionTypes";

export const createNewCategory = async (receviedData, image) => {
  try {
    const formData = new FormData();

    for (const key in receviedData) {
      formData.append(key, receviedData[key]);
    }
    formData.append("image", image);
    //login the users
    await api
      .createNewCategory(formData)
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
