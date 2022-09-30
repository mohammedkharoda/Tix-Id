/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Star from "../../assets/Star.svg";
import { Box, Typography } from "@mui/material";
import { theatreData } from "../../movie/data";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { slotActions } from "../../components/Slices/ticketShow";
import { ticketVisibility } from "../../components/Slices/ticketVisible";

const SlotSelection = () => {
  const dispatch = useDispatch();
  const selectedSlot = useSelector((state) => state.slot.tempSelectedTheatre);

  const ToggleSlotHandler = () => {
    dispatch(ticketVisibility.toggle());
  };

  const dataTheaterHandler = ({
    showTypeName,
    showTypeId,
    showTime,
    showPrice,
    theatreName,
  }) => {
    dispatch(
      slotActions.selectedShow({
        showTypeName,
        showTypeId,
        showTime,
        showPrice,
        theatreName,
      })
    );
  };

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

  const theaterNames = {
    marginLeft: "66px",
  };

  const gridLayout = {
    display: "grid",
    gridTemplateColumns: "repeat(4,0fr)",
    gridTemplateRows: "repeat(2,0fr)",
    marginLeft: "66px",
    gap: "24px",
    marginTop: "16px",
    gridRowGap: "10px",
    marginBottom: "36px",
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

  const selected = {
    width: "77px",
    borderRadius: "4px",
    textAlign: "center",
    height: "40px",
    cursor: "pointer",
    padding: "10px 20px",
    border: "1px solid #9DA8BE",
    background: "#000E62",
    borderRadius: "4px",
    color: "#fff",
    textAlign: "center",
  };

  const locationSx = {
    marginLeft: "66px",
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
    marginLeft: "150px",
  };

  const plazaBadge = {
    color: "#fff",
    background: "#F2C46F",
    padding: "6px 8px",
    borderRadius: "4px",
    marginRight: "auto",
  };

  return (
    <>
      {theatreData.map((item) => (
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
          <Box>
            <Typography sx={locationSx}>{item.address}</Typography>
          </Box>
          <Box>
            {item.showType.map((nameTheater) => (
              <Box>
                <Box sx={theaterNames}>
                  <Typography sx={subHeadingTypo}>
                    {nameTheater.name}
                  </Typography>
                </Box>
                <Box component="section" sx={gridLayout}>
                  {nameTheater.show.map((timings) => (
                    <Typography
                      sx={
                        timings.id === selectedSlot.showType_Id
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
    </>
  );
};

export default SlotSelection;
