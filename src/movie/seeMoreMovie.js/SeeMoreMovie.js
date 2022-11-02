/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { movieData } from "../data";
const SeeMoreMovie = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: { lg: "177px", md: "177px", xs: "50px" },
          marginLeft: { lg: "72px", md: "72px" },
          paddingLeft: { lg: "0px", md: "0px", xs: "50px" },
          marginRight: { lg: "72px", md: "72px" },
          marginBottom: "147px",
        }}
      >
        <Box
          sx={{
            display: { lg: "flex", md: "flex", xs: "flex" },
            justifyContent: "space-between",
            flexDirection: { lg: "row", xs: "column", md: "row", sm: "row" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "32px",
              textTransform: "capitalize",
              color: "#333",
              fontSize: { md: "24px", sm: "20px", xs: "18px" },
              fontWeight: { md: "700", sm: "600" },
            }}
          >
            movie
            <Typography
              sx={{
                fontWeight: "400",
                lineHeight: "24px",
                color: "#414A63",
                fontSize: { lg: "18px", md: "16px", sm: "15px", xs: "13px" },
                overflowWrap: { xs: "break-word" },
              }}
            >
              Lorem ipsum dolor sit amet. Et dolorum libero eos enim tempora aut
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: { lg: "20px", md: "18px", sm: "16px" },
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
            sx={{
              display: "flex",
              gap: "50px",
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
              },
            }}
          >
            {movieData.secondary.map((items) => (
              <Box>
                <Box>
                  <Link to={`/movieBook/${items.id}`}>
                    <img
                      src={items.linkImg}
                      style={{
                        width: "80%",
                        borderRadius: "20px",
                        marginTop: "1.5rem",
                        marginBottom: "1.5rem",
                      }}
                    />
                  </Link>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: { lg: "24px", md: "18px", sm: "25px" },
                      color: "#333",
                    }}
                  >
                    {items.title}
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: "400",
                        fontSize: { lg: "16px", md: "14px", sm: "25px" },
                        color: "#414A63",
                      }}
                    >
                      {items.Text}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SeeMoreMovie;
