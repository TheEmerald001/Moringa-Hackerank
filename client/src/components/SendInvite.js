import React, { useState } from 'react'
// import invite from '../CSS/_sendInvite.scss'
import Select from 'react-select';


function SendInvite({page, setPage, }) {
  const [selectedlinks , setSelectedlinks] = useState([])
  

  // dummy student emails
  const emails = [
  {value: "joedoe@email.com",label: "joedoe@email.com",},
  {value: "marydoe@email.com",label: "marydoe@email.com",},
  {value: "masai@email.com",label: "masai@email.com",},
  ];




  return (
    <div className="invite">
      <div className='heading'>Invite Students</div>
      <div className='mid'>
        <label>Select Email</label>
       <Select  
                isMulti
                closeMenuOnSelect={false}
                className="choise "
                placeholder="Select Students"
                options={emails}
                isClearable={true}
                noOptionsMessage={() => "Student not found"}
                isSearchable = {true}
                onChange={(item) => setSelectedlinks(item)}
                
                
              />

      </div>
      <div className='lower'>
          <button  onClick={() => {setPage(page - 1)}}>Back</button>
          <button onClick={() => {
              console.log(selectedlinks)
              setPage(page + 1)}}>Finish</button>
      </div>
    </div>
  );
}

export default SendInvite