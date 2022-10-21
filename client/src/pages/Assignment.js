import styled from "styled-components";
import StudentSideBar from "../components/StudentSideBar";

const Assignment = () => {
  return (
    <Container>
      <StudentSideBar />
      <Wrapper>
        <Left>
          <Title>Notice</Title>
          <Instruction>Don't be late</Instruction>
          <Instruction>No exceptions will be allowed</Instruction>
        </Left>
        <Right>
          <Assignments>
            <AssignTitle>Assignment No: 4</AssignTitle>
            <AssignDueDate>Due: 2022-06-27</AssignDueDate>
            <AssignViewButton>View</AssignViewButton>
          </Assignments>
          <Assignments>
            <AssignTitle>Assignment No: 7</AssignTitle>
            <AssignDueDate>Due: 2022-08-07</AssignDueDate>
            <AssignViewButton>View</AssignViewButton>
          </Assignments>
          <Assignments>
            <AssignTitle>Assignment No: 9</AssignTitle>
            <AssignDueDate>Due: 2022-10-12</AssignDueDate>
            <AssignViewButton>View</AssignViewButton>
          </Assignments>
          <Assignments>
            <AssignTitle>Assignment No: 14</AssignTitle>
            <AssignDueDate>Due: 2022-11-10</AssignDueDate>
            <AssignViewButton>View</AssignViewButton>
          </Assignments>
          <Assignments>
            <AssignTitle>Assignment No: 16</AssignTitle>
            <AssignDueDate>Due: 2022-11-22</AssignDueDate>
            <AssignViewButton>View</AssignViewButton>
          </Assignments>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Assignment;

const Container = styled.main`
  color: #101f3c;
  display: flex;
`;

const Wrapper = styled.section`
  display: flex;
  flex: 8;
  padding: 3.75rem;
`;

const Left = styled.article`
  flex: 1;
`;

const Title = styled.article`
  padding: 0.7rem;
  text-align: center;
  font-weight: 600;
  background-color: #f5f5f5;
  margin-bottom: 0.8rem;
`;

const Instruction = styled.p`
  text-align: center;
  margin-bottom: 0.8rem;
`;

const Right = styled.article`
  flex: 3;
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Assignments = styled.article`
  padding: 0.7rem;
  color: gray;
  width: 100%;
  border: 0.5px solid rgb(230, 227, 227);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const AssignTitle = styled.span``;

const AssignDueDate = styled.span``;

const AssignViewButton = styled.span`
  padding: 3px 8px;
  border-radius: 5px;
  color: green;
  background-color: rgba(0, 128, 0, 0.2);
`;
