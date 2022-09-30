/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieData } from "../../movie/data";
import CardBook from "../CardBook/CardBook";
import { useSelector } from "react-redux";
const DisplayMovie = () => {
  const showTicket = useSelector((state) => state.visible.ticketVisible);

  let { id } = useParams();
  const [data, setData] = useState(movieData);

  useEffect(() => {
    movieData.primary.find((item) => {
      if (item.id == id) {
        setData(item);
      }
    });
  }, []);

  const typoSx = {
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "32px",
    marginTop: "48px",
    textTransform: "Uppercase",
  };

  const categoryATypoSx = {
    width: "15%",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#333",
  };

  const categoryBTypoSx = {
    fontWeight: "400",
    fontStyle: "16px",
    lineHeight: "19px",
    color: "#333",
  };

  const flexDisplay = {
    display: "flex",
    gap: "30px ",
    marginTop: "11px",
  };

  return (
    <>
      <Box component="section">
        <Box component="div" sx={{ width: "413px" }}>
          <img
            src={data.linkImg}
            style={{
              width: "100%",
              height: "364px",
              borderRadius: "5px",
              objectFit: "cover",
              objectPosition: "bottom",
            }}
          />
          <Typography sx={typoSx}>{data.title}</Typography>
          <Box>
            {/* Genera */}
            <Box sx={flexDisplay}>
              <Typography sx={categoryATypoSx}>Genre</Typography>
              <Typography sx={categoryBTypoSx}>{`${data.Genera}`}</Typography>
            </Box>
            {/* Time */}
            <Box sx={flexDisplay}>
              <Typography sx={categoryATypoSx}>Time</Typography>
              <Typography
                sx={categoryBTypoSx}
              >{`${data.TimeHH}hr ${data.TimeMM}min`}</Typography>
            </Box>
            {/* Director */}
            <Box sx={flexDisplay}>
              <Typography sx={categoryATypoSx}>Director</Typography>
              <Typography sx={categoryBTypoSx}>{`${data.Director}`}</Typography>
            </Box>
            {/* Rating */}
            <Box sx={flexDisplay}>
              <Typography sx={categoryATypoSx}>Rating</Typography>
              <Typography sx={categoryBTypoSx}>{`${data.Rating1} `}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {showTicket && <CardBook />}
    </>
  );
};

export default DisplayMovie;
