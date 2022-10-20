import React from 'react'
import title from '../CSS/_title.scss'

function Title() {
  return (
    <div className='a-title'>
        <div className='heading'>Kindly choose assessment title</div>
        <div>
            <input type="text" placeholder="Title" />
        </div>
        <div>
            <button>NEXT</button>
        </div>
    </div>
  )
}

export default Title