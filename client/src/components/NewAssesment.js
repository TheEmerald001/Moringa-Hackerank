import { QuizRounded } from '@mui/icons-material';
import React, {useState} from 'react'
import Congratulations from './Congratulations';
import Quiz from './Quiz';
import SendInvite from './SendInvite';
import Sidebar from './Sidebar'
import Title from './Title';

function NewAssesment() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        title: "",
        
      });
    

      //handlechange
     function handleChange (event){
        const name = event.target.name;
        let value = event.target.value;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    console.log(formData)

    const componentList = [
        <Title page={page} setPage={setPage} handleChange={handleChange} formData={formData}/>,
        <Quiz page={page} setPage={setPage} />,
        <SendInvite page={page} setPage={setPage}  />,
        <Congratulations page={page} setPage={setPage} handleChange={handleChange} formData={formData}/>
      ];


  return (
    <div className="asses">
      <Sidebar className=".side-nav" />
      <div className="content">
        <div className="A-title">
          <h1> New Quiz</h1>
        </div>
         {componentList[page]}
      </div>
    </div>
  );
}

export default NewAssesment
