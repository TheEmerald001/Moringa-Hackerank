import React from "react";
import styled from "styled-components";
import StudentHero from "../components/StudentHero";
import StudentSideBar from "../components/StudentSideBar";

const StudentDashboard = () => {
  return (
    <Container>
      <StudentSideBar />
      <HomeContainer>
        <StudentHero />
      </HomeContainer>
    </Container>
  );
};

export default StudentDashboard;

const Container = styled.main`
  display: flex;
  color: #1e144f;
  background-color: #f6f7fb;
`;

const HomeContainer = styled.section`
  flex: 8;
`;
