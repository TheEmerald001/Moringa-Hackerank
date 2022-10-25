import React from "react";
import { useState } from "react";
import styled from "styled-components";

const StudentLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Wrapper>
        <Title>Welcome Back</Title>
        <p>Enter your details below</p>
        <Form>
          <Input
            placeholder="Username"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button onClick={handleClick}>LOGIN</Button>
          <Link>DO NOT REMEMBER PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default StudentLogin;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(16, 31, 60, 0.5), rgba(16, 31, 60, 0.5)),
    url("https://blog.hackerrank.com/wp-content/uploads/HackerRank_RemoteHiringUpdates.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  color: #0a1f4e;
  background: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;

const Input = styled.input`
  flex: 1;
  border: 1px solid #0a1f4e;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  background: #ea501a;
  width: 40%;
  color: white;
  padding: 15px 20px;
  cursor: pointer;
  border: none;
  margin-bottom: 10px;
  &:disabled {
    cursor: not-allowed;
    color: green;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;
