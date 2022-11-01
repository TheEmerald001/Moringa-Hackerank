import axios from "axios";
import { useEffect, useState } from "react";

import styled from "styled-components";
import AssessmentDataTable from "../components/AssessmentDataTable";
import Sidebar from "../components/Sidebar";

const Assessments = ({ columns, type }) => {
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const { data } = await axios.get("/assessments");
        setAssessments(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAssessments();
  }, []);
  console.log(assessments);
  return (
    <Container>
      <Sidebar />
      <ListContainer>
        <AssessmentDataTable data={assessments} columns={columns} type={type} />
      </ListContainer>
    </Container>
  );
};

export default Assessments;
const Container = styled.main`
  display: flex;
`;

const ListContainer = styled.section`
  flex: 8;
`;
