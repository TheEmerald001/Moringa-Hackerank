import React, {useState} from 'react'
import Congratulations from './Congratulations';
import Question from './Question';
import SendInvite from './SendInvite';
import Sidebar from './Sidebar'
import Title from './Title';

function NewAssesment() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        title: "",
        question:{
            name:"",
            optionOne:"",
            optionTwo:"",
            optionThree:"",
            optionFour:"",
            correctAns:""
        },
        inviteLinks: []
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

    const componentList = [
        <Title page={page} setPage={setPage} handleChange={handleChange} formData={formData}/>,
        <Question page={page} setPage={setPage} handleChange={handleChange} formData={formData}/>,
        <SendInvite page={page} setPage={setPage} handleChange={handleChange} formData={formData}/>,
        <Congratulations page={page} setPage={setPage} handleChange={handleChange} formData={formData}/>
      ];


  return (
    <div className="asses">
      <Sidebar className=".side-nav" />
      <div className="content">
        <div className="A-title">
          <h1> New Assesment</h1>
        </div>
         {componentList[page]}
      </div>
    </div>
  );
}

export default NewAssesment
