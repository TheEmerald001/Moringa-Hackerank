import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Answer from "./answer/Answer";
import { selectedAnswer } from "../redux/quizSlice";

const Question = () => {
  const { questions, currentQuestionIndex, answers, currentAnswer } =
    useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Container>
      <Top>
        <TopWrapper>
          <Text>Skill Assessment: JavaScript</Text>
          <Text>
            You are at Question {currentQuestionIndex + 1}/{questions.length}
          </Text>
        </TopWrapper>
      </Top>
      <Bottom>
        <Prompt>{currentQuestion?.question}</Prompt>
        {answers?.map((answer, index) => (
          <Answer
            key={index}
            answerText={answer}
            currentAnswer={currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            index={index}
            onSelectedAnswer={(answerText) =>
              dispatch(selectedAnswer(answerText))
            }
          />
        ))}
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
