import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    message: {},
    makeReq: false,
    errorRec: false,
    recvdResp: false,
  },
  reducers: {
    makeApiRequestToSendEmail: (state) => {
      state.makeReq = true;
    },
    clearEmailDetails: (state) => {
      state.message = {};
      state.recvdResp = false;
    },
    receivedResponse: (state) => {
      state.recvdResp = true;
    },
    sentEmail: (state, action) => {
      state.message = action.payload;
    },
    errorEmail: (state) => {
      state.errorRec = true;
    },
  },
});

export const {
  makeApiRequestToSendEmail,
  clearEmailDetails,
  receivedResponse,
  sentEmail,
  errorEmail,
} = contactSlice.actions;

export default contactSlice.reducer;
