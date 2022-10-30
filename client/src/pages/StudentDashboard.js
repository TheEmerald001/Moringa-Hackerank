import React from 'react'
import StudentSideBar from '../components/StudentSideBar'
// import studentDashboard from "../CSS/_studentDashboard.scss";
import { BsFillBellFill } from 'react-icons/bs';
import { MdGrade } from 'react-icons/md';

function StudentDashboard() {
  return (
    <div className="asses">
      <StudentSideBar/>
      <div className="content">
        <div className="A-title">
          <h1>HOME</h1>
        </div>
        <div className='dashboarD'>
          <div className='notI'>
            <h2>Notifications <BsFillBellFill className='n-icon'/> </h2>
            <div className='notiContainer'>

              <div className='notificatioN'>
                <span className='titlE'>Course invitation</span>
                <p>You have been invited to undertake CSS assessment</p>
                <div className='nAv'>
                  <span className='accepT'>Accept</span>
                  <span className='declinE'>Decline</span>
                </div>
              </div>

              <div className='notificatioN'>
                <span className='titlE'>Course invitation</span>
                <p>You have been invited to undertake java assessment</p>
                <div className='nAv'>
                  <span className='accepT'>Accept</span>
                  <span className='declinE'>Decline</span>
                </div>
              </div>

              <div className='notificatioN'>
                <span className='titlE'>Course invitation</span>
                <p>You have been invited to undertake HTML assessment</p>
                <div className='nAv'>
                  <span className='accepT'>Accept</span>
                  <span className='declinE'>Decline</span>
                </div>
              </div>

            </div>
          </div>
          <div className='gradE'>
            <h2>Grades <MdGrade className='n-icon'/></h2>
            <div className='headinG'>
              <span>ASSESSMENT NAME</span>
              <span>DUE DATE</span>
              <span>SCORE</span>
            </div>
            <div className='gradeCon'>
              <div className='grADE'>
                <span>Assessment one</span>
                <span>08/05/22</span>
                <span>70%</span>
              </div>
              <div className='grADE'>
                <span>Assessment two</span>
                <span>12/05/22</span>
                <span>40%</span>
              </div>
              <div className='grADE'>
                <span>Assessment three</span>
                <span>07/05/22</span>
                <span>80%</span>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default StudentDashboard













































































































// import React from "react";
// import styled from "styled-components";
// import StudentAnnouncement from "../components/StudentAnnouncement";
// import StudentHero from "../components/StudentHero";
// import StudentSideBar from "../components/StudentSideBar";

// const StudentDashboard = () => {
//   return (
//     <Container>
//       <StudentSideBar />
//       <HomeContainer>
//         <StudentHero />
//         <StudentAnnouncement />
//       </HomeContainer>
//     </Container>
//   );
// };

// export default StudentDashboard;

// const Container = styled.main`
//   display: flex;
//   color: #1e144f;
//   background-color: #f6f7fb;
// `;

// const HomeContainer = styled.section`
//   flex: 8;
// `;
