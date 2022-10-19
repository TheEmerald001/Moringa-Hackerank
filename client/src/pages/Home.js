import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import MoringaImage from "../assests/images/hackerank.png";

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
          <Button> Sign up & code</Button>
        </Left>
        <Right>
          <Image src={MoringaImage} alt="homeImage" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.main``;

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
  color: #101f3c;
  font-size: 2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem;
  font-weight: 600;
  font-size: 1rem;
  color: gray;
  border: none;
  color: #ea501a;
  border: 2px solid #ea501a;
  cursor: pointer;
  background-color: transparent;
`;

const Right = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
