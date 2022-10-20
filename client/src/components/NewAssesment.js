import React from 'react'
import Congratulations from './Congratulations';
import Question from './Question';
import SendInvite from './SendInvite';
import Sidebar from './Sidebar'
import Title from './Title';

function NewAssesment() {
  return (
    <div className="asses">
      <Sidebar className=".side-nav" />
      <div className="content">
        <div className="A-title">
          <h1> New Assesment</h1>
        </div>
        <Congratulations/>
      </div>
    </div>
  );
}

export default NewAssesment
