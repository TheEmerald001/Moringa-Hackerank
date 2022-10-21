import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="header">Create Account</h1>
        <p>Fill in the form below</p>
        <form>
          <input type="text" name="first_name" placeholder="First Name" />

          <input type="text" name="last_name" placeholder="Last Name" />
          <input type="text" name="username" placeholder="Username" />

          <input type="text" name="email" placeholder="Email" />

          <input type="text" name="password" placeholder="Password" />

          <input
            type="text"
            name="confirm password"
            placeholder="confirm password"
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
