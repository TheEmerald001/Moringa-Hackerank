import styled from "styled-components";
import AssessmentDataTable from "../components/AssessmentDataTable";
import Sidebar from "../components/Sidebar";

const Assessments = ({ data, columns, type }) => {
  return (
    <Container>
      <Sidebar />
      <ListContainer>
        <AssessmentDataTable data={data} columns={columns} type={type} />
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
