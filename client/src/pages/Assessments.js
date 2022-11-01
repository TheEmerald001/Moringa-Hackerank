import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AssessmentDataTable from "../components/AssessmentDataTable";
import Sidebar from "../components/Sidebar";
import { getAssessments } from "../redux/apiCall";

const Assessments = ({ data, columns, type }) => {
  const dispatch = useDispatch();
  const assessments = useSelector((state) => state.assessment?.assessments);

  useEffect(() => {
    getAssessments(dispatch);
  }, [dispatch]);

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
