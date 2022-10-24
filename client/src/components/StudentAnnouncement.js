import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import styled from "styled-components";

const StudentAnnouncement = () => {
  return (
    <Container>
      <Left>
        <Title position="first">Continuously build your skills with</Title>
        <Title position="last">Moringa Hackerank</Title>
        <Description>
          Whether you want to improve your problem solving skills, master a new
          skill, or build expertise in the mission-critical topics you need for
          career advancement, Moringa hackerank helps you secure your career.
        </Description>
      </Left>
      <Right>
        <LinkContainer>
          <Link>
            Try Now{" "}
            <ArrowForwardIosIcon
              style={{ color: "#ea501a", fontSize: "0.875rem" }}
            />
          </Link>
        </LinkContainer>
      </Right>
    </Container>
  );
};

export default StudentAnnouncement;

const Container = styled.main`
  display: flex;
  padding: 1rem 3.75rem;
  display: flex;
  align-items: center;
  background-color: #101f3c;
  color: #fff;
  height: 50vh;
`;

const Left = styled.section`
  flex: 1;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.position === "last" && "#ea501a"};
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const Right = styled.section`
  flex: 1;
`;

const LinkContainer = styled.article`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Link = styled.span`
  font-size: 0.875rem;
  border-bottom: 1px solid #ea501a;
  width: max-content;
`;

