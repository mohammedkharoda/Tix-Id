import React from "react";
import SlotSelection from "./SlotSelection/SlotSelection";
import DisplayMovie from "./DisplayMovie/DisplayMovie";
import MovieBook from "./movieBook/MovieBook";
import Footer from "../movie/Footer/Footer";
import { Box } from "@mui/material";
import Protected from "../Login/Protected";
import MaxWrapper from "../MaxWrapper";
import SecondaryWrapper from "../SecondaryWrapper";
export const ContainerSlots = () => {
  return (
    <>
      <Protected />
      <MaxWrapper>
        <SecondaryWrapper>
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
            <div>
              <SlotSelection />
            </div>
            <Box
              sx={{
                marginTop: { lg: "-5%", md: "5%" },
                marginRight: { lg: "182px" },
              }}
            >
              <DisplayMovie />
            </Box>
          </Box>
          <Footer />
        </SecondaryWrapper>
      </MaxWrapper>
    </>
  );
};
