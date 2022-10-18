import React, { useState, useEffect } from "react";
import Navbar from "../movie/Navbar/Navbar";
import { Box, Button, Typography } from "@mui/material";
import Footer from "../movie/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";

const SeatsDisplay = () => {
  const [seatNameRender, setSeatNameRender] = useState();

  useEffect(() => {
    const row = [];
    let count = 0;
    for (let seat = 1; seat < 81; seat++) {
      const seatsData = { id: "S1", name: "", isSelected: false };
      if (seat <= 10) {
        seatsData.name = "A" + seat;
      } else if (seat >= 11 && seat <= 20) {
        count = 1;
        seatsData.name = "B" + seat;
      } else if (seat >= 21 && seat <= 30) {
        count = 1;
        seatsData.name = "C" + seat;
      } else if (seat >= 31 && seat <= 40) {
        count = 1;
        seatsData.name = "D" + seat;
      } else if (seat >= 41 && seat <= 50) {
        count = 1;
        seatsData.name = "E" + seat;
      } else if (seat >= 51 && seat <= 60) {
        count = 1;
        seatsData.name = "F" + seat;
      } else if (seat >= 61 && seat <= 70) {
        count = 1;
        seatsData.name = "G" + seat;
      } else if (seat >= 71 && seat <= 80) {
        count = 1;
        seatsData.name = "H" + seat;
      }
      row.push(seatsData);
      count++;
    }
    console.log("row ===>>", row);
    setSeatNameRender(row);
  }, []);

  const { id } = useParams();

  const handler = (Seatid) => {
    alert(Seatid.name);
  };

  const Navigate = useNavigate();

  return (
    <>
      <Navbar />

      <Box
        component="section"
        sx={{
          marginTop: "104px",
          marginRight: "auto",
        }}
      >
        <Box component="div">
          <Typography
            sx={{ fontSize: "36px", fontWeight: "700", marginLeft: "72px" }}
          >
            Select Seat
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              marginBottom: "126px",
              marginLeft: "72px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quod
          </Typography>

          <Box
            component="div"
            className="SeatsBox"
            sx={{ display: "flex", marginLeft: "72px" }}
          >
            <Box sx={{ cursor: "pointer" }}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
                {seatNameRender?.map((seatData) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        width: "40px",
                        height: "36px",
                        border: "1px solid #9DA8BE",
                        borderRadius: "6px",
                        padding: "4px 4px",
                      }}
                      onClick={() => handler(seatData)}
                    >
                      {console.log("Seat ==>>", seatData)}
                      {seatData.name}
                    </Box>
                  );
                })}
              </Box>
            </Box>
            {/* <Box sx={{ cursor: "pointer" }}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
                {runCallback(() => {
                  const row = [];
                  for (let seat = 1; seat < 81; seat++) {
                    row.push(
                      <Box
                        key={seat}
                        sx={{
                          display: "flex",
                          width: "40px",
                          height: "36px",
                          border: "1px solid #9DA8BE",
                          borderRadius: "6px",
                          padding: "4px 4px",
                        }}
                        onClick={() => handler(seat)}
                      >
                        {seat}
                      </Box>
                    );
                  }
                  return row;
                })}
              </Box>
            </Box> */}
          </Box>
          {/* Screen Side */}
          <Box
            sx={{
              backgroundColor: "#118EEA",
              width: "100%",
              height: "60px",
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            <Typography sx={{ padding: "16px 0px" }}>
              Screen This Side
            </Typography>
          </Box>
          <Box component="section">
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0px 25px",
                alignItems: "flex-end",
                marginTop: "60px",
                marginBottom: "126px",
              }}
              className="Selected Data"
            >
              <Box component="div" className="Total">
                <Typography>Total</Typography>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "36px",
                    lineHeight: "42px",
                    marginTop: "12px",
                  }}
                >
                  Rs 150.000
                </Typography>
              </Box>
              <Box component="div" className="Seats">
                <Typography>Seats</Typography>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "36px",
                    lineHeight: "42px",
                    marginTop: "12px",
                  }}
                >
                  C1,C2,C3
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "capitalize",
                    textAlign: "center",
                    padding: "12px 8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#5A637A",
                      height: "30px",
                      width: "200px",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                    onClick={() => Navigate(`/movieBook/${id}`)}
                  >
                    Change Date
                  </Typography>
                </Button>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#1A2C50",
                    color: "#FFBE00",
                    textTransform: "capitalize",
                    textAlign: "center",
                    padding: "12px 8px",
                  }}
                >
                  <Typography
                    sx={{
                      height: "30px",
                      width: "200px",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    Confirm
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default SeatsDisplay;
