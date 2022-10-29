import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import MoringaImage from "../assests/images/hackerank.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Left>
          <Title>Achieve Mastery Through Challenge</Title>
          <Into>
            Improve your development skills by training with your peers on
            assessments that include code kata, quizzes and prose that
            continuously challenge and push your coding practice
          </Into>
          <LoginContainer>
            <MentorLogin>
              <LoginTitle>For Mentors</LoginTitle>
              <LoginText>Create and grade assessments for students</LoginText>
              <Link to="/mentors/login">
                <Button position="first">LOGIN AS MENTOR</Button>
              </Link>
            </MentorLogin>
            <StudentLogin>
              <LoginTitle>For Students</LoginTitle>
              <LoginText>Take assessments and get reviewed</LoginText>
              <Link to="/students/login">
                <Button position="last">LOGIN AS STUDENT</Button>
              </Link>
            </StudentLogin>
          </LoginContainer>
        </Left>
        <Right>
          <Image src={MoringaImage} alt="homeImage" />
        </Right>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  color: #101f3c;
  min-height: 100vh;
`;

const Wrapper = styled.section`
  padding: 3.75rem;
  display: flex;
  align-items: center;
`;

const Left = styled.article`
  flex: 1;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3.5rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  color: #ea501a;
`;

const Into = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const LoginContainer = styled.article`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const MentorLogin = styled.article``;

const StudentLogin = styled.article``;

const LoginTitle = styled.h3`
  margin-bottom: 2rem;
`;

const LoginText = styled.p`
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem;
  width: 70%;
  font-weight: 600;
  font-size: 1rem;
  color: gray;
  border: none;
  color: ${(props) => (props.position === "first" ? "#ea501a" : "white")};
  border: ${(props) => props.position === "first" && "2px solid #ea501a"};
  cursor: pointer;
  background-color: ${(props) =>
    props.position === "first" ? "transparent" : "#101f3c"};
`;

const Right = styled.section`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
