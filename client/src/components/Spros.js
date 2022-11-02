import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import StudentSideBar from './StudentSideBar';

function Spros() {
  const location = useLocation();
 const assessmentId = location.pathname.split("/")[3];
  
  const [assessment, setAssessment] = useState({});
  const [answers , setAnswers] = useState('')

  const formdata = '';
 
  useEffect(() => {
    const getAssessment = async () => {
    const { data } = await axios.get(`/assessments/${assessmentId}`);
      setAssessment(data);
    };
    getAssessment();
  }, [assessmentId]);

  function handleChange (event){
    const name = event.target.name;
    let value = event.target.value;
    // setAnswers({
    //     ...newInfo,
    //     [name]:value
    // })
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
            <div className="TItle">Assesment Name</div>
            <div className="qCONTAINER">
            {assessment?.pros?.map((pros)=>(
                 <div className="qONE">
                 <span>{pros.question}</span>
                 <em>{pros.instructions}</em>
                 <textarea type='text' rows="10" cols="10" name='answer' value='answer' onChange={handleChange}/>
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

export default Spros