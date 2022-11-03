import { createSlice } from "@reduxjs/toolkit";
import { logoutFunc } from "../Helpers/auth.js";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStudentStart: (state) => {
      state.isFetching = true;
    },
    loginStudentSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginStudentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logStudentOut: (state) => {
      state.currentUser = null;
      logoutFunc();
    },
  },
});

export const {
  loginStudentStart,
  loginStudentSuccess,
  loginStudentFailure,
  logStudentOut,
} = studentSlice.actions;
export default studentSlice.reducer;
