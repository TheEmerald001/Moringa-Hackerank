import React from 'react'
import { Link } from 'react-router-dom';
import Test from '../pages/Test'
import StudentSideBar from './StudentSideBar';

function Squiz() {
  return (
    <div className="asses">
      <StudentSideBar />
      <div className="obscure">
        <div className="leFT">
          <div className="miniNav">
            <Link to="/students/assignments/:id/quiz">
              <span>QUIZ</span>
            </Link>
            <Link to="/students/assignments/:id/kata">
              <span>KATA</span>
            </Link>
            <Link to="/students/assignments/:id/pros">
              <span>PROS</span>
            </Link>
          </div>
        </div>
        <div className="riGHT">
          <div className="TItle">Assesment Name</div>
          <Test />
        </div>
      </div>
    </div>
  );
}

export default Squiz

