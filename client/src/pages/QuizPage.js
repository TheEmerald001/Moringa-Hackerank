import React, { useState } from "react";
import styled from "styled-components";
import Question from "../components/Question";
import StudentSideBar from "../components/StudentSideBar";
import quiz from "../Helpers/quiz";

function QuizPage() {
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [score, setScore] = useState(0);
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  const handleQuestionAnswered = (correct) => {
    if (currentQuestionId < questions.length) {
      setCurrentQuestionId((currentQuestionId) => currentQuestionId + 1);
    } else {
      setCurrentQuestionId(null);
    }
    if (correct) {
      setScore((score) => score + 1);
    }
  };

  return (
    <Container>
      <StudentSideBar />
      <QuizContainer>
        {currentQuestion ? (
          <Question
            question={currentQuestion}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <>
            <h1>Game Over</h1>
            <h2>Total Correct: {score}</h2>
          </>
        )}
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
