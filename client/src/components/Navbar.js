import React from "react";
import styled from "styled-components";
import MoringaLogo from "../assests/images/H-logo.png";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={MoringaLogo} alt="logo" />
        </Left>
        <Right>
          <Button>Login</Button>
          <Button>Register</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.main`
  height: 5rem;
  border-bottom: 0.5px solid rgb(230, 227, 227);
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  box-sizing: border-box;
`;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
`;

const Left = styled.article``;

const Logo = styled.img`
  width: 10.5rem;
`;

const Right = styled.article`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const Button = styled.button`
  padding: 10px 1rem;
  font-weight: 600;
  color: gray;
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:first-child {
  }
  &:last-child {
    border: 1px solid lightgray;
    border-radius: 2px;
  }
`;
