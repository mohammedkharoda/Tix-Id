/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Box } from "@mui/material";
import TixLogo from "../../../assets/tix id 1.svg";
import GooglePlay from "../../../assets/Google Play.svg";
import AppStore from "../../../assets/image 6.svg";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <Box>
        <footer>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                lg: "repeat(5,1fr)",
                md: "repeat(5,1fr)",
                sm: "repeat(2,1fr)",
              },
              gridTemplateRows: "1fr",
              gridRowGap: "25px",
              gridColumnGap: "25px",
              marginTop: "26px",
            }}
          >
            <Box
              sx={{
                marginRight: "auto",
              }}
            >
              <img src={TixLogo} alt="tix-logo" style={{ width: "100%" }} />
            </Box>

            <Box>
              <Box
                sx={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "35px",
                  color: "#333",
                }}
              >
                <p>Movies</p>
              </Box>
              <ul
                style={{
                  listStyleType: "none",
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <li>
                  <a>Upcoming Movies</a>
                </li>
                <li>
                  <a>Recently Trending</a>
                </li>
                <li>
                  <a>Popular Hits </a>
                </li>
              </ul>
            </Box>

            <Box>
              <Box
                sx={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: { lg: "18px", md: "16px", sm: "14px" },
                  lineHeight: "35px",
                  color: "#333",
                }}
              >
                <p>News</p>
              </Box>
              <ul
                style={{
                  listStyleType: "none",
                  marginTop: "15px",

                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <li>
                  <a>TIX ID News</a>
                </li>
                <li>
                  <a>Movie news in Language</a>
                </li>
                <li>
                  <a>Movie information's</a>
                </li>
                <li>
                  <a>Assemble Movie Sets</a>
                </li>
                <li>
                  <a>Movie Talks</a>
                </li>
              </ul>
            </Box>
            <Box>
              <Box
                sx={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "35px",
                  color: "#333",
                }}
              >
                <p>Movies Updates and Celebrite</p>
              </Box>
              <ul
                style={{
                  listStyleType: "none",
                  marginTop: "15px",

                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <li>
                  <a>Upcoming Movies</a>
                </li>
                <li>
                  <a>Movies now and shows</a>
                </li>
                <li>
                  <a>Movie Celebrities</a>
                </li>
                <li>
                  <a>Trailers</a>
                </li>
                <li>
                  <a>Update Covid-19</a>
                </li>
              </ul>
            </Box>

            <Box>
              <Box
                sx={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "35px",
                  color: "#333",
                }}
              >
                <p>Follow On Social Media</p>
              </Box>
              <ul>
                <Box
                  sx={{
                    width: "150px",
                    display: "flex",
                    listStyleType: "none",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "24px",
                    marginBottom: "24px",
                  }}
                >
                  <li>
                    <a>
                      <BsInstagram style={{ width: "20px", height: "20px" }} />
                    </a>
                  </li>
                  <li>
                    <a>
                      <BsFacebook style={{ width: "20px", height: "20px" }} />
                    </a>
                  </li>
                  <li>
                    <a>
                      <BsTwitter style={{ width: "20px", height: "20px" }} />
                    </a>
                  </li>
                </Box>
              </ul>

              <Box>
                <p style={{ marginBottom: "24px" }}>Download Our App TIX ID</p>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img src={GooglePlay} alt="" />

                  <img src={AppStore} alt="" />
                </Box>
              </Box>

              <Box sx={{ marginTop: "26px" }}>
                <p> © Copyright {new Date().getFullYear()} TIX ID</p>
              </Box>
            </Box>
          </Box>
        </footer>
      </Box>
    </>
  );
};

export default Footer;
