import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import axios from "axios";
import StudentSideBar from "./StudentSideBar";
import { Link, useLocation } from "react-router-dom";

function Skata() {
  const location = useLocation();
  const assessmentId = location.pathname.split("/")[3];

  const [assessment, setAssessment] = useState({});
  const [code, setCode] = useState();

  const onChange = React.useCallback((value, viewUpdate) => {
    setCode(value);
  }, []);

  useEffect(() => {
    const getAssessment = async () => {
      const { data } = await axios.get(`/assessments/${assessmentId}`);
      setAssessment(data);
    };
    getAssessment();
  }, [assessmentId]);

  const submitCode = async () => {
    try {
      await axios
        .post
        // `https://www.codewars.com/api/v1/code-challenges/${code}`
        ();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <StudentSideBar />

      <Wrapper>
        {/* <div className='miniNav'>
            <Link to={`/students/assessments/${assessmentId}/quiz`}>
              <span>QUIZ</span>
            </Link>
            <Link to={`/students/assessments/${assessmentId}/kata`}>
              <span>KATA</span>
            </Link>
            <Link to={`/students/assessments/${assessmentId}/pros`}>
              <span>PROS</span>
            </Link>
        </div> */}
        <Top>
          <Title>KATA</Title>
          <AssessmentContainer>
            <AssessmentTitle>{assessment?.assessment_title}</AssessmentTitle>
          </AssessmentContainer>
        </Top>
        <Bottom>
          {assessment?.kataas?.map((kata) => (
            <>
              <Left>
                <Instruction>{kata.instructions}</Instruction>
              </Left>
              <Right>
                <Task>{kata.question}</Task>
                <CodeMirror
                  value={code}
                  height="300px"
                  width="600px"
                  extensions={[javascript({ jsx: true })]}
                  onChange={onChange}
                />
                <Button onClick={submitCode}>Submit</Button>
              </Right>
            </>
          ))}
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default Skata;

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
