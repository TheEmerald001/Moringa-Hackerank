import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginMentor, loginStudent } from "../../redux/apiCall";
import axios from "axios";
import {
  loginMentorFailure,
  loginMentorStart,
  loginMentorSuccess,
} from "../../redux/mentorSlice";
import {
  loginStudentFailure,
  loginStudentStart,
  loginStudentSuccess,
} from "../../redux/studentSlice";

export default function Login({ inputs, type }) {
  const [input, setinput] = useState({});
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setinput({ ...input, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input.work_id) {
      setFetching(true);
      dispatch(loginMentorStart());
      try {
        setFetching(false);
        const { data } = await axios.post("/login", input);
        dispatch(loginMentorSuccess(data));
      } catch (error) {
        dispatch(loginMentorFailure());
        setError(true);
      }
    }
    if (input.username) {
      setFetching(true);
      dispatch(loginStudentStart());
      try {
        setFetching(false);
        const { data } = await axios.post("/login", input);
        dispatch(loginStudentSuccess(data));
      } catch (error) {
        dispatch(loginStudentFailure());
        setError(true);
      }
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
          <button disabled={isFetching} className="login-button">
            LOGIN
          </button>
          {error && (
            <span className="button-span">Wrong username or password</span>
          )}
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
