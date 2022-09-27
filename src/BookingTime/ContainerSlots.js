import React from "react";
import SlotSelection from "./SlotSelection/SlotSelection";
import DisplayMovie from "./DisplayMovie/DisplayMovie";
import MovieBook from "./movieBook/MovieBook";
import CardBook from "./CardBook/CardBook";
export const ContainerSlots = () => {
  return (
    <>
      <MovieBook />
      <div style={{ display: "flex", gap: "250px" }}>
        <div>
          <SlotSelection />
        </div>
        <div style={{ marginTop: "-18%" }}>
          <DisplayMovie />
        </div>
      </div>
    </>
  );
};
