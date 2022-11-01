import { createSlice } from "@reduxjs/toolkit";
import { logoutFunc } from "../Helpers/auth.js";
const mentorSlice = createSlice({
  name: "mentor",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginMentorStart: (state) => {
      state.isFetching = true;
    },
    loginMentorSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginMentorFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logMentorOut: (state) => {
      state.currentUser = null;
      logoutFunc();
    },
  },
});

export const {
  loginMentorStart,
  loginMentorSuccess,
  loginMentorFailure,
  logMentorOut,
} = mentorSlice.actions;
export default mentorSlice.reducer;
