import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const AnswerTable = ({ data, columns, type }) => {
  const handleDelete = (id) => {
    // deleteAssessment(id, dispatch);
  };
  let actionColumn1;
  let actionColumn2;

  switch (type) {
    case "mentor":
      actionColumn1 = [
        {
          field: "view",
          headerName: "View",
          width: 200,
          renderCell: (params) => {
            return (
              <ActionCell>
                <Link to={`/mentors/assessments/${params?.row?.id}/new-quiz`}>
                  <Button title="quiz">Quiz</Button>
                </Link>

                <Link to={`/mentors/assessments/${params?.row?.id}/new-kata`}>
                  <Button title="kata">Kata</Button>
                </Link>

                <Link to={`/mentors/assessments/${params?.row?.id}/new-prose`}>
                  <Button title="prose">Prose</Button>
                </Link>
              </ActionCell>
            );
          },
        },
      ];
      actionColumn2 = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <ActionCell>
                <DeleteButton onClick={() => handleDelete(params?.row?.id)}>
                  Delete
                </DeleteButton>
              </ActionCell>
            );
          },
        },
      ];
      break;
    case "student":
      actionColumn2 = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <ActionCell>
                <Link to={`/students/assessments/${params?.row?.id}`}>
                  <ViewButton>View</ViewButton>
                </Link>
                <DeleteButton onClick={() => handleDelete(params?.row?.id)}>
                  Delete
                </DeleteButton>
              </ActionCell>
            );
          },
        },
      ];
      break;

    default:
      break;
  }

  return (
    <Container>
      <TitleContainer>Jon Snow's Attempts</TitleContainer>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
};

export default AnswerTable;

const Container = styled.main`
  height: 37.5rem;
  padding: 1.25rem;
`;

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
const Button = styled.div`
  padding: 2px 5px;
  border-radius: 5px;
  color: white;
  background-color: ${(props) =>
    props.title === "quiz"
      ? "#ea501a"
      : props.title === "kata"
      ? "#101f3c"
      : "teal"};
  cursor: pointer;
`;

const DeleteButton = styled.div`
  padding: 2px 5px;
  border-radius: 5px;
  color: crimson;
  background-color: rgba(255, 0, 0, 0.2);
  cursor: pointer;
`;

const TitleContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1.25rem;
  color: gray;
  margin-bottom: 1.25rem;
`;

const LinkText = styled.span`
  color: green;
  font-size: 1rem;
  font-weight: 400;
  border: 1px solid green;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;
