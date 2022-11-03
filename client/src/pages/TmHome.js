import React from "react";
import Calendar from "react-calendar";
import Sidebar from "../components/Sidebar";
// import dashboard from '../CSS/_dashboard.scss'
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { useSelector } from "react-redux";

function TmHome() {
  const mentor = useSelector((state) => state.mentor?.currentUser);
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Top>
          <Title>Mentor Dashboard</Title>
        </Top>
        <Bottom>
          <MentorContainer>
            <MentorTitle>
              Welcome back, {mentor.firstname} {mentor.lastname}!
            </MentorTitle>
            <MentorId>WID: {mentor.work_id}</MentorId>
          </MentorContainer>
        </Bottom>
        <Task>
          <div className="mentor-title">Recent Tasks</div>
          <div className="todo">
            <div className="task-title">TASK</div>
            <div className="task">
              Create an assesment for students to undertake
            </div>
            <div className="task">
              Send invites to the students to notify them on the assessment
            </div>
            <div className="task">Review and publish an assessment</div>
            <div className="task">
              Review and grade student attempts on the assessment
            </div>
            <div className="task">Give feedback to the students</div>
          </div>
        </Task>
      </Wrapper>
    </Container>
  );
}

export default TmHome;

const Container = styled.main`
  display: flex;
  background-color: #f3f7f7;
`;

const Wrapper = styled.section`
  flex: 7;
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
  color: #101f3c;
  font-size: 2.25rem;
`;

const MentorContainer = styled.article`
  margin: 1.25rem 0;
  width: 40%;
`;
const MentorTitle = styled.article`
  font-size: 1.2rem;
  font-weight: 600;
  color: #101f3c;
`;
const MentorId = styled.article`
  font-size: 1rem;
  margin-top: 0.5rem;
  font-weight: 600;
  color: #39424e;
`;

const Bottom = styled.section`
  padding: 1.25rem;
  margin: 1.25rem;
  display: flex;
`;

const Task = styled.article`
  padding: 1.25rem;
  margin: 1.25rem;
  display: flex;

  flex-direction: column;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-sizing: border-box;

  .mentor-title {
    color: #39424e;
    font-size: 1.2rem;
    font-weight: 600;

    padding: 0.5rem;
    background-color: #f3f7f7;
  }
  .task-title {
    color: #39424e;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    padding: 0.5rem;
  }
  .task {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;
