import axios from "axios";
import request from "../Helpers/requestMethods";
import { setupLogin } from "../Helpers/auth.js";
import { logoutFunc } from "../Helpers/auth.js";
import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import {
  addAssessmentStart,
  addAssessmentSuccess,
  addAssessmentFailure,
} from "./assessmentSlice";
import {
  makeApiRequestToSendEmail,
  clearEmailDetails,
  receivedResponse,
  sentEmail,
  errorEmail,
} from "./contactSlice";

export const submitContactReqToServer = async (dispatch, mail) => {
  dispatch(makeApiRequestToSendEmail());
  dispatch(clearEmailDetails());
  try {
    const { data } = await axios.post("http://localhost:3000/contacts", mail);
    dispatch(receivedResponse());
    dispatch(sentEmail(data));
  } catch (error) {
    dispatch(errorEmail());
  }
};

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const { data } = await request.post("/login", user);
    setupLogin(data?.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure());
    logoutFunc();
  }
};

export const addAssessment = async (assessment, dispatch) => {
  dispatch(addAssessmentStart());
  try {
    const { data } = await request.post(`/assessments`, assessment);
    dispatch(addAssessmentSuccess(data));
  } catch (err) {
    dispatch(addAssessmentFailure());
  }
};
