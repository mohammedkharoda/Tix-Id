/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Star from "../../assets/Star.svg";
import { Box, Typography } from "@mui/material";
import { theaterData } from "../../movie/data";
const SlotSelection = () => {
  const typoHeading = {
    fontWeight: "500",
    fontSize: "24px",
    color: "#333",
  };
  const subHeadingTypo = {
    fontWeight: "500",
    fontSize: "24px",
    color: "#5A637A",
    width: "325px",
    marginRight: "72px",
  };

  const gridLayout = {
    display: "grid",
    gridTemplateColumns: "repeat(4,0fr)",
    gridTemplateRows: "repeat(2,0fr)",
    marginLeft: "66px",
    gap: "24px",
    marginTop: "16px",
    gridRowGap: "10px",
  };

  const disableTime = {
    textAlign: "center",
    background: "#DADFEB",
    borderRadius: "4px",
    width: "77px",
    height: "40px",
    padding: "12px 20px",
  };

  const notSelected = {
    width: "77px",
    borderRadius: "4px",
    textAlign: "center",
    height: "40px",
    color: "#000",
    cursor: "pointer",
    padding: "10px 20px",
    border: "1px solid #9DA8BE",
    "&:hover": {
      textAlign: "center",
      background: "#1A2C50",
      borderRadius: "4px",
      color: "#fff",
    },
  };

  const locationSx = {
    marginLeft: "66px",
    color: "#5A637A",
    marginTop: "18px",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
  };

  return (
    <>
      <Box>
        <Box
          style={{
            display: "flex",
            marginTop: "42px",
          }}
        >
          <Box sx={{ marginLeft: "66px", marginRight: "16px" }}>
            <img src={`${Star}`} />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography sx={typoHeading}>
              {theaterData.Theater.Headings.headingName_1}
            </Typography>
          </Box>
          <Box
            sx={{
              background: "#EC1E2B",
              color: "#fff",
              padding: "6px 8px",
              borderRadius: "4px",
              marginRight: "auto",
            }}
          >
            {theaterData.Theater.TheaterType.theaterName_1}
          </Box>
        </Box>
        {/* Box-1 */}
        <Box>
          <Typography sx={locationSx}>
            {theaterData.Theater.Location.address}
          </Typography>
        </Box>
        <Box
          sx={{
            marginLeft: "66px",
            marginTop: "24px",
            display: "flex",
          }}
        >
          <Typography sx={subHeadingTypo}>
            {theaterData.Theater.TheaterType.type_1.screen_1}
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "18px",
              color: "#5A637A",
              width: "240px",
            }}
          >
            {theaterData.Theater.TheaterType.type_1.amount_1}
          </Typography>
        </Box>
        <Box sx={gridLayout}>
          <>
            {theaterData.Theater.TheaterType.type_1.type_timing.map((item) => (
              <Typography sx={notSelected}>{item}</Typography>
            ))}
          </>
        </Box>
        {/* Screen-2 */}
        <Box
          sx={{
            marginLeft: "66px",
            marginTop: "24px",
            display: "flex",
          }}
        >
          <Typography sx={subHeadingTypo}>
            {theaterData.Theater.TheaterType.type_1.screen_2}
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "18px",
              color: "#5A637A",
              width: "240px",
            }}
          >
            {theaterData.Theater.TheaterType.type_1.amount_2}
          </Typography>
        </Box>
        <Box sx={gridLayout}>
          <>
            {theaterData.Theater.TheaterType.type_1.type_timing_2.map(
              (item) => (
                <Typography sx={notSelected}>{item}</Typography>
              )
            )}
          </>
        </Box>
        {/* Screen-3 */}
        <Box
          sx={{
            marginLeft: "66px",
            marginTop: "24px",
            display: "flex",
          }}
        >
          <Typography sx={subHeadingTypo}>
            {theaterData.Theater.TheaterType.type_1.screen_3}
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "18px",
              color: "#5A637A",
              width: "240px",
            }}
          >
            {theaterData.Theater.TheaterType.type_1.amount_2}
          </Typography>
        </Box>
        <Box sx={gridLayout}>
          <>
            {theaterData.Theater.TheaterType.type_1.type_timing_3.map(
              (item) => (
                <Typography sx={notSelected}>{item}</Typography>
              )
            )}
          </>
        </Box>
        {/* --------------------------------- Theater 2 ------------------------------------- */}
        <Box
          style={{
            display: "flex",
            marginTop: "42px",
          }}
        >
          <Box sx={{ marginLeft: "66px", marginRight: "16px" }}>
            <img src={`${Star}`} />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography sx={typoHeading}>
              {theaterData.Theater.Headings.headingName_2}
            </Typography>
          </Box>
          <Box
            sx={{
              background: "#000E62",
              color: "#fff",
              padding: "6px 8px",
              borderRadius: "4px",
              marginRight: "auto",
            }}
          >
            {theaterData.Theater.TheaterType.theaterName_2}
          </Box>
        </Box>
        {/* Screen-2 */}
        <Box>
          <Typography sx={locationSx}>
            {theaterData.Theater.Location.address}
          </Typography>
        </Box>
        <Box
          sx={{
            marginLeft: "66px",
            marginTop: "24px",
            display: "flex",
          }}
        >
          <Typography sx={subHeadingTypo}>
            {theaterData.Theater.TheaterType.type_2.screen_1}
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "18px",
              color: "#5A637A",
              width: "240px",
            }}
          >
            {theaterData.Theater.TheaterType.type_2.amount_1}
          </Typography>
        </Box>
        <Box sx={gridLayout}>
          <>
            {theaterData.Theater.TheaterType.type_2.type_timing.map((item) => (
              <Typography sx={notSelected}>{item}</Typography>
            ))}
          </>
        </Box>
        {/* ---------------------------------- Theater 3 ------------------------------------- */}
        <Box
          style={{
            display: "flex",
            marginTop: "42px",
          }}
        >
          <Box sx={{ marginLeft: "66px", marginRight: "16px" }}>
            <img src={`${Star}`} />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography sx={typoHeading}>
              {theaterData.Theater.Headings.headingName_3}
            </Typography>
          </Box>
          <Box
            sx={{
              background: "#F2C46F",
              color: "#fff",
              padding: "6px 8px",
              borderRadius: "4px",
              marginRight: "auto",
            }}
          >
            {theaterData.Theater.TheaterType.theaterName_3}
          </Box>
        </Box>
        {/* Screen-2 */}
        <Box>
          <Typography sx={locationSx}>
            {theaterData.Theater.Location.address}
          </Typography>
        </Box>
        <Box
          sx={{
            marginLeft: "66px",
            marginTop: "24px",
            display: "flex",
          }}
        >
          <Typography sx={subHeadingTypo}>
            {theaterData.Theater.TheaterType.type_3.screen_1}
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "18px",
              color: "#5A637A",
              width: "240px",
            }}
          >
            {theaterData.Theater.TheaterType.type_3.amount_1}
          </Typography>
        </Box>
        <Box sx={gridLayout}>
          <>
            {theaterData.Theater.TheaterType.type_3.type_timing.map((item) => (
              <Typography sx={notSelected}>{item}</Typography>
            ))}
          </>
        </Box>
      </Box>
    </>
  );
};

export default SlotSelection;
