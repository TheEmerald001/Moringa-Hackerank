import React from 'react'
import question from '../CSS/_question.scss'

function Question() {
  return (
    <div className="question">
      <form>
        <input type="text" placeholder="Question" />
        <input type="text" placeholder="Option A" />
        <input type="text" placeholder="Option B" />
        <input type="text" placeholder="Option C" />
        <input type="text" placeholder="Option D" />
        <label>Select correct answer</label>
        <select className='opt'>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
        </select>
      </form>
      <button>NEXT</button>
    </div>
  );
}

export default Question