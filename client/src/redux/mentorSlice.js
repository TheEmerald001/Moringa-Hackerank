import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { loginMentorStart, loginMentorSuccess, loginMentorFailure } =
  mentorSlice.actions;
export default mentorSlice.reducer;
