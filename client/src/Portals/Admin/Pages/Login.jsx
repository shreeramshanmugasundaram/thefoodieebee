import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

import Image_url from "../Images/adminbg.jpg";
import { signin } from "../../../action/adminAuth";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Intergation of login requeried based on staff / admin / Kitchen portal
    signin(formData, navigate);
  };

  return (
    <div
      className="Login__wrapper"
      style={{ backgroundImage: `url(${Image_url})` }}
    >
      <form onSubmit={handleLogin}>
        <br />
        <div className="Login__title">Login</div>
        <div className="Login__input">
          <label htmlFor="Username">Username</label>
          <input
            id="Username"
            type="text"
            onChange={handleChange}
            name="username"
            placeholder="Type your Employee ID"
          />
        </div>

        <div className="Login__input">
          <label htmlFor="Passwrod">Password</label>
          <input
            id="Password"
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Type your Password"
          />
        </div>

        <button type="submit">Login</button>

        <div className="Login__info">
          <h3>Caravan Delight</h3>
          <p>Admin Portal </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
