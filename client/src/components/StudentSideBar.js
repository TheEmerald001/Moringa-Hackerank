import MoringaLogo from "../assests/images/hackerlogo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AccountCircleOutlined,
  Assessment,
  Code,
  Home,
  Notifications,
} from "@material-ui/icons";

import LogoutIcon from "@mui/icons-material/Logout";

import { Quiz } from "@mui/icons-material";
const StudentSideBar = () => {
  return (
    <Container>
      <Top>
        <Logo>
          <FirstSpan>Moringa</FirstSpan> Hackerank
        </Logo>
      </Top>
      <Hr />
      <AvatarContainer>
        <Avatar
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="profileImage"
        />
        <StudentName>Jane Smith</StudentName>
      </AvatarContainer>
      <Center>
        <List>
          <Link>
            <Title>MAIN</Title>
            <Item>
              <Home />
              <ItemSpan>Home</ItemSpan>
            </Item>
            <Item>
              <Icon>
                <Notifications />
                <Counter>2</Counter>
              </Icon>
              <ItemSpan>Notifications</ItemSpan>
            </Item>
          </Link>
          <Title style={{ marginTop: "2rem" }}>ASSESSMENTS</Title>
          <Link>
            <Item>
              <Quiz />
              <ItemSpan>Quiz</ItemSpan>
            </Item>
          </Link>
          <Link>
            <Item>
              <Assessment />
              <ItemSpan>Prose</ItemSpan>
            </Item>
          </Link>
          <Item>
            <Code />
            <ItemSpan>Code Challenge</ItemSpan>
          </Item>
        </List>
      </Center>
      <Bottom>
        <Title>USER</Title>
        <Item>
          <AccountCircleOutlined />
          <ItemSpan>Profile</ItemSpan>
        </Item>
        <Item>
          <LogoutIcon />
          <ItemSpan>Logout</ItemSpan>
        </Item>
      </Bottom>
    </Container>
  );
};

export default StudentSideBar;

const Container = styled.main`
  flex: 1;
  background-color: #101f3c;
  border-right: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
  color: #fff;
  position: relative;
`;

const Top = styled.section`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.span`
  color: #ea501a;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
`;

const FirstSpan = styled.span`
  color: #fff;
`;

const Hr = styled.hr`
  height: 0;
  border: 0.5px solid rgb(230, 227, 227);
`;

const Center = styled.section`
  padding: 0.625rem;
`;

const Title = styled.p`
  font-size: 10px;
  font-weight: bold;
  color: #ea501a;
  margin-top: 1rem;
  margin-bottom: 5px;
`;

const List = styled.ul``;

const Item = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 5px;
  &:hover {
    background-color: #202e49;
  }
`;

const ItemSpan = styled.span`
  font-size: 13px;
  font-weight: 600;
  margin-left: 10px;
`;

const Bottom = styled.section`
  padding: 0.625rem;
  position: absolute;
  bottom: 0;
`;

const AvatarContainer = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0.625rem;
  gap: 0.5rem;
`;

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

const StudentName = styled.span`
  font-size: 13px;
  font-weight: 600;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  background-color: #ea501a;
  color: white;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
`;

const Icon = styled.article`
  position: relative;
`;
