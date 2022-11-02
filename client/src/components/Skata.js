import React, { useState } from "react";
import styled from "styled-components";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import axios from "axios";

function Skata() {
  const [code, setCode] = useState();
  const onChange = React.useCallback((value, viewUpdate) => {
    setCode(value);
  }, []);

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
    <div>
      <div className="TItle">Assesment Name</div>
      <div className="qCONTAINER">
        <div className="qONE">
          <span>What is the advantage of a SINGEL PAGE application</span>
          <em>This is the instruction</em>
          <input type="text" placeholder="Answer here" />
        </div>

        <div className="qONE">
          <span>What is the advantage of a SINGEL PAGE application</span>
          <em>This is the instruction</em>
        </div>
        <Container>
          <Task>Create a function that adds two numbers in Javascript</Task>
          <CodeMirror
            value={code}
            height="200px"
            width="600px"
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
          />
          <Button onClick={submitCode}>Submit</Button>
        </Container>
      </div>
      <div className="qBUtton">
        <span>SUBMIT</span>
      </div>
    </div>
  );
}

export default Skata;

const Container = styled.section``;

const Task = styled.div``;

const Button = styled.div`
  background-color: teal;
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  width: 5%;
  margin-top: 1rem;
`;
