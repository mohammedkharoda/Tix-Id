/* eslint-disable jsx-a11y/alt-text */
import { Typography, Box, Stack } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { AdsData } from "../data";
const Ads = () => {
  return (
    <>
      <Box>
        <Stack>
          <Box
            sx={{
              marginTop: "90px",
              marginRight: "180px",
              marginLeft: "180px",
              display: { xs: "none", lg: "block", xl: "block" },
            }}
          >
            <Box>
              <Swiper
                slidesPerView={1}
                spaceBetween={50}
                pagination={{ clickable: true }}
                keyboard={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                {AdsData.map((item) => (
                  <SwiperSlide>
                    <img src={item.adsImage} style={{ width: "100%" }} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Ads;
