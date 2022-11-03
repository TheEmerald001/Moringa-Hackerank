import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DataTable from "../components/DataTable";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const List = () => {
  const [listOfStudents, setList] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const { data } = await axios.get("/students");
      setList(data);
    };
    getStudents();
  }, []);

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <DataTable data={listOfStudents} />
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
