import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styled from "styled-components";

import Sidebar from "./Sidebar";

const New = ({ inputs, title }) => {
  const location = useLocation();
  const assessmentId = location.pathname.split("/")[3];
  const type = location.pathname.split("/")[4];
  const [assessment, setAssessment] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const getAssessment = async () => {
      const { data } = await axios.get(`/assessments/${assessmentId}`);
      setAssessment(data);
    };
    getAssessment();
  }, [assessmentId]);

  const [formData, setFormData] = useState({
    question: "",
    instructions: "",
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
    let newData = {
      question: formData.question,
      instructions: formData.instructions,
      assessment_id: assessmentId,
    };

    switch (type) {
      case "new-prose":
        try {
          const { data } = await axios.post("/pros", newData);
          setSuccess((success) => !success);
          setAssessment({});
        } catch (error) {
          console.log(error);
        }
        break;
      case "new-kata":
        try {
          const { data } = await axios.post("/kataas", newData);
          setSuccess((success) => !success);
          setAssessment({});
        } catch (error) {
          console.log(error);
        }
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Top>
          <Title>{title}</Title>
          <AssessmentContainer>
            <AssessmentTitle>{assessment.assessment_title}</AssessmentTitle>
            <AssessmentDuedate>{assessment.duedate}</AssessmentDuedate>
          </AssessmentContainer>
        </Top>

        <Bottom>
          {!success && (
            <BottomForm onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <FormInput key={input.id}>
                  <Label>{input.label}</Label>
                  <Input
                    type={input.type}
                    name={input.name}
                    onChange={handleChange}
                    placeholder={input.placeholder}
                  />
                </FormInput>
              ))}

              <Button>Submit</Button>
            </BottomForm>
          )}
          {success && (
            <MessageWrapper>
              <Message>
                Action has been performed successfully, send{" "}
                <MessageButton onClick={() => setSuccess(!success)}>
                  another
                </MessageButton>{" "}
                or go{" "}
                <Link to="/mentors/assessments">
                  <MessageButton>back</MessageButton>
                </Link>{" "}
                to assessments?
              </Message>
            </MessageWrapper>
          )}
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default New;

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

const MessageWrapper = styled.main`
  font-size: 1rem;
  margin: 1.25rem;
`;

const Message = styled.div`
  padding: 1.25rem;
  border: 1px solid teal;
  border-radius: 5px;
`;

const MessageButton = styled.span`
  font-weight: 600;
  cursor: pointer;
  border-bottom: 1px solid #101f3c;
  &:last-child {
    color: #ea501a;
    border-bottom: 1px solid #ea501a;
  }
  &:hover {
    font-size: 0.8rem;
    font-weight: 700;
    transform: scale(1.1 1.5s ease);
  }
`;
