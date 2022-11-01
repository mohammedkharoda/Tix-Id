/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-globals */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SelectedTheatre: {
    // TheaterData
    theaterLocation: "",
    theatreId: "",
    theatreName: "",
    theatreAddress: "",
    movieId: "",
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
        theaterLocation: "",
        theatreAddress: "",
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
      state.SeatSelected.seatName.filter((item) => {
        if (item === removeSeats) {
          console.log("==>>", item);
        }
      });
    },
  },
});

export const slotActions = slotSlice.actions;
export default slotSlice;
