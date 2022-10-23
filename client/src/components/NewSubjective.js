import React, {useState} from 'react'
import Congratulations from './Congratulations';
import SendInvite from './SendInvite';
import Sidebar from './Sidebar'
import Subjective from './Subjective';
import Title from './Title';

function NewSubjective() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        title: ""
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
        <Subjective page={page} setPage={setPage} />,
        <SendInvite page={page} setPage={setPage} />,
        <Congratulations page={page} setPage={setPage} handleChange={handleChange} formData={formData}/>
      ];


  return (
    <div className="asses">
      <Sidebar className=".side-nav" />
      <div className="content">
        <div className="A-title">
          <h1> New Subjective Assessment</h1>
        </div>
         {componentList[page]}
      </div>
    </div>
  );
}

export default NewSubjective
