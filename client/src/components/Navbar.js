import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MoringaLogo from "../assests/images/hackerlogo.png";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <NavLink to="/">
            <Logo src={MoringaLogo} alt="logo" />
          </NavLink>
        </Left>
        <Right>
          <div>
            <span>LOGIN</span>
            <ul>
              <NavLink to="/mentors/login">
                <li>Login as TM</li>
              </NavLink>
              <NavLink to="/students/login">
                <li>Login as Student</li>
              </NavLink>
            </ul>
          </div>
          <div>
            <span>REGISTER</span>
            <ul>
              <NavLink to="/mentors/register">
                <li>Register as TM</li>
              </NavLink>
              <NavLink to="/students/register">
                <li>Register as Student</li>
              </NavLink>
            </ul>
          </div>
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
  div{
    margin-right:3em;
    postion:relative;
    cursor:pointer;
    &:hover{
      ul{
        display:block
      }
    }
    span{
      font-size: 1.1em;
      
      
    }

    ul{
      
      display:none;
      position:absolute;
      min-width:100px;
      z-index:2;
      background-color: #f5f5f5;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      &:first-child{
        padding-top:8px;
      }
      li{
        
        padding: 10px 16px;
        cursor:pointer;
        min-width:100px;
        display:block;
        &:hover{
          background-color: white;
          color:#EA501A;
          transform: scale(1.1 1.5s ease)
          font-weight: 700;
        }
      }
    }
  }
`;

const Button = styled.a`
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
