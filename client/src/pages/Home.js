import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import MoringaImage from "../assests/images/hackerank.png";
import Footer from "../components/Footer";

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
              <Button position="first">Login</Button>
            </MentorLogin>
            <StudentLogin>
              <LoginTitle>For Students</LoginTitle>
              <LoginText>Take assessments and get reviewed</LoginText>
              <Button position="last">Login</Button>
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
  font-size: 5.3rem;
  letter-spacing: 1px;
  margin-bottom: 2rem;
  color: #ea501a;
`;

const Into = styled.p`
  font-size: 2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
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
  font-weight: 600;
  font-size: 1rem;
  color: gray;
  border: none;
  color: ${(props) => (props.position === "first" ? "#ea501a" : "#101f3c")};
  border: ${(props) =>
    props.position === "first" ? "2px solid #ea501a" : "2px solid #101f3c"};
  cursor: pointer;
  background-color: transparent;
`;

const Right = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
