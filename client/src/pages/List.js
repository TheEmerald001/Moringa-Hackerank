import React from "react";
import styled from "styled-components";
import DataTable from "../components/DataTable";
import Sidebar from "../components/Sidebar";

const List = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <DataTable />
      </Wrapper>
    </Container>
  );
};

export default List;

const Container = styled.main`
  display: flex;
`;

const Wrapper = styled.section`
  flex: 8;
`;
