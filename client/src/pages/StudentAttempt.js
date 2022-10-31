import { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const StudentAttempt = () => {
  const [formData, setFormData] = useState({});
  const [isExpanded, setExpanded] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const expand = () => {
    setExpanded((isQuizExpanded) => !isQuizExpanded);
  };

  return (
    <Container>
      <Sidebar />
      <AssessmentContainer>
        <Top>
          <AssessmentInfo>
            <AssessmentTitle>{"Assessment One"}</AssessmentTitle>
            <StudentName>{"John Doe"}</StudentName>
            <AssessmentDuedate>{"12 Feb 2022"}</AssessmentDuedate>
          </AssessmentInfo>
        </Top>
        <Bottom>
          <AttempContainer>
            <AttemptWrapper>
              <AttempTop>
                <AttemptQuestion>
                  <span>Question</span>
                  How Many Legs does a cow have
                </AttemptQuestion>
                <AttemptAnswer>
                  <span>Answer</span>4
                </AttemptAnswer>
                <GradeButton onClick={expand}>Grade</GradeButton>
              </AttempTop>
              {isExpanded && (
                <AttemptBottom>
                  <Form>
                    <FormTitle>Leave Remarks</FormTitle>

                    <Remarks
                      type="number"
                      name="remarks"
                      onChange={handleChange}
                      placeholder="Award Score"
                    />

                    <Score
                      type="number"
                      name="score"
                      onChange={handleChange}
                      placeholder="Award Score"
                    />

                    <Button>Submit</Button>
                  </Form>
                </AttemptBottom>
              )}
            </AttemptWrapper>
          </AttempContainer>
        </Bottom>
      </AssessmentContainer>
    </Container>
  );
};

export default StudentAttempt;

const Container = styled.main`
  display: flex;
  width: 100%;
  position: relative;
  span {
    font-weight: 600;
    font-size: 1rem;
    color: gray;
  }
`;

const AssessmentContainer = styled.section`
  flex: 8;
  min-height: 100vh;
  margin: 0 auto;
`;

const Top = styled.article``;
const Bottom = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70vw;
  min-height: 100vh;
  margin: 0 auto;
`;

const AssessmentTitle = styled.article``;
const StudentName = styled.article``;

const AssessmentDuedate = styled.article``;

const AssessmentInfo = styled.article`
  padding: 1.25rem;
  margin: 1.25rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
`;

const AttempContainer = styled.section`
  padding: 1.25rem;
  margin: 1.25rem;
`;

const AttemptWrapper = styled.article`
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  margin-bottom: 1.25rem;
`;

const AttempTop = styled.article`
  padding: 1.25rem;
`;

const AttemptQuestion = styled.div`
  display: flex;
  flex-direction: column;
`;

const AttemptAnswer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
`;

const AttemptBottom = styled.article`
  position: relative;
`;

const Form = styled.form`
  display: flex;
  border: none;
  flex-wrap: wrap;
`;

const FormTitle = styled.span`
  font-size: 1.1rem;
`;

const Score = styled.input`
  flex: 1;
  max-width: 10%;
  margin: 1.25rem 10px 0 0;
  padding: 10px;
  outline: none;
  background-color: transparent;
  border: none;
  border: 1px solid lightgray;
`;

const Remarks = styled.textarea`
  flex: 1;
  min-width: 40%;
  margin: 1.25rem 10px 0 0;
  padding: 10px;
  outline: none;
  background-color: transparent;
  border: none;
  border: 1px solid lightgray;
`;

const GradeButton = styled.div`
  width: 10%;
  padding: 0.7rem 1.25rem;
  cursor: pointer;
  background-color: #101f3c;
  color: white;
  margin-bottom: 1rem;
  border: none;
`;
const Button = styled.button`
  width: 10%;
  padding: 1rem 1.25rem;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 1rem;
  border: none;
`;
