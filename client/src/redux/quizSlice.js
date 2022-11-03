import { createSlice } from "@reduxjs/toolkit";
import questions from "../Helpers/data";
import { shuffleAnswers } from "../Helpers/shuffleAnswers";
const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions,
    currentQuestionIndex: 0,
    showResults: false,
    correctAnswerCount: 0,
    // answers: shuffleAnswers(questions[0]),
    currentAnswer: "",
  },
  reducers: {
    getQuestions: (state, action) => {
      return state;
    },
    nextQuestion: (state) => {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;

      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;

      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);

      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: "",
      };
    },
    selectedAnswer: (state, action) => {
      const correctAnswerCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount,
      };
    },
    restart: () => {
      return {
        questions,
        currentQuestionIndex: 0,
        showResults: false,
        correctAnswerCount: 0,
        answers: shuffleAnswers(questions[0]),
        currentAnswer: "",
      };
    },
  },
});

export const { getQuestions, nextQuestion, selectedAnswer, restart } =
  quizSlice.actions;
export default quizSlice.reducer;
