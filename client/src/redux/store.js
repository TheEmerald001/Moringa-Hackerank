import { configureStore, combineReducers } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";
import contactReducer from "./contactSlice";
import userReducer from "./userSlice";
import assessmentReducer from "./assessmentSlice";

const rootReducers = combineReducers({
  user: userReducer,
  quiz: quizReducer,
  assessment: assessmentReducer,
  contact: contactReducer,
});
const store = configureStore({
  reducer: rootReducers,
});

export default store;
