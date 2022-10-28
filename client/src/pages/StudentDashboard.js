import React from 'react'

import StudentSideBar from '../components/StudentSideBar'
import studentDashboard from "../CSS/_studentDashboard.scss";
import { BsFillBellFill } from 'react-icons/bs';

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
            <h2>Notifications <BsFillBellFill className='n-icon'/></h2>
          </div>
          <div className='gradE'>Grades</div>
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
