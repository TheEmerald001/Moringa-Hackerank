import React from "react";
import styled from "styled-components";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <p>Copyright ⓒ {year}</p>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
`;
