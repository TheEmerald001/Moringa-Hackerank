import styled from "styled-components";

import AnswerTable from "../components/AnswerTable";


const Single = () => {
  return (
    <Container>
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
                <StudentName>Daenerys Targeryen</StudentName>
                <DetailStudent>
                  <StudentKey>Email:</StudentKey>
                  <StudentValue>dany@email.com</StudentValue>
                </DetailStudent>
                <DetailStudent>
                  <StudentKey>Age:</StudentKey>
                  <StudentValue>26</StudentValue>
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
          <ListTitle>Student's Answer</ListTitle>
          <AnswerTable />
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Single;

const Container = styled.main`
  color: #101f3c;
`;

const Wrapper = styled.section``;

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
<<<<<<< HEAD

const ListTitle = styled.article`
  font-weight: 600;
  color: gray;
  margin-bottom: 1rem;
`;
=======
>>>>>>> 414a31f (Create a single page that will display a single student and their answers when the technical mentor selects on a student)
