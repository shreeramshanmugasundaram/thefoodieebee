import * as api from "../api/index.js";
export const createNewDish = async (receviedData, image, navigate) => {
  try {
    const formData = new FormData();

    for (const key in receviedData) {
      formData.append(key, receviedData[key]);
    }
    formData.append("image", image);
    //login the users
    await api
      .createNewDish(formData)
      .then((response) => {
        alert(response.data.message);
        navigate("/admin/dishes");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
