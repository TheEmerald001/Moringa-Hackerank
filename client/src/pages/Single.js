import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AnswerTable from "../components/AnswerTable";
import Sidebar from "../components/Sidebar";
import request from "../Helpers/requestMethods";

const Single = ({ columns, type }) => {
  const location = useLocation();
  const studentId = location.pathname.split("/")[3];
  const [student, setStudent] = useState({});

  useEffect(() => {
    const getStudent = async () => {
      try {
        const { data } = await request.get(`/students/${studentId}`);
        setStudent(data);
      } catch (err) {
        console.log(err);
      }
    };
    getStudent();
  }, [studentId]);

  console.log(student);

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
                  {student.first_name} {student.last_name}
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
          <AnswerTable data={student?.invites} columns={columns} type={type} />
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
`;

const StudentValue = styled.span`
  font-weight: 300;
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
