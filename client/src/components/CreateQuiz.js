import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import request from "../Helpers/requestMethods";

import Sidebar from "./Sidebar";

const CreateQuiz = () => {
  const [correctAnswer, setCorrectAnswer] = useState("");
  const location = useLocation();
  const assessmentId = location.pathname.split("/")[3];
  const assessment = useSelector((state) =>
    state.assessment?.assessments.find(
      (assessment) => assessment.id == assessmentId
    )
  );
  const [formData, setFormData] = useState({
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    time: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let quizData = {
      question: formData.question,
      answers: [formData.answer1, formData.answer2, formData.answer3],
      correct_answer: correctAnswer,
      time_limit: formData.time,
      assessment_id: assessmentId,
    };
    try {
      const { data } = await request.post("/quizzes", quizData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Top>
          <Title>Add New Quiz</Title>
          <AssessmentContainer>
            <AssessmentTitle>{assessment.title}</AssessmentTitle>
            <AssessmentDuedate>{assessment.duedate}</AssessmentDuedate>
          </AssessmentContainer>
        </Top>

        <Bottom>
          <BottomForm onSubmit={handleSubmit}>
            <FormInput>
              <Label htmlFor="question">Question</Label>
              <Input
                id="question"
                type="text"
                name="question"
                onChange={handleChange}
                placeholder="Question"
              />
            </FormInput>
            <FormInput>
              <Label htmlFor="answer1">Asnwer 1</Label>
              <Input
                id="answer1"
                type="text"
                name="answer1"
                onChange={handleChange}
                placeholder="Answer One"
              />
            </FormInput>
            <FormInput>
              <Label htmlFor="answer2">Answer 2</Label>
              <Input
                id="answer2"
                type="text"
                name="answer2"
                onChange={handleChange}
                placeholder="Answer Two"
              />
            </FormInput>
            <FormInput>
              <Label htmlFor="answer3">Answer 3</Label>
              <Input
                id="answer3"
                type="text"
                name="answer3"
                onChange={handleChange}
                placeholder="Answer Three"
              />
            </FormInput>
            <FormInput>
              <Label htmlFor="correct">Correct Answer</Label>
              <Input
                id="correct"
                type="text"
                name="correct"
                onChange={(e) => setCorrectAnswer(e.target.value)}
                placeholder="Correct Answer"
              />
            </FormInput>
            <FormInput>
              <Label htmlFor="time">Time Limit</Label>
              <Input
                id="time"
                type="number"
                name="time"
                onChange={handleChange}
                placeholder="Time Limit"
              />
            </FormInput>

            <Button>Submit</Button>
          </BottomForm>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default CreateQuiz;

const Container = styled.main`
  display: flex;
`;

const Wrapper = styled.section`
  flex: 8;
  box-sizing: border-box;
`;

const Top = styled.section`
  padding: 1.25rem;
  margin: 1.25rem;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-sizing: border-box;
`;

const Title = styled.h1`
  color: gray;
  font-size: 1.25rem;
`;

const Bottom = styled.section`
  padding: 1.25rem;
  margin: 1.25rem;
  display: flex;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
`;

const AssessmentContainer = styled.article`
  display: flex;
  align-items: center;
  margin: 1.25rem 0;
  width: 40%;
  justify-content: space-between;
`;
const AssessmentTitle = styled.article``;
const AssessmentDuedate = styled.article``;

const BottomForm = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1.875rem;
  justify-content: space-around;
`;

const FormInput = styled.article`
  flex: 1;
`;

const Label = styled.label`
  display: flex;
  align-item: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 10px 0;
  outline: none;
  border-bottom: 1px solid lightgray;
`;

const Button = styled.button`
  width: 9.375rem;
  padding: 10px;
  border: none;
  background-color: #ea501a;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
`;
