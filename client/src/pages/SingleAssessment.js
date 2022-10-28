import React, { useState } from "react";
import styled from "styled-components";
import SingleAssessmentSidebar from "../components/SingleAssessmentSidebar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SingleAssessment = () => {
  const [isQuizExpanded, setQuizExpanded] = useState(false);
  function expand() {
    setQuizExpanded((isQuizExpanded) => !isQuizExpanded);
  }
  return (
    <Container>
      <SingleAssessmentSidebar />
      <AssessmentContainer>
        <Top>
          <AssessmentInfo>
            <AssessmentTitle>Assessment One</AssessmentTitle>
            <AssessmentDuedate>12 feb 2022</AssessmentDuedate>
          </AssessmentInfo>
        </Top>
        <Bottom>
          <TaskContainer>
            <Task onClick={expand}>
              <ArrowForwardIosIcon
                on
                style={{ color: "#ea501a", fontSize: "0.875rem" }}
              />
              <Title>Questions</Title>
            </Task>
            {isQuizExpanded && (
              <QuestionContainer>
                <Question>
                  <Prompt>What does CSS stand for?</Prompt>
                  <Answer>"Computer Style Sheets",</Answer>
                  <Answer>Creative Style Sheets",</Answer>
                  <Answer>Colorful Style Sheets,</Answer>
                  <Answer>Cascading Style Sheets,</Answer>
                </Question>
                <Question>
                  <Prompt>What does CSS stand for?</Prompt>
                  <Answer>"Computer Style Sheets",</Answer>
                  <Answer>Creative Style Sheets",</Answer>
                  <Answer>Colorful Style Sheets,</Answer>
                  <Answer>Cascading Style Sheets,</Answer>
                </Question>
                <Question>
                  <Prompt>What does CSS stand for?</Prompt>
                  <Answer>"Computer Style Sheets",</Answer>
                  <Answer>Creative Style Sheets",</Answer>
                  <Answer>Colorful Style Sheets,</Answer>
                  <Answer>Cascading Style Sheets,</Answer>
                </Question>
                <Question>
                  <Prompt>What does CSS stand for?</Prompt>
                  <Answer>"Computer Style Sheets",</Answer>
                  <Answer>Creative Style Sheets",</Answer>
                  <Answer>Colorful Style Sheets,</Answer>
                  <Answer>Cascading Style Sheets,</Answer>
                </Question>
                <Question>
                  <Prompt>What does CSS stand for?</Prompt>
                  <Answer>"Computer Style Sheets",</Answer>
                  <Answer>Creative Style Sheets",</Answer>
                  <Answer>Colorful Style Sheets,</Answer>
                  <Answer>Cascading Style Sheets,</Answer>
                </Question>
              </QuestionContainer>
            )}
          </TaskContainer>
          <TaskContainer>
            <Task>
              <ArrowForwardIosIcon
                style={{ color: "#ea501a", fontSize: "0.875rem" }}
              />
              <Title>Katas</Title>
            </Task>
          </TaskContainer>
          <TaskContainer>
            <Task>
              <ArrowForwardIosIcon
                style={{ color: "#ea501a", fontSize: "0.875rem" }}
              />
              <Title>Prose</Title>
            </Task>
          </TaskContainer>
        </Bottom>
      </AssessmentContainer>
    </Container>
  );
};

export default SingleAssessment;

const Container = styled.main`
  display: flex;
  position: relative;
`;

const AssessmentContainer = styled.section`
  flex: 6;
`;

const Top = styled.article``;
const Bottom = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AssessmentTitle = styled.article``;

const AssessmentInfo = styled.article`
  padding: 1.25rem;
  margin: 1.25rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
`;

const AssessmentDuedate = styled.article``;

const TaskContainer = styled.section``;

const Task = styled.article`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  gap: 5px;
  cursor: pointer;
  padding: 0.8rem;
  margin: 1.25rem;
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #101f3c;
`;

const QuestionContainer = styled.article``;
const Question = styled.article`
  border: 0.5px solid lightgray;
  padding: 0.8rem;
  margin: 1.25rem;
`;

const Prompt = styled.h3`
  background-color: #lightgray;
  padding: 0.8rem;
  margin: 0.25rem;
  color: gray;
  cursor: pointer;
`;

const Answer = styled.article`
  background-color: #f5f5f5;
  padding: 0.8rem;
  margin: 0.25rem;
  cursor: pointer;
  color: gray;
`;
