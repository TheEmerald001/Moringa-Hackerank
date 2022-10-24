import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container">
      <div className="login-wrapper">
        <form>
          <h1 className="header">Welcome Back</h1>
          <p>Enter your details below</p>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input"
          />
          <input
            type="text"
            name="work id"
            placeholder="work id"
            className="input"
          />

          <input
            type="text"
            name="password"
            placeholder="password"
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
