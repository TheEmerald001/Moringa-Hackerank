
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Router, Routes, useLocation } from 'react-router-dom'
import Skata from '../components/Skata'
import Spros from '../components/Spros'
import Squiz from '../components/Squiz'
import StudentSideBar from '../components/StudentSideBar'
import Test from './Test'

function StudentAssignment() {
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


  const createAttempt= async (invite) =>{
    let attemptData = {assessment_id:invite.assessment.id, tutor_id:invite.tutor.id, student_id:invite.student.id}
   //  console.log(invite)
    try {
      const {data} = await axios.post(`/attempts`,attemptData )
     
     console.log(data.id)
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <div className='asses'>
      <StudentSideBar/>
      <div className='obscure'>
        <div className='leFT'>
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
        <div className='riGHT'>
          <div>
              YOu can attempt either the mcq ,kata or pros
          </div>

         

        </div>
      </div>
    </div>
  )
}

export default StudentAssignment
