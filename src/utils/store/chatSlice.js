import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { CHAT_LIMIT } from "../constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: { messages: [] },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(CHAT_LIMIT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
