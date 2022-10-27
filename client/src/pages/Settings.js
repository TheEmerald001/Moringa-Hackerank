import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import app from "../Helpers/firebase";
import request from "../Helpers/requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../redux/userSlice";

const Settings = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const [input, setInputs] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...input, [name]: value, user: user });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const profile = { ...input, image: downloadURL };
          try {
            const { data } = await request.post("/profiles", profile);
            console.log(data);
            dispatch(updateUserProfile(data));
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Top>
          <Title>Update your profile</Title>
        </Top>
        <Bottom>
          <Left>
            {" "}
            <Image
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
              }
              alt="ItemImg"
            />
          </Left>
          <Right>
            <Form onSubmit={handleSubmit}>
              <FormInput>
                <Label htmlFor="image">
                  Image:{" "}
                  <DriveFolderUploadOutlined style={{ cursor: "pointer" }} />
                </Label>
                <Input
                  id="image"
                  type="file"
                  onChange={(event) => setFile(event.target.files[0])}
                  style={{ display: "none " }}
                />
              </FormInput>
              <FormInput>
                <Label>Phone</Label>
                <Input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  placeholder="Phone"
                />
              </FormInput>
              <FormInput>
                <Label>Address</Label>
                <Input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  placeholder="Address"
                />
              </FormInput>

              <Button>Send</Button>
            </Form>
          </Right>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Settings;

const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #f6f7fb;
  color: #1e144f;
`;

const Wrapper = styled.section``;

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

const Bottom = styled.section`
  width: 40%;
  margin: auto;
  padding: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
`;

const Left = styled.article`
  flex: 1;
  text-align: center;
`;

const Image = styled.img`
  height: 6.25rem;
  width: 6.25rem;
  border-radius: 50%;
  object-fit: cover;
`;

const Right = styled.article`
  flex: 2;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem;
  justify-content: space-around;
`;

const FormInput = styled.article`
  width: 40%;
`;

const Label = styled.label`
  display: flex;
  align-item: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 5px;
  background-color: transparent;
  border-bottom: 1px solid lightgray;
`;

const Button = styled.button`
  width: 9.375rem;
  padding: 10px;
  border: none;
  background-color: #1896ff;
  color: #eff8ff;
  cursor: pointer;
  margin-top: 10px;
`;
