
import React, { useState } from "react";
import question from '../CSS/_question.scss'
import { GoDiffAdded } from 'react-icons/go';

function Question({page, setPage, handleChange,formData}) {
    const [allPlayers, setAllPlayers] = useState([
        { name: "", optionA: "", optionB: "",optionC: "",optionD: "", correctAns:""},
      ]);

    const handleAddPlayers = () => {
        const values = [...allPlayers];
        values.push({
            name: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAns: "",
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
    //dummy will be replaced by actual student emails
    // const options = [
    //     {value: '', text: '--Choose an option--'},
    //     {value: 'apple', text: 'Apple 🍏'},
    //     {value: 'banana', text: 'Banana 🍌'},
    //     {value: 'kiwi', text: 'Kiwi 🥝'},
    //   ];

    console.log(allPlayers);
    
  return (
    <div className='question' >
        {/* <button onClick={() => handleAddPlayers()}>Add Question</button> */}
        
        <div className='q-form'>
            {allPlayers.length > 0 && (
                <>
                {allPlayers.map((field,index)=> (
                    <div className='q-container'>
                        <h4>Question {index +1}</h4>
                        <input type='text' name='name' placeholder='Enter Name' value={field.name} onChange={(event) => handleInputChange(index,event)}/>
                        <input type="text" name="optionA" placeholder="Enter option A" value={field.optionA} onChange={(event) =>handleInputChange(index, event) }/>
                        <input type="text" name="optionB" placeholder="Enter option B" value={field.optionB} onChange={(event) =>handleInputChange(index, event) }/>
                        <input type="text" name="optionC" placeholder="Enter option C" value={field.optionC} onChange={(event) =>handleInputChange(index, event) }/>
                        <input type="text" name="optionD" placeholder="Enter option D" value={field.optionD} onChange={(event) =>handleInputChange(index, event) }/>
                        <select className='opt' onChange={(event) =>handleInputChange(index, event) } value={field.correctAns}>
                           {/* {options.map(option => (
                                <option key={option.value} value={option.value}>
                                {option.text}
                            </option>))} */}
                            <option value="a">A</option>
                            <option value="b">B</option>
                            <option value="ab">AB</option>
                            <option value="o">O</option>
                        </select>
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

export default Question