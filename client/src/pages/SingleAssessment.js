import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { shuffleAnswers } from "../Helpers/shuffleAnswers";
import axios from "axios";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SingleAssessment = () => {
  const location = useLocation();
  const assessmentId = location.pathname.split("/")[3];
  const [isQuizExpanded, setQuizExpanded] = useState(false);
  const [isKataExpanded, setKataExpanded] = useState(false);
  const [isProseExpanded, setProseExpanded] = useState(false);
  const [assessment, setAssessment] = useState({});

  useEffect(() => {
    const getAssessment = async () => {
      const { data } = await axios.get(`/assessments/${assessmentId}`);
      setAssessment(data);
    };
    getAssessment();
  }, [assessmentId]);

  const expand = () => {
    setQuizExpanded((isQuizExpanded) => !isQuizExpanded);
  };

  return (
    <Container>
      <Sidebar />
      <AssessmentContainer>
        <Top>
          <AssessmentInfo>
            <AssessmentTitle>{assessment?.assessment_title}</AssessmentTitle>
            <AssessmentDuedate>{assessment?.duedate}</AssessmentDuedate>
          </AssessmentInfo>
        </Top>
        <Bottom>
          <TaskContainer>
            <Task onClick={expand}>
              {isQuizExpanded ? (
                <KeyboardArrowDownIcon
                  style={{ color: "#ea501a", fontSize: "1.5rem" }}
                />
              ) : (
                <ArrowForwardIosIcon
                  style={{ color: "#ea501a", fontSize: "0.875rem" }}
                />
              )}

              <Title>Questions</Title>
            </Task>
            {isQuizExpanded && (
              <QuestionContainer>
                {assessment?.mcqs?.map((question) => {
                  const answers = shuffleAnswers(question);
                  return (
                    <Question>
                      <Prompt>{question.question}</Prompt>
                      {answers.map((answer) => (
                        <Answer>{answer}</Answer>
                      ))}
                    </Question>
                  );
                })}
              </QuestionContainer>
            )}
          </TaskContainer>
          <TaskContainer>
            <Task
              onClick={() =>
                setKataExpanded((isKataExpanded) => !isKataExpanded)
              }
            >
              {isKataExpanded ? (
                <KeyboardArrowDownIcon
                  style={{ color: "#ea501a", fontSize: "1.5rem" }}
                />
              ) : (
                <ArrowForwardIosIcon
                  style={{ color: "#ea501a", fontSize: "0.875rem" }}
                />
              )}
              <Title>Katas</Title>
            </Task>
            {isKataExpanded && (
              <QuestionContainer>
                {assessment?.kataas?.map((kata) => {
                  return (
                    <Question>
                      <Prompt>{kata.question}</Prompt>
                    </Question>
                  );
                })}
              </QuestionContainer>
            )}
          </TaskContainer>
          <TaskContainer>
            <Task
              onClick={() =>
                setProseExpanded((isProseExpanded) => !isProseExpanded)
              }
            >
              {isProseExpanded ? (
                <KeyboardArrowDownIcon
                  style={{ color: "#ea501a", fontSize: "1.5rem" }}
                />
              ) : (
                <ArrowForwardIosIcon
                  style={{ color: "#ea501a", fontSize: "0.875rem" }}
                />
              )}
              <Title>Prose</Title>
            </Task>
            {isProseExpanded && (
              <QuestionContainer>
                {assessment?.pros?.map((pro) => {
                  return (
                    <Question>
                      <Prompt>{pro.question}</Prompt>
                    </Question>
                  );
                })}
              </QuestionContainer>
            )}
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
  flex: 8;
  min-height: 100vh;
  margin: 0 auto;
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
