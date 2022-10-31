import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register({ inputs }) {
  const [input, setInput] = useState({});
  const [confirmPassword, setConfirmPass] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);

    try {
      if (input.password === confirmPassword) {
        const { data } = await request.post("/register", input);
        data && window.location.replace("/login");
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="header">Create Account</h1>
        <p>Fill in the form below</p>
        <form className="registerForm" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            name="first_name"
            placeholder="First Name"
          />

          <input
            type="text"
            onChange={handleChange}
            name="last_name"
            placeholder="Last Name"
          />
          <input
            type="text"
            onChange={handleChange}
            name="username"
            placeholder="Username"
          />

          <input
            type="text"
            onChange={handleChange}
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Password"
          />

          <input
            type="password"
            onChange={(event) => setConfirmPass(event.target.value)}
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <span>
            {" "}
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="fluid ui button blue">CREATE</button>
          <span className="mt-2">
            Have an account?{" "}
            <Link to="/login" className="log">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
