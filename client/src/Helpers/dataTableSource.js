// temporary data
import React from "react";
import styled from "styled-components";

export const studentColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "student",
    headerName: "Student",
    width: 250,
    renderCell: (params) => {
      return (
        <CellWithImage>
          <Image
            src={
              params.row.image ||
              "https://e7.pngegg.com/pngimages/1011/702/png-clipart-computer-icons-graphics-iconfinder-administrator-icon-monochrome-black.png"
            }
            alt="avatar"
          />
          {params.row.firstname} {params.row.lastname}
        </CellWithImage>
      );
    },
  },
  { field: "email", headerName: "Email", width: 250 },
  { field: "username", headerName: "Username", width: 150 },
  { field: "score", headerName: "Score", width: 100 },
];

const CellWithImage = styled.article`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1.25rem;
`;
