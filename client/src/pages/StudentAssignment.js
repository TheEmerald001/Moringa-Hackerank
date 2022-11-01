import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Skata from '../components/Skata'
import Spros from '../components/Spros'
import Squiz from '../components/Squiz'
import StudentSideBar from '../components/StudentSideBar'
import Test from './Test'


function StudentAssignment() {
  return (
    <div className='asses'>
      <StudentSideBar/>
      <div className='obscure'>
        <div className='leFT'>
          <div className='miniNav'>
            <Link to='/students/assignments/:id/quiz'>
              <span>QUIZ</span>
            </Link>
            <Link to='/students/assignments/:id/kata'>
              <span>KATA</span>
            </Link>
            <Link to='/students/assignments/:id/pros'>
              <span>PROS</span>
            </Link>
            
            
          </div>
        </div>
        <div className='riGHT'>
          <Squiz/>
        </div>
      </div>
    </div>
  )
}

export default StudentAssignment