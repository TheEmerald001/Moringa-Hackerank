import React from 'react';
import './announcement.css';


export default function StudentAnnouncement(){
  return(
    <>
      <nav className='nav'>
       <h1 className='header'>Dashboard</h1>
     </nav>
    <div>
      <div>
        <p>Welcome ! You've been invited to take an MCQ by Hamida.</p>
      </div>
      <a href ="/students/trial"><button>Go to Trial</button></a> <button>Decline</button>
     </div>
    </>
  )
}
