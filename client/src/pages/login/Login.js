import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCall";

export default function Login() {
  const [inputs, setInputs] = useState({
    work_id: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(dispatch, inputs);
  };
  return (
    <div className="container">
      <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <h1 className="header">Welcome Back</h1>
          <p>Enter your details below</p>

          <input
            type="text"
            name="work_id"
            onChange={handleChange}
            placeholder="Work Id"
            className="input"
          />

          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="input"
          />

          <button className="login-button">LOGIN</button>
          <p className="mt-2">
            Dont have an account?{" "}
            <Link to="/register" className="log">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
