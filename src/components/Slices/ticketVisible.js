import { createSlice } from "@reduxjs/toolkit";

const ticketVisible = createSlice({
  name: "ticketVisible",
  initialState: { ticketVisible: false },
  reducers: {
    toggle(state) {
      state.ticketVisible = true;
    },
  },
});

export const ticketVisibility = ticketVisible.actions;

export default ticketVisible;
