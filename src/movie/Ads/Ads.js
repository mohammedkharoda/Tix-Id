/* eslint-disable jsx-a11y/alt-text */
import { Typography, Box, Stack } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { AdsData } from "../data";
const Ads = () => {
  return (
    <>
      <Stack>
        <Box
          sx={{ marginTop: "90px", marginRight: "180px", marginLeft: "180px" }}
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
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <img src={item.adsImage} />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Ads;
