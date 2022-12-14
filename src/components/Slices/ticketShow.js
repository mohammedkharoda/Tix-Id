/* eslint-disable no-restricted-globals */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SelectedTheatre: {
    // TheaterData
    theatreId: "",
    theatreName: "",
    movieId: "",
    // => ShowTypes
    showType: {
      showTypeId: "",
      showTypeName: "",
      showTypeMovie: "",
      show: {
        // => Shows
        showId: "",
        showTime: "",
        showPrice: "",
      },
    },
  },

  // Date and Day
  DateAndDay: {
    showDateId: "",
    showDate: "",
    showDay: "",
  },
  // Toggle
  toggle: true,

  // Seats
  SeatSelected: {
    seatName: [],
  },
};

const slotSlice = createSlice({
  name: "slot",
  initialState,
  reducers: {
    // ==> Reducer storing Show & Venue Data
    selectedShow(state, action) {
      const data = action.payload;
      state.SelectedTheatre = {
        theatreId: data.theaterId,
        movieId: data.movieId,
        theatreName: data.theatreName,
        showType: {
          showTypeId: data.showTypeId,
          showTypeName: data.showTypeName,
          show: {
            showId: data.showId,
            showTime: data.showTime,
            showPrice: data.showPrice,
          },
        },
      };
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

    seatsSelected(state, action) {
      const seatSelect = action.payload;
      state.SeatSelected = {
        seatName: seatSelect,
      };
    },

    removeSelectedSeats(state, action) {
      const removeSeats = action.payload;
      state.SeatSelected.seatName = state.SeatSelected.seatName.filter(
        (item) => item !== removeSeats
      );
    },
  },
});

export const slotActions = slotSlice.actions;
export default slotSlice;
