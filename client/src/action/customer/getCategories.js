import * as api from "../../api/index.js";

export const getCategories = async (formData) => {
  try {
    const data = await api
      .customerGetCategories()
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
