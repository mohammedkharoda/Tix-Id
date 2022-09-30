import { configureStore } from "@reduxjs/toolkit";
import slothSlice from "../Slices/ticketShow";
import ticketVisible from "../Slices/ticketVisible";
const store = configureStore({
  reducer: {
    slot: slothSlice.reducer,
    visible: ticketVisible.reducer,
  },
});

export default store;
