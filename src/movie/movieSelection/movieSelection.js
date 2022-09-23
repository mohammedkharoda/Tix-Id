/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { movieData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "./movieSelection.css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "swiper/css";
import { Link } from "react-router-dom";
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
          {movieData.map((item) => (
            <SwiperSlide>
              <div style={{ padding: "0 80px" }}>
                <div>
                  <Link to={`/movieBook/${item.id}`}>
                    <img
                      src={item.linkImg}
                      style={{
                        width: "80%",
                        borderRadius: "16px",
                      }}
                    />
                  </Link>

                  <h2>{item.title}</h2>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItem: "center",
                    }}
                  >
                    <h4>{item.category1}</h4>
                    <h4>{item.category1}</h4>
                    <h4>{item.category1}</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default movieSelection;
