import * as api from "../../api/index.js";

export const getDish = async (formData) => {
  try {
    const data = await api
      .customerGetDish(formData)
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
