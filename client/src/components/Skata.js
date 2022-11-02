import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Assessments from '../pages/Assessments';
import StudentSideBar from './StudentSideBar';

function Skata() {
 const location = useLocation();
 const assessmentId = location.pathname.split("/")[3];
  
  const [assessment, setAssessment] = useState({});
  
 
  useEffect(() => {
    const getAssessment = async () => {
    const { data } = await axios.get(`/assessments/${assessmentId}`);
      setAssessment(data);
    };
    getAssessment();
  }, [assessmentId]);
  

  function handleChange(e){
    
  }
  return (
    <div className="asses">
      <StudentSideBar/>
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
          <div>
            <div className="TItle">{assessment?.assessment_title}</div>
            <div className="qCONTAINER">

              {assessment?.kataas?.map((kata)=>(
                 <div key={kata.id} className="qONE">
                 <span>{kata.question}</span>
                 <em>{kata.instructions}</em>
                 <input type="text" placeholder="Answer here" name='answer' value='answer' onChange={handleChange}/>
               </div>
              ))}
             

             
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