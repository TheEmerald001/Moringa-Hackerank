import axios from "axios";
import {
  getQuestionStart,
  getQuestionSuccess,
  getQuestionFailure,
} from "./quizSlice";

export const fetchQuiz = async (dispatch) => {
  dispatch(getQuestionStart());
  try {
    const { data } = await axios.get("http://localhost:3000/quizzes");
    dispatch(getQuestionSuccess(data));
  } catch (error) {
    dispatch(getQuestionFailure());
  }
};
