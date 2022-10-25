import React, { useState } from "react";
import { BrowserRouter as Router , Link } from "react-router-dom";
import Question from "../components/Question";
import quiz from "../Helpers/quiz";


function StudentTrial() {
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [score, setScore] = useState(0);
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  const handleQuestionAnswered = (correct) => {
    if (currentQuestionId < questions.length) {
      setCurrentQuestionId((currentQuestionId) => currentQuestionId + 1 );
    } else {
      setCurrentQuestionId(null);
    }
    if (correct) {
      setScore((score) => score + 1);
    }
  };

  return (
      <div>
        {currentQuestion ? (
          <Question
            question={currentQuestion}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <>
          <Link to="/">
           <button>Click to Assignments</button>
          </Link>
            <h4>Total Correct: {score}</h4>
          </>
        )}
    </div>
  );
}

export default StudentTrial







