import React from "react";
import Calendar from "react-calendar";
import Sidebar from "../components/Sidebar";
// import dashboard from '../CSS/_dashboard.scss'
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

function TmHome() {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Top>
          <Title>Assessment</Title>
          <AssessmentContainer>
            <AssessmentTitle>Ass</AssessmentTitle>
            <AssessmentDuedate>du</AssessmentDuedate>
          </AssessmentContainer>
        </Top>
        <Bottom>
          <Left></Left>
          <Right></Right>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default TmHome;

const Container = styled.main`
  display: flex;
`;

const Wrapper = styled.section`
  flex: 8;
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

const AssessmentContainer = styled.article`
  display: flex;
  align-items: center;
  margin: 1.25rem 0;
  width: 40%;
  justify-content: space-between;
`;
const AssessmentTitle = styled.article``;
const AssessmentDuedate = styled.article``;

const Bottom = styled.section`
  padding: 1.25rem;
  margin: 1.25rem;
  display: flex;
`;

const Left = styled.article`
  flex: 1;
  padding: 1.25rem;
  background-color: #101f3c;
  color: white;
`;

const Instruction = styled.div``;

const Right = styled.article`
  flex: 2;
  padding: 0 1.25rem;
`;

const Task = styled.div`
  margin-bottom: 0.5rem;
`;

const Button = styled.div`
  background-color: teal;
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  width: 10%;
  margin-top: 1rem;
`;
