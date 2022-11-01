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
      } else {
        movieData.secondary.find((item) => {
          if (item.id == id) {
            setData(item);
          }
        });
      }
    });
  }, []);

  const typoSx = {
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "32px",
    marginTop: "48px",
    textTransform: "Uppercase",
    textAlign: { sm: "center", xs: "center" },
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
        <Box component="div">
          <Box
            sx={{
              marginLeft: { lg: "0", md: "70px", xs: "0px" },
              width: { lg: "413px", md: "413px" },
              height: { lg: "364px", md: "364px", sm: "364px", xs: "364px" },
            }}
          >
            <img
              src={data.linkImg}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "5px",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </Box>
          <Box
            sx={{ marginLeft: { lg: "0", md: "70px", sm: "70px", xs: "10px" } }}
          >
            {/* Genera */}
            <Box sx={flexDisplay}>
              <Typography sx={typoSx}>{data.title}</Typography>
            </Box>
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
              <Typography
                sx={{ categoryBTypoSx, marginBottom: "25px" }}
              >{`${data.Rating1} `}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {showTicket && <CardBook />}
    </>
  );
};

export default DisplayMovie;
