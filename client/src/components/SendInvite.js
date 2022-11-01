import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import request from "../Helpers/requestMethods";
import Sidebar from "./Sidebar";

const SendInvite = () => {
  const location = useLocation();
  const assessmentId = location.pathname.split("/")[3];
  const mentor = useSelector((state) => state.mentor?.currentUser);
  const [email, setEmail] = useState("");
  const [student, setStudent] = useState({});
  const [assessment, setAssessment] = useState({});

  useEffect(() => {
    const getAssessment = async () => {
      const { data } = await axios.get(`/assessments/${assessmentId}`);
      setAssessment(data);
    };
    getAssessment();
  }, [assessmentId]);

  const handleSearch = async () => {
    let emailData = {
      email: email,
    };

    try {
      const { data } = await axios.post("/inviteme", emailData);
      setStudent(data);
    } catch (error) {
      console.log(error);
    }
  };

  const sendInvite = async (event) => {
    event.preventDefault();

    let inviteData = {
      assessment_id: assessment.id,
      tutor_id: mentor?.id,
      student_id: student.student_id,
    };

    try {
      const { data } = await axios.post("/invites", inviteData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Top>
          <Title>Send Invites To Students</Title>
          <AssessmentContainer>
            <AssessmentTitle>{assessment.assessment_title}</AssessmentTitle>
            <AssessmentDuedate>{assessment.duedate}</AssessmentDuedate>
          </AssessmentContainer>
        </Top>

        <Bottom>
          <BottomForm onSubmit={sendInvite}>
            <FormInput>
              <Label>Enter Student Email</Label>
              <div className="searchStudent">
                <Input
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Student Email"
                />
                <div className="searchIcon">
                  <SearchIcon onClick={handleSearch} fontSize="large" />
                </div>
              </div>
            </FormInput>
            <StudentName>
              {student?.firstname} {student?.name}
            </StudentName>
            <Button>Submit</Button>
          </BottomForm>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default SendInvite;

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
  margin: 1.25rem auto;
  width: 70%;
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

const StudentName = styled.article`
  padding: 0.5rem;
  background-color: #f5f5f5;
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
  flex: 1;
  position: relative;
  .searchStudent {
    display: flex;
    margin-top: 0.5rem;
  }
  .searchIcon {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: gray;
    cursor: pointer;
  }
`;

const Label = styled.label`
  display: flex;
  align-item: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 10px;
  outline: none;
  border: 1px solid lightgray;
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
