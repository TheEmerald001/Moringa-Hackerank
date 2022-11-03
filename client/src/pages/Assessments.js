import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import AssessmentDataTable from "../components/AssessmentDataTable";
import Sidebar from "../components/Sidebar";

const Assessments = ({ columns, type }) => {
  const [assessments, setAssessments] = useState([]);
  const mentorId = useSelector((state) => state.mentor?.currentUser?.id);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const { data } = await axios.get(`/assessments?tutor_id=${mentorId}`);
        setAssessments(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAssessments();
  }, []);

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
