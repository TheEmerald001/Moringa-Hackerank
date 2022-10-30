import React from 'react'
import StudentSideBar from '../components/StudentSideBar'
import Test from './Test'


function StudentAssignment() {
  return (
    <div className='asses'>
      <StudentSideBar/>
      <div className='obscure'>
        <div className='leFT'>
          <div className='miniNav'>
            <span>QUIZ</span>
            <span>KATA</span>
            <span>PROS</span>
          </div>
        </div>
        <div className='riGHT'>
          <Test/>
        </div>
      </div>
    </div>
  )
}

export default StudentAssignment