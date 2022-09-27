import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../movie/Navbar/Navbar";
import DisplayMovie from "../DisplayMovie/DisplayMovie";
import SlotSelection from "../SlotSelection/SlotSelection";
import TheaterSelect from "../TheaterSelect/TheaterSelect";
const MovieBook = () => {
  const hoverSx = {
    "&:hover": {
      backgroundColor: "#000",
      color: "#fff",
    },
  };
  const boxSX = {
    padding: "18px",
    border: "1px solid #5A637A",
    width: "86px",
    height: "82px",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#333333",
    "&:hover": {
      backgroundColor: "#1A2C50",
      color: "#fff",
    },
  };
  const typographySx = {
    display: "inline-block",
    whiteSpace: "nowrap",
    fontWeight: "500",
    fontSize: "16px",
    color: "inherit",
  };

  const typoDaySx = {
    textAlign: "center",
    fontWeight: "900",
    fontSize: "20px",
    color: "inherit",
    textTransform: "capitalize",
  };

  return (
    <>
      <Box component="section" sx={{ marginTop: "24px" }}>
        <Navbar />
      </Box>
      <Box component="section" sx={{ marginTop: "100px", marginLeft: "72px" }}>
        <Box>
          <Typography variant="h5">Select Date</Typography>
          <Typography>
            Lorem ipsum dolor sit amet. Et dolorum libero eos enim tempora aut
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              marginTop: "30px",
              display: "flex",
              gap: "24px",
              alignItems: "center",
            }}
          >
            {/* Box-1 */}
            <Box component="div" sx={boxSX}>
              <Typography sx={typographySx}>15 Aug</Typography>
              <Typography sx={typoDaySx}>mon</Typography>
            </Box>
            {/* Box-2 */}
            <Box component="div" sx={boxSX}>
              <Typography sx={typographySx}>16 Aug</Typography>
              <Typography sx={typoDaySx}>tue</Typography>
            </Box>
            {/* Box-3 */}
            <Box component="div" sx={boxSX}>
              <Typography sx={typographySx}>17 Aug</Typography>
              <Typography sx={typoDaySx}>wed</Typography>
            </Box>
            {/* Box-4 */}
            <Box component="div" sx={boxSX}>
              <Typography sx={typographySx}>18 Aug</Typography>
              <Typography sx={typoDaySx}>thr</Typography>
            </Box>
            {/* Box-5 */}
            <Box component="div" sx={boxSX}>
              <Typography sx={typographySx}>19 Aug</Typography>
              <Typography sx={typoDaySx}>fri</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <hr style={{ width: "630px", marginLeft: "72px", marginTop: "22px" }} />
      <TheaterSelect />
    </>
  );
};

export default MovieBook;
