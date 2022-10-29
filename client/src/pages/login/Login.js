import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCall";

export default function Login({ inputs }) {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(dispatch, data);
  };

  return (
    <div className="container">
      <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <h1 className="header">Welcome Back</h1>
          <p>Enter your details below</p>
          {inputs?.map((input) => (
            <input
              type={input.type}
              name={input.name}
              onChange={handleChange}
              placeholder={input.placeholder}
              className="input"
            />
          ))}
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
