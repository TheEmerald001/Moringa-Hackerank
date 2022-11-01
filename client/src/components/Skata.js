import React from 'react'
import { Link } from 'react-router-dom';
import StudentSideBar from './StudentSideBar';

function Skata() {
  return (
    <div className="asses">
      <StudentSideBar/>
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
          <div>
            <div className="TItle">Assesment Name</div>
            <div className="qCONTAINER">
              <div className="qONE">
                <span>What is the advantage of a SINGEL PAGE application</span>
                <em>This is the instruction</em>
                <input type="text" placeholder="Answer here" />
              </div>

              <div className="qONE">
                <span>What is the advantage of a SINGEL PAGE application</span>
                <em>This is the instruction</em>
                <input type="text" placeholder="Answer here" />
              </div>
            </div>
            <div className="qBUtton">
              <span>SUBMIT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skata


