/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { movieData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
const movieSelection = () => {
  return (
    <>
      <Box
        sx={{
          marginLeft: {
            xs: "61px",
            sm: "80",
            md: "100px",
            lg: "181px",
          },
          marginRight: {
            xs: "61px",
            sm: "80",
            md: "100px",
            lg: "181px",
          },
          marginTop: "150px",
        }}
      >
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            375: {
              slidesPerView: 1,
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          slidesPerView={2}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          keyboard={true}
        >
          {movieData.primary.map((item) => (
            <SwiperSlide>
              <Box
                sx={{
                  paddingLeft: {
                    sm: "45px",
                    md: "65px",
                    lg: "75px",
                  },
                }}
              >
                <Box>
                  <Link to={`/movieBook/${item.id}`}>
                    <img
                      src={item.linkImg}
                      style={{
                        width: "100%",
                        borderRadius: "16px",
                      }}
                    />
                  </Link>

                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: {
                          lg: "36px",
                          md: "24px",
                          sm: "18px",
                          xs: "25px",
                        },
                        marginTop: {
                          md: "20px",
                          sm: "12px",
                          xs: "8px",
                        },
                        paddingTop: {
                          lg: "60px",
                        },
                        textAlign: "center",
                        color: "#333",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "18px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: {
                          sm: "15px",
                          md: "25px",
                          lg: "35px",
                          xs: "20px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          fontWeight: "700",
                          fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "15px",
                            lg: "18px",
                          },
                          lineHeight: "14px",
                          background: "#F2C46F",
                          borderRadius: "4px",
                          padding: {
                            xs: "4px 6px",
                            sm: "8px 11px",
                            md: "10px 12px",
                          },
                          color: "#FFFFFF",
                        }}
                      >
                        {item.category1}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          fontWeight: "700",
                          fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "15px",
                            lg: "18px",
                          },
                          lineHeight: "14px",
                          background: "#EC1E2B",
                          borderRadius: "4px",
                          padding: {
                            xs: "4px 6px",
                            sm: "8px 11px",
                            md: "10px 12px",
                          },
                          color: "#FFFFFF",
                        }}
                      >
                        {item.category2}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          fontWeight: "700",
                          fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "15px",
                            lg: "18px",
                          },
                          lineHeight: "14px",
                          background: "#000E62",
                          borderRadius: "4px",
                          padding: {
                            xs: "4px 6px",
                            sm: "8px 11px",
                            md: "10px 12px",
                          },
                          color: "#FFFFFF",
                        }}
                      >
                        {item.category3}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default movieSelection;
