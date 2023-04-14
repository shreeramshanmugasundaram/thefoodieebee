import * as api from "../../api/index.js";

export const getCategory = async (formData) => {
  try {
    const data = await api
      .customerGetCategory(formData)
      .then((response) => {
        return response.data.finalDishesList;
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    return data;
  } catch (error) {
    console.log(error);
  }
};
