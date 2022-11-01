import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginMentor, loginStudent } from "../../redux/apiCall";
import axios from "axios";
import { loginMentorSuccess } from "../../redux/mentorSlice";
import { loginStudentSuccess } from "../../redux/studentSlice";

export default function Login({ inputs, type }) {
  const [input, setinput] = useState({});
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setinput({ ...input, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input.work_id) {
      try {
        const { data } = await axios.post("/login", input);
        // setupLogin(input?.token);
        dispatch(loginMentorSuccess(data));
      } catch (error) {
        // dispatch(loginMentorFailure());
        // logoutFunc();
        console.log(error);
      }
      // loginMentor(dispatch, input);
      // // window.location.replace("/mentors");
    }
    if (input.username) {
      try {
        const { data } = await axios.post("/login", input);
        // setupLogin(input?.token);
        dispatch(loginStudentSuccess(data));
      } catch (error) {
        // dispatch(loginMentorFailure());
        // logoutFunc();
        console.log(error);
      }
      // loginStudent(dispatch, input);
      // // window.location.replace("/students");
    }
  };

  let link;

  switch (type) {
    case "student":
      link = "/students/register";
      break;
    case "mentor":
      link = "/mentors/register";
      break;
    default:
      break;
  }

  return (
    <div className="container">
      <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <h1 className="header">Welcome Back</h1>
          <p>Enter your details below</p>
          {inputs?.map((input) => (
            <input
              key={input.id}
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
            <Link to={link} className="log">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
