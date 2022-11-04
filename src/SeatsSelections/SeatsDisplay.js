/* eslint-disable no-redeclare */
/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import Navbar from "../movie/Navbar/Navbar";
import { Box, Button, Typography } from "@mui/material";
import Footer from "../movie/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { slotActions } from "../components/Slices/ticketShow";
import Protected from "../Login/Protected";
import MaxWrapper from "../MaxWrapper";
import SecondaryWrapper from "../SecondaryWrapper";
const SeatsDisplay = () => {
  const selectedSlot = useSelector((state) => state.slot.SelectedTheatre);
  const seatsSelect = useSelector((state) => state.slot.SeatSelected);
  const [seatNameRender, setSeatNameRender] = useState();
  const [seatSideRender, setSeatSideRender] = useState();
  const [multipleSeats, setMultipleSeats] = useState([]);
  const dispatch = useDispatch();

  // ==>> Calculating the Total Amount of the Tickets
  let filteredData = seatsSelect.seatName.filter(
    (premium) =>
      premium.startsWith("A") ||
      premium.startsWith("B") ||
      premium.startsWith("C")
  );

  let RegularData = seatsSelect.seatName.filter(
    (premium) =>
      premium.startsWith("D") ||
      premium.startsWith("E") ||
      premium.startsWith("F") ||
      premium.startsWith("G") ||
      premium.startsWith("H")
  );

  let regularAmount = selectedSlot.showType.show.showPrice * RegularData.length;
  let premiumPrice = selectedSlot.showType.show.showPrice + 100;
  let total = regularAmount + premiumPrice * filteredData.length;

  // ==>> For Rendering the All the Seats
  useEffect(() => {
    //  ====>> For 1st Set of the SEATS
    const row = [];
    const Siderow = [];
    let count = 1;
    for (let seat = 1; seat < 81; seat++) {
      const seatsData = { name: "", isSelected: false, price: "" };
      if (seat <= 10) {
        if (seat == 10) {
          count = 10;
        }
        seatsData.name = "A" + count;
        seatsData.price = 200;
      }
      if (seat >= 11 && seat <= 20) {
        seatsData.name = "B" + parseInt(seat - 10);
      }
      if (seat >= 21 && seat <= 30) {
        count = 1;
        if (count == 1) {
          seatsData.name = "C" + parseInt(seat - 20);
        }
      }
      if (seat >= 31 && seat <= 40) {
        count = 1;
        if (count == 1) {
          seatsData.name = "D" + parseInt(seat - 30);
        }
      }
      if (seat >= 41 && seat <= 50) {
        count = 1;
        if (count == 1) {
          seatsData.name = "E" + parseInt(seat - 40);
        }
      }
      if (seat >= 51 && seat <= 60) {
        count = 1;
        if (count == 1) {
          seatsData.name = "F" + parseInt(seat - 50);
        }
      }
      if (seat >= 61 && seat <= 70) {
        count = 1;
        if (count == 1) {
          seatsData.name = "G" + parseInt(seat - 60);
        }
      }

      if (seat >= 71 && seat <= 80) {
        count = 1;
        if (count == 1) {
          seatsData.name = "H" + parseInt(seat - 70);
        }
      }

      row.push(seatsData);
      count++;
    }
    // console.log("row ===>>", row);
    setSeatNameRender(row);
    // ===============================================
    //  ====>> For 2nd Side of the SEATS
    for (let seatSide = 1; seatSide < 81; seatSide++) {
      let countSide = 11;
      const seatsSideData = { name: "", isSelected: false };
      if (seatSide <= 10) {
        if (seatSide <= 10) {
          countSide = seatSide + 10;
          seatsSideData.name = "A" + countSide;
        }
      } else if (seatSide <= 20) {
        countSide = seatSide;
        seatsSideData.name = "B" + countSide;
      } else if (seatSide <= 30) {
        countSide = seatSide - 10;
        seatsSideData.name = "C" + countSide;
      } else if (seatSide <= 40) {
        countSide = seatSide - 20;
        seatsSideData.name = "D" + countSide;
      } else if (seatSide <= 50) {
        countSide = seatSide - 30;
        seatsSideData.name = "E" + countSide;
      } else if (seatSide <= 60) {
        countSide = seatSide - 40;
        seatsSideData.name = "F" + countSide;
      } else if (seatSide <= 70) {
        countSide = seatSide - 50;
        seatsSideData.name = "G" + countSide;
      } else if (seatSide <= 80) {
        countSide = seatSide - 60;
        seatsSideData.name = "H" + countSide;
      }
      Siderow.push(seatsSideData);
      count++;
    }
    // console.log("Siderow ===>>", Siderow);
    setSeatSideRender(Siderow);
  }, []);
  // ==>> For Rendering the All the Seats

  const { id } = useParams();

  const handler = (SeatName) => {
    let isExist = seatsSelect.seatName.find((seat) => seat == SeatName.name);
    let multipleSeatsHandler = [...multipleSeats, SeatName.name];
    if (isExist == SeatName.name) {
      const removeSeat = multipleSeats.filter((item) => item !== isExist);
      setMultipleSeats(removeSeat);
      dispatch(slotActions.removeSelectedSeats(isExist));
    } else {
      if (seatsSelect.seatName.length < 5 || isExist == SeatName.name) {
        dispatch(slotActions.seatsSelected(multipleSeatsHandler));
        setMultipleSeats(multipleSeatsHandler);
      } else {
        return alert("Can't Select more than 5!");
      }
    }
  };

  const Navigate = useNavigate();
  const seatsConfirm = () => {
    if (seatsSelect.seatName.length !== 0) {
      return Navigate(`/confirmTicket/${id}`);
    } else {
      alert("No Seats Book.Please Book a Seat!!");
    }
  };
  return (
    <>
      <Protected />
      <MaxWrapper>
        <SecondaryWrapper>
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
                sx={{
                  fontSize: "36px",
                  fontWeight: "700",
                  // marginLeft: { md: "72px", sm: "40px", xs: "10px" },
                }}
              >
                Select Seat
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  marginBottom: "86px",
                  // marginLeft: { md: "72px", sm: "40px", xs: "10px" },
                }}
              >
                The Screen You Are Watching at{" "}
                {selectedSlot.showType.showTypeName}
              </Typography>

              <Box
                component="div"
                className="SeatsBox"
                sx={{
                  display: "flex",
                  // marginLeft: { sm: "70px", xs: "15px" },
                  gap: "50px",
                  // marginRight: { sm: "70px", xs: "10px" },
                }}
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
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: seatsSelect.seatName.find(
                              (item) => item === seatData.name
                            )
                              ? "#118EEA"
                              : "#fff",
                          }}
                          onClick={() => handler(seatData)}
                        >
                          {seatData.name}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
                {/* 2nd Column */}
                <Box sx={{ cursor: "pointer" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "30px",
                      justifyContent: "center",
                    }}
                  >
                    {seatSideRender?.map((seatData) => {
                      return (
                        <Box
                          sx={{
                            display: "flex",
                            width: "40px",
                            height: "36px",
                            border: "1px solid #9DA8BE",
                            borderRadius: "6px",
                            padding: "4px 4px",
                            backgroundColor: seatsSelect.seatName.find(
                              (item) => item === seatData.name
                            )
                              ? "#118EEA"
                              : "#fff",
                          }}
                          onClick={() => handler(seatData)}
                        >
                          {seatData.name}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
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
              {/* Tickets Confirms */}
              <Box component="section">
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0px 25px",
                    alignItems: { lg: "center", xs: "flex-start" },
                    flexDirection: { lg: "row", xs: "column", sm: "row" },
                    gap: { sm: "30px" },
                    flexWrap: { sm: "wrap" },
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
                      {selectedSlot.showType.showTypeName ? total : " "}
                    </Typography>
                  </Box>
                  <Box component="div" className="Seats">
                    <Typography>Seats</Typography>
                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: {
                          md: "36px",
                          xs: "26px",
                        },
                        lineHeight: "42px",
                        marginTop: "12px",
                        marginBottom: "15px",
                      }}
                    >
                      {`${seatsSelect.seatName}`}
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "capitalize",
                        textAlign: "center",
                        padding: "12px 8px",
                        marginBottom: { xs: "25px", lg: "0" },
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
                        onClick={seatsConfirm}
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
        </SecondaryWrapper>
      </MaxWrapper>
    </>
  );
};

export default SeatsDisplay;
