import React from "react";
import './login.css'
import { Link } from "react-router-dom";
import Hackerank from '../../assests/images/hackerlogo.png'

export default function login(){
  return(
    <div className="container">
      <img src={Hackerank} alt="moringa logo" width={150}   />
      <form>
        <h1 className="header">Welcome Back</h1>
        <p>Enter your details below</p>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            {/* <label>Work Id</label> */}
            <input type='text' name="work id" placeholder="work id" className="f1"/>
          </div>
          <div className="field">
            {/* <label>Password</label> */}
            <input type='text' name="password" placeholder="password" className="f1"/>
          </div>
          <button className="fluid ui button blue">Login</button>
          <p className="mt-2">
              Dont have an account? <Link to="/register" className="log">SignUp</Link>
          </p>
        </div>
      </form>
    </div>
  )
}
