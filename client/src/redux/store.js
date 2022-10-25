import { configureStore, combineReducers } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";
import contactReducer from "./contactSlice";

const rootReducers = combineReducers({
  quiz: quizReducer,
  contact: contactReducer,
});
const store = configureStore({
  reducer: rootReducers,
});

export default store;
