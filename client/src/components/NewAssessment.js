import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addAssessment, submitContactReqToServer } from "../redux/apiCall";
import Sidebar from "./Sidebar";

const NewAssessment = () => {
  const [assessmentInputs, setAssessmentInputs] = useState({
    title: "",
    duedate: "",
  });

  const dispatch = useDispatch();
  const mentor = useSelector((state) => state.mentor?.currentUser);
  const { message, isFetching } = useSelector((state) => state.contact);

  const assessmentChange = (event) => {
    const { name, value } = event.target;

    setAssessmentInputs({ ...assessmentInputs, [name]: value });
  };

  const onAddAssessment = (event) => {
    event.preventDefault();
    let assessmentData = {
      assessment_title: assessmentInputs.title,
      tutor_id: mentor.id,
    };
    // let emailData = {
    //   title: assessmentInputs.title,
    //   duedate: assessmentInputs.duedate,
    // };
    try {
      addAssessment(assessmentData, dispatch);
      // submitContactReqToServer(dispatch, emailData);
    } catch (error) {
      console.log(error);
    }
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
            <Button disabled={isFetching}>Add</Button>
          </TopForm>
        </Top>
        {message.message && (
          <AssessmentMessage>
            {/* <Message>{message.message}</Message> */}
          </AssessmentMessage>
        )}
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
  &:disabled {
    cursor: not-allowed;
    color: #007cda;
  }
`;

const AssessmentMessage = styled.div`
  color: gray;
  font-size: 1rem;
  margin: 1.25rem;
`;

const Message = styled.div`
  padding: 1.25rem;
  border: 1px solid teal;
  color: green;
  font-weight: 600;
  border-radius: 5px;
`;
