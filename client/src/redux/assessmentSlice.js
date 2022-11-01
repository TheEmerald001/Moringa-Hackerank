import { createSlice } from "@reduxjs/toolkit";

const assignmentSlice = createSlice({
  name: "assessment",
  initialState: {
    assessments: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    // Add assessment
    addAssessmentStart: (state) => {
      state.isFetching = true;
    },
    addAssessmentSuccess: (state, action) => {
      state.isFetching = false;
      state.assessments.push(action.payload);
    },
    addAssessmentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addQuiz: (state, action) => {
      const quizzes = state.assessments.quizzes.push(action.payload);
      state.assessments = {
        ...state.assessments,
        quizzes,
      };
    },
  },
});

export const {
  addAssessmentStart,
  addAssessmentSuccess,
  addAssessmentFailure,
  addQuiz,
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
