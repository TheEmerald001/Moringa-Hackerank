import axios from "axios";
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
