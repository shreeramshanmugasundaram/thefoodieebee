import * as api from "../api/index.js";
// import { AUTH } from "../constants/actionTypes";

export const signin = async (formData, navigate) => {
  try {
    //login the users
    await api
      .signin(formData)
      .then((response) => {
        localStorage.setItem("adminprofile", JSON.stringify(response.data));
        navigate("/admin");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
