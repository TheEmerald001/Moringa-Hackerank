import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Question = ({ question, onAnswered }) => {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const { id, prompt, answers, correctIndex } = question;

  useEffect(() => {
    const timerId = setTimeout(
      () => setTimeRemaining((timeRemaining) => timeRemaining - 1),
      1000
    );
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }

    return () => clearTimeout(timerId);
  }, [timeRemaining]);

  const handleAnswer = (isCorrect) => {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  };

  return (
    <Container>
      <Top>
        <TopWrapper>
          <Text>Skill Assessment: JavaScript</Text>
          <Text>{timeRemaining} Questions Remaining</Text>
        </TopWrapper>
      </Top>
      <Bottom>
        <Prompt>{prompt}</Prompt>
        {answers.map((answer, index) => {
          const isCorrect = index === correctIndex;
          return (
            <Answer key={answer} onClick={() => handleAnswer(isCorrect)}>
              {answer}
            </Answer>
          );
        })}
      </Bottom>
    </Container>
  );
};

export default Question;

const Container = styled.main`
  width: 50rem;
  margin: auto;
  border-radius: 5px;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
`;

const Top = styled.section`
  padding: 1.25rem;
  background-color: #f5f5f5;
`;

const Text = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: gray;
`;

const TopWrapper = styled.article`
  display: flex;
  gap: 4rem;
`;

const Bottom = styled.section`
  padding: 1.25rem;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Prompt = styled.h3`
  background-color: #f5f5f5;
  padding: 0.7rem;
  color: gray;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: lightgray;
  }
`;

const Answer = styled.article`
  background-color: #f5f5f5;
  padding: 0.7rem;
  cursor: pointer;
  color: gray;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  &:hover {
    background-color: lightgray;
  }
`;
