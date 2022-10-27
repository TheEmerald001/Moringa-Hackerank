import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";

const rows = [
  {
    id: 1,
    name: "What is the sum of ...",
    answer: 2100999,
    correctAnswer: 2100999,
    answerThree: 59003,
    answerFour: 290013,
  },
  {
    id: 2,
    name: "What is the sum of ...",
    answer: 900,
    correctAnswer: 9099,
    answerThree: 5003,
    answerFour: 2013,
  },
  {
    id: 3,
    name: "What is the sum of ...",
    answer: 5,
    correctAnswer: 5,
    answerThree: 59,
    answerFour: 3,
  },
  {
    id: 4,
    name: "What is the sum of ...",
    answer: 9,
    correctAnswer: 2100999,
    answerThree: 9003,
    answerFour: 290013,
  },
];

const AnswerTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Question Id</TableCell>
            <TableCell>Questions</TableCell>
            <TableCell>Selected Answer</TableCell>
            <TableCell>Correct Answer</TableCell>
            <TableCell>Answer Three</TableCell>
            <TableCell>Answer Four</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.answer}</TableCell>
              <TableCell>{row.correctAnswer}</TableCell>
              <TableCell>{row.answerThree}</TableCell>
              <TableCell>{row.answerFour}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AnswerTable;
