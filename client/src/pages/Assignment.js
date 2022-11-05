import React, { useEffect, useState } from "react";
import StudentSideBar from "../components/StudentSideBar";
import { GiSiren } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Assignment() {
  let navigate = useNavigate();
  const [assessments, setAssessment] =useState({})

  useEffect(()=>{
    
    const getAssessments = async()=>{
      const {data} = await axios.get('/invites')
      setAssessment(data) 
    }
    getAssessments ();
  },[])


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

          {/* {assessments.map((assessment)=> (
            <div className="iteM" key={assessment?.id}>
              <h5>{assessment?.assessment_title}</h5>
              <span>Due to 12/10/22</span>
              <span className="view" onClick={() => {navigate("id")}}>View</span>
            </div>

          // ))} */}
          <div className="iteM" >
              <h5>Assessment one</h5>
              <span>Due to 12/10/22</span>
              <span className="view" onClick={() => {navigate("id")}}>View</span>
            </div>
          

         

          
        </div>
      </div>
    </div>
  );
}

export default Assignment;


