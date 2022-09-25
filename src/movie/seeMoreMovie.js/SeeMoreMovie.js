/* eslint-disable jsx-a11y/alt-text */
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { MoreMovie } from "../data";
const SeeMoreMovie = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "177px",
          marginLeft: "72px",
          marginRight: "72px",
          marginBottom: "147px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "32px",
              textTransform: "capitalize",
              color: "#333",
            }}
          >
            movie
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#414A63",
              }}
            >
              Lorem ipsum dolor sit amet. Et dolorum libero eos enim tempora aut
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "32px",
              textAlign: "center",
              textTransform: "capitalization",
              color: "#118EEA",
            }}
          >
            See All
          </Typography>
        </Box>
        <Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              gap: "71px",
            }}
          >
            {MoreMovie.map((items) => (
              <>
                <img
                  src={items.moreMovie}
                  style={{
                    height: "530px",
                    width: "360px",
                    borderRadius: "20px",
                    marginTop: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                />
              </>
            ))}
          </Box>
          <Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                flexGrow: "1",
              }}
            >
              {MoreMovie.map((items) => (
                <>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "24px",
                        color: "#333",
                      }}
                    >
                      {items.movieName}
                      <Typography
                        sx={{
                          fontFamily: "Roboto",
                          fontWeight: "400",
                          fontSize: "16px",
                          color: "#414A63",
                        }}
                      >
                        {items.moreText}
                      </Typography>
                    </Typography>
                  </Box>
                </>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SeeMoreMovie;
