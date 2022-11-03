import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { studentColumns, studentRows } from "../Helpers/dataTableSource";
import { Link } from "react-router-dom";

const DataTable = ({ data }) => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <ActionCell>
            <Link to={`/mentors/students/${params.row.id}`}>
              <ViewButton>View</ViewButton>
            </Link>
          </ActionCell>
        );
      },
    },
  ];
  return (
    <Container>
      <Top>
        <Title>Students</Title>
      </Top>

      <DataGrid
        rows={data}
        columns={studentColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
};

export default DataTable;

const Container = styled.main`
  height: 37.5rem;
  padding: 1.25rem;
  color: #101f3c;
`;

const Top = styled.section`
  padding: 1.25rem;
  margin: 1.25rem;
  display: flex;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
`;

const Title = styled.h1`
  color: lightgray;
  font-size: 1.25rem;
`;
const FilterContainer = styled.div`
  display: flex;
`;

const Filter = styled.div`
  margin: 1.25rem;
`;

const FilterText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  margin-right: 1.25rem;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 1.25rem;
`;

const Option = styled.option``;

const ActionCell = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ViewButton = styled.div`
  padding: 2px 5px;
  border-radius: 5px;
  color: green;
  background-color: rgba(0, 128, 0, 0.2);
  cursor: pointer;
`;
