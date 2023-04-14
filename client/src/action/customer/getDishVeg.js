import * as api from "../../api/index.js";

export const getDishVeg = async (formData) => {
  try {
    const data = await api
      .customerGetDishVeg(formData)
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
