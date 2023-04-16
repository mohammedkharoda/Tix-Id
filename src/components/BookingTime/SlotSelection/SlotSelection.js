/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Star from "../../../assets/Star.svg";
import { Box, Typography } from "@mui/material";
import { theatreData, movieData } from "../../movie/data";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { slotActions } from "../../Slices/ticketShow";
import { ticketVisibility } from "../../Slices/ticketVisible";

const SlotSelection = () => {
  const dispatch = useDispatch();
  const selectedSlot = useSelector((state) => state.slot.SelectedTheatre);
  const movieId = movieData.primary.map((movieIds) => movieIds.id);
  const ToggleSlotHandler = () => {
    dispatch(ticketVisibility.toggle());
  };
  const dataTheaterHandler = ({
    showTypeName,
    showTypeId,
    showTime,
    showPrice,
    theatreName,
    theaterId,
    movieId,
  }) => {
    dispatch(
      slotActions.selectedShow({
        showTypeName,
        showTypeId,
        showTime,
        showPrice,
        theatreName,
        theaterId,
        movieId,
      })
    );
  };

  const typoHeading = {
    fontWeight: "500",
    fontSize: "24px",
    color: "#333",
    marginRight: "37px",
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
    gridTemplateColumns: {
      sm: "repeat(4,0fr)",
      xs: "repeat(3,1fr)",
    },
    gridTemplateRows: "repeat(2,0fr)",
    gap: "24px",
    marginTop: "16px",
    gridRowGap: "10px",
    marginBottom: "36px",
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

  const selected = {
    width: "77px",
    borderRadius: "4px",
    textAlign: "center",
    height: "40px",
    cursor: "pointer",
    padding: "10px 20px",
    border: "1px solid #9DA8BE",
    background: "#000E62",
    color: "#fff",
  };

  const locationSx = {
    color: "#5A637A",
    marginTop: "18px",
    fontWeight: "400",
    fontSize: "16px",
    marginBottom: "24px",
  };

  const ccvBadge = {
    color: "#fff",
    background: "#EC1E2B",
    padding: "6px 8px",
    borderRadius: "4px",
    marginRight: "auto",
  };

  const cinemaBadge = {
    color: "#fff",
    background: "#000E62",
    padding: "6px 8px",
    borderRadius: "4px",
    marginRight: "auto",
  };

  return (
    <>
      <Box
        className="boost"
        sx={{
          marginLeft: { xs: "10px" },
          overflowX: "hidden",
        }}
      >
        {theatreData.map((item) => (
          <Box key={item.id}>
            <Box
              style={{
                display: "flex",
                marginTop: "42px",
              }}
            >
              <Box
                sx={{
                  marginRight: "16px",
                }}
              >
                <img src={`${Star}`} />
              </Box>
              <Box sx={{ width: { lg: "100%" } }}>
                <Typography sx={typoHeading}>{item.name}</Typography>
              </Box>
              <Box>
                {item.theatreLogo.match("CGV") ? (
                  <Box sx={ccvBadge}>{item.theatreLogo}</Box>
                ) : (
                  <Box sx={cinemaBadge}>{item.theatreLogo}</Box>
                )}
              </Box>
            </Box>
            <Typography sx={locationSx}>{item.address}</Typography>
            <Box>
              {item.showType.map((nameTheater) => (
                <Box key={nameTheater.id}>
                  <Typography sx={subHeadingTypo}>
                    {nameTheater.name}
                  </Typography>
                  <Box component="section" sx={gridLayout}>
                    {nameTheater.show.map((timings) => (
                      <Typography
                        key={timings.id}
                        sx={
                          timings.id === selectedSlot.showType.showTypeId
                            ? selected
                            : notSelected
                        }
                        onClick={() => {
                          ToggleSlotHandler();
                          dataTheaterHandler({
                            theatreName: item.name,
                            showTypeName: nameTheater.name,
                            showTime: timings.showTime,
                            showPrice: timings.showPrice,
                            showTypeId: timings.id,
                            theaterId: item.id,
                            movieId: movieId,
                          });
                        }}
                      >
                        {timings.showTime}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SlotSelection;
