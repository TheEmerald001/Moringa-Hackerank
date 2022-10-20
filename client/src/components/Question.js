import React from 'react'
import question from '../CSS/_question.scss'

function Question({page, setPage, handleChange,formData}) {
  return (
    <div className="question">
      <form>
        <input type="text" placeholder="Question" value={formData.question.name} onChange={handleChange} name="name"/>
        <input type="text" placeholder="Option A"  value={formData.question.optionOne} onChange={handleChange} name="optionOne"/>
        <input type="text" placeholder="Option B"  value={formData.question.optionTwo} onChange={handleChange} name="optionTwo"/>
        <input type="text" placeholder="Option C"  value={formData.question.optionThree} onChange={handleChange} name="optionThree"/>
        <input type="text" placeholder="Option D"  value={formData.question.optionFour} onChange={handleChange} name="optionFour"/>
        <label>Select correct answer</label>
        <select className='opt' value={formData.question.correctAns} onChange={handleChange} name="correctAns" >
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
        </select>
      </form>
      <button onClick={() => {setPage(page - 1)}} >Previous</button>
      <button onClick={() => {setPage(page + 1)}}>NEXT</button>
    </div>
  );
}

export default Question