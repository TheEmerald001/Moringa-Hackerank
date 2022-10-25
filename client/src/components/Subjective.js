
import React, { useState } from "react";
import question from '../CSS/_question.scss'
import { GoDiffAdded } from 'react-icons/go';


function Subjective({page, setPage}) {
    const [allQuestions, setAllQuestions] = useState([
        { name: ""},
      ]);

    const handleAddQuestions = () => {
        const values = [...allQuestions];
        values.push({
            name: ""
            
        });
        setAllQuestions(values);
    };


    const handleRemoveQuestions = (index) => {
        const values = [...allQuestions];
        values.splice(index, 1);
        setAllQuestions(values);
    };

    const handleInputChange = (index, event) => {
        const values = [...allQuestions];
        const updatedValue = event.target.name;
        values[index][updatedValue] = event.target.value;

        setAllQuestions(values);
    };


    console.log(allQuestions);
    
  return (
    <div className='question' >
       
        
        <div className='q-form'>
            {allQuestions.length > 0 && (
                <>
                {allQuestions.map((field,index)=> (
                    <div className='q-container'>
                        <h4>Question  {index +1}</h4>
                        <input type='text' name='name' placeholder='Enter Question' value={field.name} onChange={(event) => handleInputChange(index,event)}/>
                    </div>
                ))}</>
            )}

        </div>
        <div className='q-add'> <GoDiffAdded className='q-icon'/> <span onClick={() => handleAddQuestions()}>Add Question</span> </div>
        <div className='q-buttons'>
        <button onClick={() => {setPage(page - 1)}} >Previous</button>
        <button onClick={() => {setPage(page + 1)}}>NEXT</button>
      </div>
    </div>
  )
}

export default Subjective