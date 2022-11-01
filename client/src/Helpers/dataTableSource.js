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
          {params.row.username}
        </CellWithImage>
      );
    },
  },
  { field: "email", headerName: "Email", width: 250 },
  { field: "score", headerName: "Score", width: 100 },
  { field: "age", headerName: "Age", width: 70 },
];

export const studentRows = [
  {
    id: 1,
    username: "Snow Jon",
    age: 25,
    email: "snow@email.com",
    score: 10,
    image:
      "https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg",
  },
  {
    id: 2,
    username: "Lannister Cersei",
    age: 22,
    email: "cersei@email.com",
    score: 8,
    image:
      "https://image.cnbcfm.com/api/v1/image/103750570-103750570.jpg?v=1529471986",
  },
  {
    id: 3,
    username: "Lannister Jaime",
    age: 25,
    email: "jamie@email.com",
    score: 7,
    image:
      "https://helios-i.mashable.com/imagery/articles/052n1TBsWFfs7j2o5rVziVm/hero-image.fill.size_1200x1200.v1623362735.jpg",
  },
  {
    id: 4,
    username: "Stark Arya",
    age: 26,
    email: "arya@email.com",
    score: 10,
    image: "https://s1.r29static.com/bin/entry/bb3/x,80/2162737/image.jpg",
  },
  {
    id: 5,
    username: "Targaryen Daenerys",
    age: null,
    email: "dany@email.com",
    score: 8,
    image:
      "https://i.pinimg.com/originals/4b/df/c7/4bdfc7400602eb3cda30fcd05bd23817.jpg",
  },
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
