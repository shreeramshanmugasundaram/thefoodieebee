import * as api from "../../api/index.js";

export const getDishes = async (formData) => {
  try {
    const data = await api
      .customerGetDishes()
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    return data;
  } catch (error) {
    console.log(error);
  }
};
