import React from "react";
import SlotSelection from "./SlotSelection/SlotSelection";
import DisplayMovie from "./DisplayMovie/DisplayMovie";
import MovieBook from "./movieBook/MovieBook";

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
        <div style={{ marginTop: "-18%", marginRight: "182px" }}>
          <DisplayMovie />
        </div>
      </div>
    </>
  );
};
