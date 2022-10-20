import React from "react";
import './signup.css'
import { Link } from "react-router-dom";
import Hackerank from '../../assests/images/hackerlogo.png'

export default function login(){
  return(
    <div className="container">
        <img src={Hackerank} alt="moringa logo" width={150}   />
      <form>
        <h1 className="header">Create Account</h1>
        <p>Fill in the form below</p>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            {/* <label>First name</label> */}
            <input type='text' name='first name' placeholder="first name" className="f1"/>
          </div>
          <div className="field">
            {/* <label>Last name</label> */}
            <input type='text' name="last name" placeholder="last name" className="f1"/>
          </div>
          <div className="field">
            {/* <label>Email</label> */}
            <input type='text' name="email" placeholder="email" className="f1"/>
          </div>
          <div className="field">
            {/* <label>Password</label> */}
            <input type='text' name="password" placeholder="password" className="f1"/>
          </div>
          <div className="field">
            {/* <label>Confirm Password</label> */}
            <input type='text' name="confirm password" placeholder="confirm password" className="f1"/>
          </div>
      
          <button className="fluid ui button blue">Submit</button>
          <p className="mt-2">
                Have an account? <Link to="/login" className="log">Login</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

