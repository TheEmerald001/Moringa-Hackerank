import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../assests/images/logo.png";

const SingleAssessmentSidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Link to="/">
            <Logo src={image} alt="logo" />
          </Link>
        </Top>
        <Center></Center>
        <Bottom></Bottom>
      </Wrapper>
    </Container>
  );
};

export default SingleAssessmentSidebar;

const Container = styled.main`
  width: 10vw;
  background-color: #101f3c;
  border-right: 0.5px solid rgb(230, 227, 227);
  height: 100vh;
  color: #fff;
  // position: fixed;
  padding: 3.75rem;
`;

const Wrapper = styled.section`
  width: 100%;
`;
const Logo = styled.img`
  width: 12.5rem;
`;
const Top = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.section``;

const List = styled.ul``;

const Item = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 5px;
  &:hover {
    background-color: #202e49;
  }
`;

const ItemSpan = styled.span`
  font-size: 13px;
  font-weight: 600;
  margin-left: 10px;
`;

const Bottom = styled.section`
  padding: 0.625rem;
  position: absolute;
  bottom: 0;
`;
