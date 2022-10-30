import { configureStore, combineReducers } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";
import contactReducer from "./contactSlice";
import mentorReducer from "./mentorSlice";
import studentReducer from "./studentSlice";
import assessmentReducer from "./assessmentSlice";

const rootReducers = combineReducers({
  mentor: mentorReducer,
  student: studentReducer,
  quiz: quizReducer,
  assessment: assessmentReducer,
  contact: contactReducer,
});
const store = configureStore({
  reducer: rootReducers,
});

export default store;
