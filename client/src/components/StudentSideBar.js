import React from "react";
// import sidebar from "../CSS/_sidebar.scss";
import image from "../assests/images/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { AiOutlineHome } from "react-icons/ai";
import { SlBookOpen } from "react-icons/sl";
import { BiLogOutCircle } from "react-icons/bi";
import { BsHexagonHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logStudentOut } from "../redux/studentSlice";

function StudentSideBar() {
  const student = useSelector((state) => state.student?.currentUser?.student);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logStudentOut());
    window.location.replace("/");
  };
  return (
    <div className="side-nav">
      <Link to="/">
        <div className="myLogo">
          <img src={image} alt="wewe" />
        </div>
      </Link>

      <div className="prof">
        <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
            className="tESTING"
          />
          <AvatarFallback delayMs={600}>CT</AvatarFallback>
        </Avatar>
        <span>{student.username}</span>
      </div>
      <div className="icon-container">
        <Link to="/students">
          <div className="iCon">
            <AiOutlineHome className="iCON" /> <span>Home</span>
          </div>
        </Link>
        <Link to="/students/assignments">
          <div className="iCon">
            {" "}
            <SlBookOpen className="iCON" /> <span>Assesments</span>
          </div>
        </Link>

        <Link to="/students/trial">
          <div className="iCon">
            {" "}
            <BsHexagonHalf className="iCON" /> <span>Trial</span>
          </div>
        </Link>
      </div>
      <div onClick={handleLogOut} className="logof">
        {" "}
        <BiLogOutCircle className="iCON" /> <span>Logout</span>
      </div>
    </div>
  );
}

export default StudentSideBar;
