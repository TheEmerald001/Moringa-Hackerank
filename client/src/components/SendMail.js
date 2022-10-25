import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { submitContactReqToServer } from "../redux/apiCall";

const SendMail = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitContactReqToServer(dispatch, inputs);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          onChange={handleChange}
          placeholder="Your Name"
          type="text"
        />

        <Input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          type="email"
        />
        <TextArea
          name="message"
          onChange={handleChange}
          placeholder="Message"
          type="text"
        />

        <Button>Send</Button>
      </Form>
    </Container>
  );
};

export default SendMail;

const Container = styled.main`
  color: #1e144f;
  background-color: #f6f7fb;
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid lightgray;
  margin: 1.25rem 10px 0 0;
  padding: 10px;
  outline: none;
`;
const TextArea = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid lightgray;
  margin: 1.25rem 10px 0 0;
  padding: 10px;
  outline: none;
`;

const Button = styled.button`
  width: 40%;
  background-color: #1896ff;
  color: #eff8ff;
  padding: 1rem 1.25rem;
  cursor: pointer;
  font-weight: 600;
  margin: 1rem 0;
  border: none;
  &:disabled {
    cursor: not-allowed;
    color: #007cda;
  }
`;
