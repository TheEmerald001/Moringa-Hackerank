import React from 'react'
import Calendar from 'react-calendar';
import Sidebar from '../components/Sidebar';
// import dashboard from '../CSS/_dashboard.scss'
import 'react-calendar/dist/Calendar.css';

function TmHome() {
  return (
    <div className="asses">
      <Sidebar />
      <div className="content">
        <div className="A-title">
          <h1>DASHBOARD</h1>
        </div>
        <div className='calender'>
            <Calendar className='cal'/>
        </div>
        <div className='stats'>
            <div className='stat1'>
                <h5>STUDENTS NUMBER</h5>
                <p>210</p>
            </div>
            <div className='stat1'>
                <h5>ASSESSMENTS CREATED</h5>
                <p>12</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TmHome