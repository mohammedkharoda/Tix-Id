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

  console.log("id", id);

  useEffect(() => {
    movieData.primary.find((item) => {
      if (item.id === +id) {
        console.log("Itemid", item.id);
        setData(item);
      } else {
        movieData.secondary.find((item) => {
          if (item.id === +id) {
            console.log("Itemid", item.id);
            setData(item);
          }
        });
      }
    });
  });

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

  // const flexDisplay = {
  //   display: "flex",
  //   gap: "30px ",
  // };

  return (
    <>
      <Box component="section">
        <Box component="div">
          <Box
            sx={{
              width: { md: "413px" },
              height: { xs: "364px" },
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
            sx={{ display: "flex", gap: "16px ", flexDirection: "column" }}
            id="outer"
          >
            {/* Genera */}
            <Box sx={{ display: "flex", gap: "30px ", marginTop: "11px" }}>
              <Typography sx={typoSx}>{data.title}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "25px" }}>
              <Typography sx={categoryATypoSx}>Genre</Typography>
              <Typography sx={categoryBTypoSx}>{`${data.Genera}`}</Typography>
            </Box>
            {/* Time */}
            <Box sx={{ display: "flex", gap: "25px" }}>
              <Typography sx={categoryATypoSx}>Time</Typography>
              <Typography
                sx={categoryBTypoSx}
              >{`${data.TimeHH}hr ${data.TimeMM}min`}</Typography>
            </Box>
            {/* Director */}
            <Box sx={{ display: "flex", gap: "25px" }}>
              <Typography sx={categoryATypoSx}>Director</Typography>
              <Typography sx={categoryBTypoSx}>{`${data.Director}`}</Typography>
            </Box>
            {/* Rating */}
            <Box sx={{ display: "flex", gap: "25px" }}>
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
