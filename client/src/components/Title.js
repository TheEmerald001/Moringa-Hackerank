import React from 'react'
import title from '../CSS/_title.scss'

function Title({page, setPage, handleChange,formData }) {
  return (
    <div className='a-title'>
        <div className='heading'>Kindly choose assessment title</div>
        <div>
            <input type="text" placeholder="Title" value={formData.title} name="title" onChange={handleChange}/>
        </div>
        <div>
            <button onClick={() => {setPage(page + 1);}} >NEXT</button>
        </div>
    </div>
  )
}

export default Title