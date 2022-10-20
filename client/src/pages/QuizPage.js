import React from "react";
import styled from "styled-components";
import Question from "../components/Question";
import StudentSideBar from "../components/StudentSideBar";

function QuizPage() {
  return (
    <Container>
      <StudentSideBar />
      <QuizContainer>
        <Question />
      </QuizContainer>
    </Container>
  );
}

export default QuizPage;

const Container = styled.main`
  display: flex;
  color: #101f3c;
`;

const QuizContainer = styled.section`
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: center;
`;
