import React from "react";
import styled from "styled-components";
import StudentSideBar from "../components/StudentSideBar";

const StudentDashboard = () => {
  return (
    <Container>
      <StudentSideBar />
      <HomeContainer>Student Dashboard</HomeContainer>
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
