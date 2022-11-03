import "./Answer.css";

const Answer = ({
  answerText,
  index,
  onSelectedAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const letterMapping = ["A", "B", "C", "D"];
  const selectedAnswer = currentAnswer === answerText;
  const selectClass = selectedAnswer ? "selected-answer" : "";
  const disableClass = currentAnswer ? "disabled-answer" : "";

  return (
    <article
      className={`answer ${selectClass} ${disableClass}`}
      onClick={() => onSelectedAnswer(answerText)}
    >
      {letterMapping[index]}. {answerText}
    </article>
  );
};

export default Answer;
