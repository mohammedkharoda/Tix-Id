import React from "react";
import Navbar from "./Navbar/Navbar";
import MovieSelection from "./movieSelection/movieSelection";
import Ads from "./Ads/Ads";
import SeeMoreMovie from "./seeMoreMovie.js/SeeMoreMovie";
import Footer from "./Footer/Footer";
import { Box } from "@mui/system";
import Protected from "../Login/Protected";
import MaxWrapper from "../MaxWrapper";
import SecondaryWrapper from "../SecondaryWrapper";
const MovieHome = () => {
  return (
    <>
      <Protected />
      <MaxWrapper>
        <SecondaryWrapper>
          <Box>
            <Navbar />
            <MovieSelection />
            <Ads />
            <SeeMoreMovie />
            <Footer />
          </Box>
        </SecondaryWrapper>
      </MaxWrapper>
    </>
  );
};

export default MovieHome;
