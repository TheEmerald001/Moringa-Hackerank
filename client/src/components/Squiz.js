import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import QuizPage from '../pages/QuizPage';
import Test from '../pages/Test'
import Question from './Question';
import StudentSideBar from './StudentSideBar';

function Squiz() {
 const location = useLocation();
 const assessmentId = location.pathname.split("/")[3];
 const [assessment, setAssessment] = useState({});
 const tutor_id = assessment.tutor_id
 const student_id = useSelector((state) => state.student?.currentUser?.id);

 
  useEffect(() => {
    const getAssessment = async () => {
    const { data } = await axios.get(`/assessments/${assessmentId}`);
      setAssessment(data);
    };
    getAssessment();
  }, [assessmentId]);

  
  return (
    <div className="asses">
      <StudentSideBar />
      <div className="obscure">
        <div className="leFT">
        <div className='miniNav'>
            <Link to={`/students/assessments/${assessmentId}/quiz`}>
              <span>QUIZ</span>
            </Link>
            <Link to={`/students/assessments/${assessmentId}/kata`}>
              <span>KATA</span>
            </Link>
            <Link to={`/students/assessments/${assessmentId}/pros`}>
              <span>PROS</span>
            </Link>

          </div>
        </div>
        <div className="riGHT">
          <div className="TItle">{assessment?.assessment_title}</div>
          <QuizPage assessment={assessment}/>
        </div>
      </div>
    </div>
  );
}

export default Squiz