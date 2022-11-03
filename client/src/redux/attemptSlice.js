import { createSlice } from "@reduxjs/toolkit";

const AttemptSlice = createSlice({
  name: "attempt",
  initialState: {
    attempts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // Get all Attempts
    getAttemptStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAttemptSuccess: (state, action) => {
      state.isFetching = false;
      state.attempts = action.payload;
    },
    getAttemptFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // Add Attempt
    addAttemptStart: (state) => {
      state.isFetching = true;
    },
    addAttemptSuccess: (state, action) => {
      state.isFetching = false;
      state.attempts.push(action.payload);
    },
    addAttemptFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getAttemptStart,
  getAttemptSuccess,
  getAttemptFailure,
  addAttemptStart,
  addAttemptSuccess,
  addAttemptFailure,
} = AttemptSlice.actions;

export default AttemptSlice.reducer;
