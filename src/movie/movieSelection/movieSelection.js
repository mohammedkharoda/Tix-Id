/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { movieData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
const movieSelection = () => {
  return (
    <>
      <section
        style={{
          marginLeft: "181px",
          marginRight: "181px",
          marginTop: "150px",
        }}
      >
        <Swiper
          slidesPerView={2}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          keyboard={true}
          navigation={true}
          modules={[Navigation]}
        >
          {movieData.primary.map((item) => (
            <SwiperSlide>
              <Box style={{ padding: "0 80px" }}>
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
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "36px",
                        marginTop: "52px",
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
                        marginBottom: "1.5rem",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Roboto",
                          fontWeight: "700",
                          fontSize: "12px",
                          lineHeight: "14px",
                          background: "#F2C46F",
                          borderRadius: "4px",
                          padding: "6px 8px",
                          color: "#FFFFFF",
                        }}
                      >
                        {item.category1}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Roboto",
                          fontWeight: "700",
                          fontSize: "12px",
                          lineHeight: "14px",
                          background: "#EC1E2B",
                          borderRadius: "4px",
                          padding: "6px 8px",
                          color: "#FFFFFF",
                        }}
                      >
                        {item.category2}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Roboto",
                          fontWeight: "700",
                          fontSize: "12px",
                          lineHeight: "14px",
                          background: "#000E62",
                          borderRadius: "4px",
                          padding: "6px 8px",
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
      </section>
    </>
  );
};

export default movieSelection;
