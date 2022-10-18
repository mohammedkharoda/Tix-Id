import React from "react";
import SlotSelection from "./SlotSelection/SlotSelection";
import DisplayMovie from "./DisplayMovie/DisplayMovie";
import MovieBook from "./movieBook/MovieBook";
import Footer from "../movie/Footer/Footer";

export const ContainerSlots = () => {
  return (
    <>
      <MovieBook />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <SlotSelection />
        </div>
        <div style={{ marginTop: "-5%", marginRight: "182px" }}>
          <DisplayMovie />
        </div>
      </div>
      <Footer />
    </>
  );
};
