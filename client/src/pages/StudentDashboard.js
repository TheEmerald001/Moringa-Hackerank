import React, { useEffect, useState } from "react";
import StudentSideBar from "../components/StudentSideBar";
// import studentDashboard from "../CSS/_studentDashboard.scss";
import { BsFillBellFill } from "react-icons/bs";
import { MdGrade } from "react-icons/md";
import axios from "axios";
import data from "../Helpers/data";
import { Link } from "react-router-dom";
import { addAttempt } from "../redux/apiCall";
import { useDispatch, useSelector } from "react-redux";

function StudentDashboard() {
  const [invites, setInvites] = useState([]);
  const [message, setMessage] = useState({});
  const [accepted, setAccepted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getInvites = async () => {
      const { data } = await axios.get("/invites");
      setInvites(data);
    };
    getInvites();
  }, []);

  const acceptInvite = async (id) => {
    let updateStatus = { status: true };
    setAccepted(true);

    try {
      const { data } = await axios.patch(`/invites/${id}`, updateStatus);
      setMessage(data.message.message);
    } catch (error) {
      console.log(error);
    }
  };

  const createAttempt = async (invite) => {
    let attemptData = {
      assessment_id: invite.assessment.id,
      tutor_id: invite.tutor.id,
      student_id: invite.student.id,
    };

    addAttempt(attemptData, dispatch);
  };

  return (
    <div className="asses">
      <StudentSideBar />
      <div className="content">
        <div className="A-title">
          <h1>HOME</h1>
        </div>
        <div className="dashboarD">
          <div className="notI">
            <h2>
              Notifications <BsFillBellFill className="n-icon" />{" "}
            </h2>

            <div className="notiContainer">
              {invites.map((invite) => (
                <div key={invite.id} className="notificatioN">
                  <span className="titlE">Assessment invitation</span>
                  {!accepted && (
                    <p>
                      You have been invited to undertake:{" "}
                      {invite.assessment.assessment_title}
                    </p>
                  )}

                  <div className="nAv">
                    {!accepted && (
                      <>
                        <span
                          className="accepT"
                          onClick={() => acceptInvite(invite.id)}
                        >
                          Accept
                        </span>
                        <span
                          onClick={() => createAttempt(invite)}
                          className="declinE"
                        >
                          Decline
                        </span>
                      </>
                    )}
                  </div>
                  {accepted && (
                    <div className="feedback">
                      <p className="message">{message.message}</p>

                      <span className="attempt">Attempt</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="gradE">
            <h2>
              Grades <MdGrade className="n-icon" />
            </h2>
            <div className="headinG">
              <span>ASSESSMENT NAME</span>
              <span>DUE DATE</span>
              <span>SCORE</span>
            </div>
            <div className="gradeCon">
              <div className="grADE">
                <span>Assessment one</span>
                <span>08/05/22</span>
                <span>70%</span>
              </div>
              <div className="grADE">
                <span>Assessment two</span>
                <span>12/05/22</span>
                <span>40%</span>
              </div>
              <div className="grADE">
                <span>Assessment three</span>
                <span>07/05/22</span>
                <span>80%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
