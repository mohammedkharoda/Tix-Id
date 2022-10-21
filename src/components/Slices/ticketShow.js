/* eslint-disable no-restricted-globals */
import { createSlice } from "@reduxjs/toolkit";
import { couponList } from "../../movie/data";

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

  coupon: {
    couponList: couponList,
    couponData: "",
    couponApplied: false,
    totalDiscount: "",
    totalAmount: 0,
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
      console.log(
        "From Redux ==>>",
        state.SelectedTheatre.showType.show.showPrice
      );
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

    addCoupon(state, action) {
      const coupon = action.payload;
      state.couponData = coupon;
      const found = state.couponList.find(
        (item) => item.name === coupon.toLowerCase()
      );
      state.totalDiscount = Math.round(
        (state.totalAmount / 100) * found.discountedPercentage
      );
      state.totalAmount -= Math.round(
        (state.totalAmount / 100) * found.discountedPercentage
      );

      state.couponApplied = true;
    },
  },
});

export const slotActions = slotSlice.actions;
export default slotSlice;
