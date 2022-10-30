import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { loginStudentStart, loginStudentSuccess, loginStudentFailure } =
  studentSlice.actions;
export default studentSlice.reducer;
