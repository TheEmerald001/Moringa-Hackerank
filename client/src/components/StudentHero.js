import React from "react";
import styled from "styled-components";

const StudentHero = () => {
  return (
    <Container>
      <Left>
        <Title> Secure Your Career</Title>
        <Description>
          It's is the fastest, easiest, most addictive way to learn
        </Description>
      </Left>
      <Right>
        <Image
          src="https://www.codinggiants.com/images/illustrations/home-children.png"
          alt="heroImage"
        />
      </Right>
    </Container>
  );
};

export default StudentHero;

const Container = styled.main`
  display: flex;
  padding: 3.75rem;
  display: flex;
  align-items: center;
  color: #101f3c;
  height: 50vh;
`;

const Left = styled.section`
  flex: 1;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3.5rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  color: #ea501a;
`;

const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.5;
`;

const Right = styled.section`
  flex: 1;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
