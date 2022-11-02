import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StudentSideBar from '../components/StudentSideBar'
const url = 'https://www.codewars.com/api/v1/code-challenges/valid-braces'

function Trial() {
  const [data, setData] = useState()
 


  useEffect(() =>{
    axios.get(url).then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  },[])

  console.log(data)

  return (
    <div className='asses'>
        <StudentSideBar/>
        <div className='content'>
        <div className="A-title">
          <h1>KATA SAMPLE</h1>
        </div>
        <div className='triContainer'>
          <div >
            {data?.languages.map((lang)=>(
              <li className='lang' >{lang}</li>
            ))}
          </div>
          <div className='tags'>TAGS:[{data?.tags}]</div>
          <div className='sample'>QUESTION</div>
          <div className='question'>{data?.description}</div>
          <div>
            <textarea className='textarea' type='text' rows="20" cols="150"/>
          </div>
          <div className='buTt'>
            <span className='trBUT'>SUBMIT</span>
          </div>
        </div>

          
            
        </div>

    </div>
  )
}

export default Trial
;





  

  
