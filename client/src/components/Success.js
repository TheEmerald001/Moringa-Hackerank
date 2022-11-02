import React from "react";
import styled from "styled-components";

const Success = () => {
  return (
    <Container>
      <Message>
        Action has been performed successfully, send <Button>another</Button> or
        go <Button>back</Button> to assessments?
      </Message>
    </Container>
  );
};

export default Success;

const Container = styled.main`
  font-size: 1rem;
  margin: 1.25rem;
`;

const Message = styled.div`
  padding: 1.25rem;
  border: 1px solid teal;
  border-radius: 5px;
`;

const Button = styled.span`
  font-weight: 600;
  cursor: pointer;
  border-bottom: 1px solid #101f3c;
  &:last-child {
    color: #ea501a;
    border-bottom: 1px solid #ea501a;
  }
  &:hover {
    font-size: 0.8rem;
    font-weight: 700;
    transform: scale(1.1 1.5s ease);
  }
`;
