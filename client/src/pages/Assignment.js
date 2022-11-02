import React from "react";
import StudentSideBar from "../components/StudentSideBar";

import { GiSiren } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function Assignment() {
  let navigate = useNavigate();
  return (
    <div className="asses">
      <StudentSideBar />
      <div className="content">
        <div className="A-title">
          <h1>Assessments</h1>
        </div>
        <div className="topContainer">
          <div className="nOTICE">
            <h2>
              Notice <GiSiren className="siren" />
            </h2>
            <h4>Don't be late</h4>
            <h5>No exceptions will be allowed</h5>
          </div>
          <div className="searchbaR">
            <input type="text" placeholder="Search Assessment" />
          </div>
        </div>
        <div className="labeL">
          <h1>ASSESSMENTS</h1>
        </div>
        <div className="assesContainer">
          <div className="iteM">
            <h5>Assesment one</h5>
            <span>Due to 12/10/22</span>
            <span className="view" onClick={() => {navigate("id")}}>View</span>
          </div>

         

          
        </div>
      </div>
    </div>
  );
}

export default Assignment;


