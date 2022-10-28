import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import request from "../Helpers/requestMethods";
import { addAssessment } from "../redux/apiCall";
import { addQuiz } from "../redux/assessmentSlice";
import Sidebar from "./Sidebar";

const NewAssessment = () => {
  const [assessmentInputs, setAssessmentInputs] = useState({
    title: "",
    duedate: "",
  });

  const dispatch = useDispatch();
  const mentor = useSelector((state) => state.user?.currentUser?.mentor);

  const assessmentChange = (event) => {
    const { name, value } = event.target;
    setAssessmentInputs({ ...assessmentInputs, [name]: value, mentor: mentor });
  };

  const onAddAssessment = (event) => {
    event.preventDefault();
    try {
      addAssessment(assessmentInputs, dispatch);
    } catch (error) {
      console.log(error);
    }

    // setAssessment(assessmentInputs);
  };
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Top>
          <Title>Add New Assessment</Title>
          <TopForm onSubmit={onAddAssessment}>
            <FormInput>
              <Label htmlFor="assTitle">Assessment Title</Label>
              <Input
                id="assTitle"
                type="text"
                name="title"
                value={assessmentInputs.title}
                onChange={assessmentChange}
                placeholder="Title"
              />
            </FormInput>
            <FormInput>
              <Label htmlFor="duedate">Due Date</Label>
              <Input
                id="duedate"
                type="datetime-local"
                name="duedate"
                value={assessmentInputs.duedate}
                onChange={assessmentChange}
                placeholder="Due Date"
              />
            </FormInput>
            <Button>Add</Button>
          </TopForm>
        </Top>
        <AssessmentNumber>Assesment No: 1</AssessmentNumber>
        <Bottom></Bottom>
      </Wrapper>
    </Container>
  );
};

export default NewAssessment;

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

const TopForm = styled.form`
  display: flex;
  width: 50%;
  padding: 1.25rem;
  margin: 2rem auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  box-sizing: border-box;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
`;

const BottomForm = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1.875rem;
  justify-content: space-around;
`;

const FormInput = styled.article`
  width: 100%;
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
  background-color: #101f3c;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin: 1rem;
`;

const AssessmentNumber = styled.div`
  color: gray;
  font-size: 1rem;
  margin: 1.25rem;
`;
