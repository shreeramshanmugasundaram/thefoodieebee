import * as api from "../api/index.js";

export const createNewaddon = async (formData) => {
  try {
    const data = await api
      .createNewaddon(formData)
      .then((response) => {
        alert(response.data.message);
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
