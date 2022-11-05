import axios from "axios";

import { logoutFunc } from "../Helpers/auth.js";
import {
  loginMentorStart,
  loginMentorSuccess,
  loginMentorFailure,
} from "./mentorSlice";
import {
  loginStudentStart,
  loginStudentSuccess,
  loginStudentFailure,
} from "./studentSlice";

import {
  addAssessmentStart,
  addAssessmentSuccess,
  addAssessmentFailure,
  getAssessmentsStart,
  getAssessmentsSuccess,
  getAssessmentsFailure,
  deleteAssessmentStart,
  deleteAssessmentSuccess,
  deleteAssessmentFailure,
} from "./assessmentSlice";
import {
  makeApiRequestToSendEmail,
  clearEmailDetails,
  receivedResponse,
  sentEmail,
  errorEmail,
} from "./contactSlice";

import {
  getAttemptStart,
  getAttemptSuccess,
  getAttemptFailure,
  addAttemptStart,
  addAttemptSuccess,
  addAttemptFailure,
} from "./attemptSlice";

export const submitContactReqToServer = async (dispatch, mail) => {
  dispatch(makeApiRequestToSendEmail());
  dispatch(clearEmailDetails());
  try {
    const { data } = await axios.post("/contacts", mail);
    dispatch(receivedResponse());
    dispatch(sentEmail(data));
  } catch (error) {
    dispatch(errorEmail());
  }
};

export const loginMentor = async (dispatch, user) => {
  dispatch(loginMentorStart());
  try {
    const { data } = await axios.post("/login", user);
    // setupLogin(data?.token);
    dispatch(loginMentorSuccess(data));
  } catch (error) {
    dispatch(loginMentorFailure());
    logoutFunc();
  }
};

export const loginStudent = async (dispatch, user) => {
  dispatch(loginStudentStart());
  try {
    const { data } = await axios.post("/login", user);
    // setupLogin(data?.token);
    dispatch(loginStudentSuccess(data));
  } catch (error) {
    dispatch(loginStudentFailure());
    logoutFunc();
  }
};

export const addAttempt = async (attempt, dispatch) => {
  dispatch(addAttemptStart());
  try {
    const { data } = await axios.post(`/attempts`, attempt);
    dispatch(addAttemptSuccess(data));
  } catch (err) {
    dispatch(addAttemptFailure());
  }
};

export const addAssessment = async (assessment, dispatch) => {
  dispatch(addAssessmentStart());
  try {
    const { data } = await axios.post(`/assessments`, assessment);
    dispatch(addAssessmentSuccess(data));
  } catch (err) {
    dispatch(addAssessmentFailure());
  }
};

export const getAssessments = async (dispatch) => {
  dispatch(getAssessmentsStart());
  try {
    const { data } = await axios.get("/assessments");
    dispatch(getAssessmentsSuccess(data));
  } catch (error) {
    dispatch(getAssessmentsFailure());
  }
};

export const deleteAssessment = async (id, dispatch) => {
  dispatch(deleteAssessmentStart());
  try {
    await axios.delete(`/assessments/${id}`);
    dispatch(deleteAssessmentSuccess(id));
  } catch (err) {
    dispatch(deleteAssessmentFailure());
  }
};
