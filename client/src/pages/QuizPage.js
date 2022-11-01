import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Question from "../components/Question";
import StudentSideBar from "../components/StudentSideBar";
import { nextQuestion, restart } from "../redux/quizSlice";

function QuizPage() {
  const { questions, correctAnswerCount, showResults } = useSelector(
    (state) => state.quiz
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <StudentSideBar />
      <QuizContainer>
        {showResults && (
          <Results>
            <Message>Congratuations!</Message>
            <Grade>
              <Text>You have completed the quizz</Text>
              <Text>
                You've got {correctAnswerCount} of {questions.length} correct.
              </Text>
              <Retake onClick={() => dispatch(restart())}>Retake</Retake>
            </Grade>
          </Results>
        )}
        {!showResults && (
          <QuizWrapper>
            <Question />
            <NextButton onClick={() => dispatch(nextQuestion())}>
              Next Question
            </NextButton>
          </QuizWrapper>
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
  flex: 7;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const QuizWrapper = styled.section``;

const NextButton = styled.article`
  margin: 1rem auto;
  color: #fff;
  background-color: #101f3c;
  width: 300px;
  font-size: 18px;
  font-weight: 600;
  padding: 14px 75px;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
`;

const Results = styled.article`
  background-color: #fff;
  height: 300px;
  text-align: center;
`;
const Message = styled.article`
  background-color: #101f3c;
  padding: 20px;
  font-size: 36px;
  color: #fff;
`;
const Grade = styled.article`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
`;
const Text = styled.article``;

const Retake = styled.article`
  margin: 1rem auto;
  color: #fff;
  background-color: #101f3c;
  font-size: 18px;
  font-weight: 600;
  padding: 1rem 2rem;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
`;
