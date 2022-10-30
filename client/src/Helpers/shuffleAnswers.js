export const shuffleAnswers = (question) => {
  const unshuffleAnswers = [question.correct_answer, ...question.answers];

  return unshuffleAnswers
    .map((answer) => ({ sort: Math.random(), value: answer }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
};
