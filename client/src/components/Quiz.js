import React, { useState } from "react";
import question from '../CSS/_question.scss'
import { GoDiffAdded } from 'react-icons/go';

function Quiz({page, setPage}) {
    const [allQuestions, setAllQuestions] = useState([
        { name: "", optionA: "", optionB: "",optionC: "",optionD: "", correctAns:""},
      ]);

    const handleAddQuestions = () => {
        const values = [...allQuestions];
        values.push({
            name: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAns: "",
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
    <div  className="question">
        <div className="q-form">
            {allQuestions.length > 0 && (
                <>
                {allQuestions.map((field,index)=> (
                    <div className="q-container">
                        <h4>Question {index +1}</h4>
                        <input type='text' name='name' placeholder='Enter Question' value={field.name} onChange={(event) => handleInputChange(index,event)}/>
                        <input type="text" name="optionA" placeholder="Enter option A" value={field.optionA} onChange={(event) =>handleInputChange(index, event) }/>
                        <input type="text" name="optionB" placeholder="Enter option B" value={field.optionB} onChange={(event) =>handleInputChange(index, event) }/>
                        <input type="text" name="optionC" placeholder="Enter option C" value={field.optionC} onChange={(event) =>handleInputChange(index, event) }/>
                        <input type="text" name="optionD" placeholder="Enter option D" value={field.optionD} onChange={(event) =>handleInputChange(index, event) }/>
                        <select className='opt' onChange={(event) =>handleInputChange(index, event) } value={field.correctAns} name='correctAns'>
                          
                            <option value="a">A</option>
                            <option value="b">B</option>
                            <option value="ab">AB</option>
                            <option value="o">O</option>
                        </select>
                    </div>
                ))}</>
            )}

        </div>
        <div className='q-add'> <GoDiffAdded className='q-icon'/> <span onClick={() => handleAddQuestions()}>Add Question</span> </div>
        
    </div>
  )
}

export default Quiz