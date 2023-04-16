import React from "react";
import SlotSelection from "./SlotSelection/SlotSelection";
import DisplayMovie from "./DisplayMovie/DisplayMovie";
import MovieBook from "./movieBook/MovieBook";
import Footer from "../movie/Footer/Footer";
import { Box } from "@mui/material";
import Protected from "../Login/Protected";
import MaxWrapper from "../MaxWrapper";
import SecondaryWrapper from "../SecondaryWrapper";
import Navbar from "../movie/Navbar/Navbar";
export const ContainerSlots = () => {
  return (
    <>
      <Protected />
      <MaxWrapper>
        <SecondaryWrapper>
          <Navbar />
          <MovieBook />
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                xs: "column",
              },
              justifyContent: "space-between",
            }}
          >
            <SlotSelection />
            <Box>
              <DisplayMovie />
            </Box>
          </Box>
          <Footer />
        </SecondaryWrapper>
      </MaxWrapper>
    </>
  );
};
