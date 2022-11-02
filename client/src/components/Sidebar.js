import React from "react";
import sidebar from "../CSS/_sidebar.scss";
import image from "../assests/images/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { AiFillHome } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { MdGrade } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logMentorOut } from "../redux/mentorSlice";

function Sidebar() {
  const mentor = useSelector((state) => state.mentor?.currentUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logMentorOut());
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
        <span>
          {mentor?.firstname}
          {mentor?.lastname}
        </span>
      </div>
      <div className="icon-container">
        <Link to="/mentors">
          <div className="iCon">
            <AiFillHome className="iCON" /> <span>Home</span>
          </div>
        </Link>
        <Link to="/mentors/assessments">
          <div className="iCon">
            {" "}
            <FaBook className="iCON" /> <span>Assessments</span>
          </div>
        </Link>

        <Link to="/mentors/grades">
          <div className="iCon">
            {" "}
            <MdGrade className="iCON" /> <span>Grades</span>
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

export default Sidebar;
