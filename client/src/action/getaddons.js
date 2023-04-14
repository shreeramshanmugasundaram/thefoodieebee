import * as api from "../api/index.js";

export const getaddon = async (formData) => {
  try {
    const data = await api
      .getaddon()
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
