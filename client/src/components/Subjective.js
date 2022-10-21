
import React, { useState } from "react";
import question from '../CSS/_question.scss'
import { GoDiffAdded } from 'react-icons/go';


function Subjective({page, setPage}) {
    const [allPlayers, setAllPlayers] = useState([
        { name: ""},
      ]);

    const handleAddPlayers = () => {
        const values = [...allPlayers];
        values.push({
            name: ""
            
        });
        setAllPlayers(values);
    };


    const handleRemovePlayers = (index) => {
        const values = [...allPlayers];
        values.splice(index, 1);
        setAllPlayers(values);
    };

    const handleInputChange = (index, event) => {
        const values = [...allPlayers];
        const updatedValue = event.target.name;
        values[index][updatedValue] = event.target.value;

        setAllPlayers(values);
    };


    console.log(allPlayers);
    
  return (
    <div className='question' >
       
        
        <div className='q-form'>
            {allPlayers.length > 0 && (
                <>
                {allPlayers.map((field,index)=> (
                    <div className='q-container'>
                        <h4>Question {index +1}</h4>
                        <input type='text' name='name' placeholder='Enter Question' value={field.name} onChange={(event) => handleInputChange(index,event)}/>
                    </div>
                ))}</>
            )}

        </div>
        <div className='q-add'> <GoDiffAdded className='q-icon'/> <span onClick={() => handleAddPlayers()}>Add Question</span> </div>
        <div className='q-buttons'>
        <button onClick={() => {setPage(page - 1)}} >Previous</button>
        <button onClick={() => {setPage(page + 1)}}>NEXT</button>
      </div>
    </div>
  )
}

export default Subjective