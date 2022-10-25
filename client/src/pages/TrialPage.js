import React, { useState } from 'react';
import './trialpage.css'


export default function TrialPage() {
	
	const questions = [
		{
			questionText: 'Given an array [1,2,34,5,6,7,8,9], sum it up using a method:',
			answerOptions: [
				{ answerText: 'Use the inject(:+) method', isCorrect: true },
				{ answerText: 'Use the array method', isCorrect: false },
				{ answerText: 'Use the map method', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'What are some of the disadvantages of metaprogramming?',
			answerOptions: [
				{ answerText: 'Reduction of duplicate code', isCorrect: false },
				{ answerText: 'It causes code lags', isCorrect: false },
				{ answerText: 'Used in Sinatra, Rails and Padrino', isCorrect: false },
				{ answerText: 'Increases the complexity of the code', isCorrect: true },
			],
		},
		{
			questionText: 'What is CSRF? How does Rails protect against it?',
			answerOptions: [
				{ answerText: 'CSRF stands for Cross-Site Request Forgery.In order to protect against CSRF attacks, you can add protect_from_forgery to your ApplicationController. This will then cause Rails to require a CSRF token to be present before accepting any POST, PUT, or DELETE requests.', isCorrect: true },
				{ answerText: 'Cross-site-Request', isCorrect: false },
				{ answerText: 'By blocking the site', isCorrect: false },
				{ answerText: 'By Invoking the Active record', isCorrect: false },
			],
		},
		{
			questionText: 'What is the difference between Ruby’s Hash and ActiveSupport’s HashWithIndifferentAccess?',
			answerOptions: [
				{ answerText: 'Through string interpolation', isCorrect: false },
				{ answerText: 'Through retrieval of the equivalent string', isCorrect: false },
				{ answerText: 'Comparison', isCorrect: false },
				{ answerText: 'The Hash class in Ruby’s core library retrieves values by doing a standard == comparison on the keys. This means that a value stored for a Symbol key (e.g. :my_value) cannot be retrieved using the equivalent String (e.g. ‘my_value’). On the other hand, HashWithIndifferentAccess treats Symbol keys and String keys as equivalent so that the following would work:', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<body className='main'>
		<div className='apk'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
          <a href ="/students/assignments"><button3>Click to go to Assignment</button3></a>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button3 onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button3>
						))}
					</div>
				</>
			)}
		</div>
		</body>
	);
}