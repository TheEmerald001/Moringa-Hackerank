import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container">
      <div className="wrapper">
        <form>
          <h1 className="header">Welcome Back</h1>
          <p1>Enter your details below</p1>
          <div className='btn-fields'>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input"
          />
          </div>
          
          <div className='btn-fields'>
          <input
            type="text"
            name="work id"
            placeholder="Work id"
            className="input"
          />
          </div>
          
          <div className='btn-fields'>
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="input"
          />
          </div>
         
         <br/>
            <btn className='btn-field'>LOGIN</btn>
          <br/>
          <br />
          <p className="mt-2">
            Don't have an account?{" "}
            <Link to="/register" className="log">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
