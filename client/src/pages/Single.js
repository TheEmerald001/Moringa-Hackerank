import { Assessment } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";
import request from "../Helpers/requestMethods";

const Single = () => {
  const location = useLocation();
  const studentId = location.pathname.split("/")[3];
  const [student, setStudent] = useState({});

  useEffect(() => {
    const getStudent = async () => {
      try {
        const { data } = await axios.get(`/students/${studentId}`);
        setStudent(data);
      } catch (err) {
        console.log(err);
      }
    };
    getStudent();
  }, [studentId]);

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Top>
          <Left>
            <Title>Information</Title>
            <Student>
              <Image
                src="https://i.pinimg.com/originals/4b/df/c7/4bdfc7400602eb3cda30fcd05bd23817.jpg"
                alt="studentImg"
              />
              <Details>
                <StudentName>
                  {student.firstname} {student.lastname}
                </StudentName>
                <DetailStudent>
                  <StudentKey>Email:</StudentKey>
                  <StudentValue>{student.email}</StudentValue>
                </DetailStudent>
                <DetailStudent>
                  <StudentKey>Username:</StudentKey>
                  <StudentValue>{student.username}</StudentValue>
                </DetailStudent>
                <DetailStudent>
                  <StudentKey>Score:</StudentKey>
                  <StudentValue>9</StudentValue>
                </DetailStudent>
              </Details>
            </Student>
          </Left>
          <Right>Details</Right>
        </Top>
        <Bottom>
          <ListTitle>Student's Attempts</ListTitle>
          {student.assessments.map((assessment) => (
            <AssessmentContainer key={assessment.id}>
              <AssessmentLeft>
                <AssessmentTitle>{assessment.assessment_title}</AssessmentTitle>
              </AssessmentLeft>
              <AssessmentRight>
                <Link to={`/mentors/students/${assessment.id}/quiz`}>
                  <ViewButton title="quiz">Quiz</ViewButton>
                </Link>
                <Link to={`/mentors/students/${assessment.id}/kata`}>
                  <ViewButton title="kata">Kata</ViewButton>
                </Link>
                <Link to={`/mentors/students/${assessment.id}/prose`}>
                  <ViewButton title="prose">Prose</ViewButton>
                </Link>
              </AssessmentRight>
            </AssessmentContainer>
          ))}
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Single;

const Container = styled.main`
  color: #101f3c;
  display: flex;
`;

const Wrapper = styled.section`
  flex: 8;
`;

const Top = styled.section`
  padding: 1.25rem;
  display: flex;
  gap: 1.25rem;
`;

const Left = styled.article`
  flex: 1;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  padding: 1.25rem;
  position: relative;
`;

const Student = styled.article`
  display: flex;
  gap: 1.25rem;
`;

const Image = styled.img`
  height: 6.25rem;
  width: 6.25rem;
  border-radius: 50%;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 1rem;
  color: lightgray;
  margin-bottom: 1.25rem;
`;

const Details = styled.article``;

const StudentName = styled.h2`
  margin-bottom: 10px;
  color: #555;
`;

const DetailStudent = styled.article`
  margin-bottom: 10px;
  font-size: 14px;
`;

const StudentKey = styled.span`
  font-weight: bold;
  margin-right: 5px;
  color: gray;
  font-size: 1rem;
`;

const StudentValue = styled.span`
  font-size: 0.9rem;
  color: #101f3c;
`;

const Right = styled.article`
  flex: 3;
`;

const Bottom = styled.section`
  padding: 1.25rem;
  margin: 0.625rem 1.25rem;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
`;

const ListTitle = styled.article`
  font-weight: 600;
  color: gray;
  margin-bottom: 1rem;
`;

const ViewButton = styled.div`
  padding: 2px 5px;
  border-radius: 5px;
  color: white;
  background-color: ${(props) =>
    props.title === "quiz"
      ? "#ea501a"
      : props.title === "kata"
      ? "#101f3c"
      : "teal"};
  cursor: pointer;
`;

const AssessmentContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 1.25rem;
  background-color: #f3f7f7;
  color: #101f3c;
  font-weight: 600;
  margin: 0.625rem 1.25rem;
  justify-content: space-between;
`;

const AssessmentLeft = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const AssessmentTitle = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const AssessmentRight = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
