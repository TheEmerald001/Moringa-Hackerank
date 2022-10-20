import React from 'react'
import invite from '../CSS/_sendInvite.scss'

function SendInvite({page, setPage, handleChange,formData}) {
  return (
    <div className="invite">
      <div className='heading'>Invite Students</div>
      <div className='mid'>
        <label>Select Email</label>
        <select className="choise" value={formData.inviteLinks} onChange={handleChange} name="inviteLinks">
          <option className='oPT' value="a">A</option>
          <option className='oPT' value="b">B</option>
          <option className='oPT' value="c">C</option>
          <option className='oPT' value="d">D</option>
        </select>
        <button>Invite</button>
      </div>
      <div className='lower'>
          <button  onClick={() => {setPage(page - 1)}}>Back</button>
          <button onClick={() => {
              console.log(formData)
              setPage(page + 1)}}>Finish</button>
      </div>
    </div>
  );
}

export default SendInvite