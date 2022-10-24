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

          <div>
          <input type="text" name="first_name" placeholder="First Name" />
          </div>

          <div>
          <input type="text" name="last_name" placeholder="Last Name" />
          </div>

          <div>
          <input type="text" name="username" placeholder="Username" />
          </div>

          <div>
          <input type="text" name="email" placeholder="Email" />
          </div>

          <div>
          <input type="text" name="password" placeholder="Password" />
          </div>

          <div>
          <input
            type="text"
            name="confirm password"
            placeholder="Confirm password"
          />
          </div>

          <br />
          <span>
            {" "}
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          
          <div>
            <br/>
          <button1 className="fluid-ui-button-blue">CREATE</button1>
          </div>
          <br /> 
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
