import { createSlice } from "@reduxjs/toolkit";

const assignmentSlice = createSlice({
  name: "assessment",
  initialState: {
    assessments: [],
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
    // Get all assessments
    getAssessmentsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAssessmentsSuccess: (state, action) => {
      state.isFetching = false;
      state.assessments = action.payload;
    },
    getAssessmentsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // Delete assessment
    deleteAssessmentStart: (state) => {
      state.isFetching = true;
    },
    deleteAssessmentSuccess: (state, action) => {
      state.isFetching = false;
      state.assessments.splice(
        state.assessments.findIndex(
          (assessment) => assessment.id === action.payload
        ),
        1
      );
    },
    deleteAssessmentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  addAssessmentStart,
  addAssessmentSuccess,
  addAssessmentFailure,
  getAssessmentsStart,
  getAssessmentsSuccess,
  getAssessmentsFailure,
  deleteAssessmentStart,
  deleteAssessmentSuccess,
  deleteAssessmentFailure,
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
