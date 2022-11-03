import React from 'react'
// import congrats from '../CSS/_congratulations.scss'
import confeti from '../assests/images/confeti.png'
import { useNavigate } from "react-router-dom";

function Congratulations() {
    let navigate = useNavigate();
    
  return (
    <div className='congrats'>
        <div>
            <h1>Congratulations!</h1>
        </div>
        <div>
            <h5>New Assesment has been created</h5>
        </div>
        <div>
            <img src={confeti} alt='Yey'/>
            {/* <iframe src="https://giphy.com/embed/5jT0jaNDsM6Ik7X9yq" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/justin-background-confetti-5jT0jaNDsM6Ik7X9yq"></a></p> */}
        </div>
        <button onClick={()=>{navigate("/assessments")}}>CLOSE</button>
    </div>
  )
}

export default Congratulations