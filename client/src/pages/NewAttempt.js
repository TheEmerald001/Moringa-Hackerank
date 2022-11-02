import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addAssessment } from "../redux/apiCall";
import Sidebar from "../components/Sidebar";

const NewAttempt = () => {
  const createAttempt = async () => {
    let attemptData = {
      assessment_id: invite.assessment.id,
      tutor_id: invite.tutor.id,
      student_id: invite.student.id,
    };

    try {
      const { data } = await axios.post(`/attempts`, attemptData);
      //  data && window.location.replace(`/students/assessments/${invite.assessment.id}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Top>
          <div className="studentName">Welcome {"Maurice"}</div>
          <Into>
            Join other developers, practice coding skills, prepare for the
            interviews, and get hired.
          </Into>
        </Top>
        <Bottom>
          <div>Click on the attempt buttom to start with the assessment</div>
          <div>Make sure you read and follow the instructions well</div>
          <div>
            You are required to do all the assessment that are there in due time
          </div>
          <Attempt onClick={createAttempt}>Start assessment</Attempt>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default NewAttempt;

const Container = styled.main`
  display: flex;
`;

const Wrapper = styled.section`
  flex: 8;
  div {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
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
  .studentName {
    font-size: 1.5rem;
    line-height: 1.5;
    color: gray;
    margin-bottom: 1rem;
  }
`;
const Into = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #101f3c;
`;

const Bottom = styled.section`
  padding: 1.25rem;
  margin: 1.25rem;
  color: #101f3c;
  display: flex;

  align-items: center;
  text-align: center;
  flex-direction: column;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-sizing: border-box;
`;

const Attempt = styled.button`
  width: 20%;
  font-size: 1.2rem;
  padding: 1.25rem;
  color: white;
  cursor: pointer;
  font-weight: 600;
`;
