import * as api from "../api/index.js";

export const getCategory = async (formData) => {
  try {
    const data = await api
      .getCategory()
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
