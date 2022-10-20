import React from 'react'
import invite from '../CSS/_sendInvite.scss'

function SendInvite() {
  return (
    <div className="invite">
      <div className='heading'>Invite Students</div>
      <div className='mid'>
        <label>Select Email</label>
        <select className="choise">
          <option className='oPT' value="a">A</option>
          <option className='oPT' value="b">B</option>
          <option className='oPT' value="c">C</option>
          <option className='oPT' value="d">D</option>
        </select>
        <button>Invite</button>
      </div>
      <div className='lower'>
          <button>Back</button>
          <button>Finish</button>
      </div>
    </div>
  );
}

export default SendInvite