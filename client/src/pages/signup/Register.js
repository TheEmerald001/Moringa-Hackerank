import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import request from "../../Helpers/requestMethods";

export default function Register({ inputs, type }) {
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
        if (input.username) {
          const { data } = await request.post("/students/register", input);
          data && window.location.replace("/students/login");
        }
        if (input.work_id) {
          const { data } = await request.post("/mentors/register", input);
          data && window.location.replace("/mentors/login");
        }
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let link;

  switch (type) {
    case "student":
      link = "/students/login";
      break;
    case "mentor":
      link = "/mentors/login";
      break;
    default:
      break;
  }
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="header">Create Account</h1>
        <p>Fill in the form below</p>
        <form className="registerForm" onSubmit={handleSubmit}>
          {inputs?.map((input) => (
            <input
              key={input.id}
              type={input.type}
              name={input.name}
              onChange={handleChange}
              placeholder={input.placeholder}
            />
          ))}
          <input
            type="password"
            name="confirm_password"
            onChange={(event) => setConfirmPass(event.target.value)}
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
            <Link to={link} className="log">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
