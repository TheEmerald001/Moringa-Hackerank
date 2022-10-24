import React from "react";
import styled from "styled-components";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <Text>Copyright ⓒ {year} Moringa School</Text>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  text-align: center;

  width: 100%;
  height: 2.5rem;
`;

const Text = styled.p`
  color: #ccc;
`;
