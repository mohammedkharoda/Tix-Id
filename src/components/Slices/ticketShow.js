/* eslint-disable no-restricted-globals */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tempSelectedTheatre: {
    // TheaterData
    theaterLocation: "",
    theatreId: "",
    theatreName: "",
    theatreAddress: "",
    // => ShowTypes
    showType: {
      showTypeId: "",
      showTypeName: "",
      showTypemovie: "",
      show: {
        // => Shows
        showId: "",
        showTime: "",
        showPrice: "",
      },
    },
  },
  DateAndDay: {
    showDateId: "",
    showDate: "",
    showDay: "",
  },
  toggle: true,
};
const slotSlice = createSlice({
  name: "slot",
  initialState,
  reducers: {
    // ==> Reducer storing Show & Venue Data
    selectedShow(state, action) {
      const data = action.payload;
      state.tempSelectedTheatre = {
        showType_Id: data.showTypeId,
        show_Price: data.showPrice,
        venue: data.showTypeName,
        showType_Time: data.showTime,
        TheaterName: data.theatreName,
      };
      console.log(data);
    },

    dateShow(state, action) {
      const date = action.payload;
      state.DateAndDay = {
        showDateId: date.showDateId,
        date: date.showDate,
        day: date.showDay,
      };
    },
    toggle(state) {
      state.toggle = false;
    },
  },
});

export const slotActions = slotSlice.actions;
export default slotSlice;
