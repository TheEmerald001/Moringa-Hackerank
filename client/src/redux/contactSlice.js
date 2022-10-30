import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    message: {},
   isFetching: false,
    errorRec: false,
    recvdResp: false,
  },
  reducers: {
    makeApiRequestToSendEmail: (state) => {
      state.isFetching = true;
    },
    clearEmailDetails: (state) => {
      state.message = {};
      state.recvdResp = false;
    },
    receivedResponse: (state) => {
      state.recvdResp = true;
    },
    sentEmail: (state, action) => {
      state.isFetching = false;
      state.message = action.payload;
    },
    errorEmail: (state) => {
      state.isFetching = false;
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
