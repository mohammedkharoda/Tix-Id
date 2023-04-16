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
              marginTop: "120px",
              display: { xs: "none", lg: "block" },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
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
                    <Box key={item.id}>
                      <img
                        src={item.adsImage}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
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
