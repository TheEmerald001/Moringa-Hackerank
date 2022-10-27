import { configureStore, combineReducers } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";
import contactReducer from "./contactSlice";
import userReducer from "./userSlice";

const rootReducers = combineReducers({
  user: userReducer,
  quiz: quizReducer,
  contact: contactReducer,
});
const store = configureStore({
  reducer: rootReducers,
});

export default store;
