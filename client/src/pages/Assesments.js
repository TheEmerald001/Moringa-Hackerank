import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
// import assesment from "../CSS/_assesment.scss";
import { BiBookAdd } from "react-icons/bi";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Assesments() {
  let navigate = useNavigate();
  return (
    <div className="asses">
      <Sidebar />
      <div className="content">
        <div className="A-title">
          <h1>Assessment</h1>
        </div>
        <div className="add">
          <div>
            <BiBookAdd className="a-icon" />{" "}
            <span
              onClick={() => {
                navigate("/newAssessment");
              }}
            >
              Create New Assessment
            </span>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search Assesment"
              name="search"
              className="Search"
            />
          </div>
        </div>
        <div className="as-container">
          <div className="Assesment">
            <span>Assesment 1</span>
            <span>
              <MdModeEditOutline />
            </span>
            <span>
              <MdDelete />
            </span>
          </div>
          <div className="Assesment">
            <span>Assesment 2</span>
            <span>
              <MdModeEditOutline />
            </span>
            <span>
              <MdDelete />
            </span>
          </div>
          <div className="Assesment">
            <span>Assesment 3</span>
            <span>
              <MdModeEditOutline />
            </span>
            <span>
              <MdDelete />
            </span>
          </div>
          <div className="Assesment">
            <span>Assesment 4</span>
            <span>
              <MdModeEditOutline />
            </span>
            <span>
              <MdDelete />
            </span>
          </div>
          <div className="Assesment">
            <span>Assesment 5</span>
            <span>
              <MdModeEditOutline />
            </span>
            <span>
              <MdDelete />
            </span>
          </div>
          <div className="Assesment">
            <span>Assesment 5</span>
            <span>
              <MdModeEditOutline />
            </span>
            <span>
              <MdDelete />
            </span>
          </div>
          <div className="Assesment">
            <span>Assesment 5</span>
            <span>
              <MdModeEditOutline />
            </span>
            <span>
              <MdDelete />
            </span>
          </div>
          <div className="Assesment">
            <span>Assesment 5</span>
            <span>
              <MdModeEditOutline />
            </span>
            <span>
              <MdDelete />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assesments;
