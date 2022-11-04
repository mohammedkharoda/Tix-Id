import React, { useState } from "react";
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
  //  ====>> For 1st Set of the SEATS
  const row = [];
  const Siderow = [];
  let countSide = 11;
  for (let seat = 1; seat < 81; seat++) {
    const seatsSidePrimary = { name: "" };
    const seatsSideSecondary = { name: "" };
    if (seat <= 10) {
      seatsSidePrimary.name = "A" + parseInt(seat);
    }
    if (seat >= 11 && seat <= 20) {
      seatsSidePrimary.name = "B" + parseInt(seat - 10);
    }
    if (seat >= 21 && seat <= 30) {
      seatsSidePrimary.name = "C" + parseInt(seat - 20);
    }
    if (seat >= 31 && seat <= 40) {
      seatsSidePrimary.name = "D" + parseInt(seat - 30);
    }
    if (seat >= 41 && seat <= 50) {
      seatsSidePrimary.name = "E" + parseInt(seat - 40);
    }
    if (seat >= 51 && seat <= 60) {
      seatsSidePrimary.name = "F" + parseInt(seat - 50);
    }
    if (seat >= 61 && seat <= 70) {
      seatsSidePrimary.name = "G" + parseInt(seat - 60);
    }

    if (seat >= 71 && seat <= 80) {
      seatsSidePrimary.name = "H" + parseInt(seat - 70);
    }
    // ===>> 2ND SIDE OF THE SEATS.
    if (seat <= 10) {
      countSide = seat + 10;
      seatsSideSecondary.name = "A" + parseInt(countSide);
    } else if (seat <= 20) {
      countSide = seat;
      seatsSideSecondary.name = "B" + parseInt(countSide);
    } else if (seat <= 30) {
      countSide = seat - 10;
      seatsSideSecondary.name = "C" + parseInt(countSide);
    } else if (seat <= 40) {
      countSide = seat - 20;
      seatsSideSecondary.name = "D" + parseInt(countSide);
    } else if (seat <= 50) {
      countSide = seat - 30;
      seatsSideSecondary.name = "E" + parseInt(countSide);
    } else if (seat <= 60) {
      countSide = seat - 40;
      seatsSideSecondary.name = "F" + parseInt(countSide);
    } else if (seat <= 70) {
      countSide = seat - 50;
      seatsSideSecondary.name = "G" + parseInt(countSide);
    } else if (seat <= 80) {
      countSide = seat - 60;
      seatsSideSecondary.name = "H" + parseInt(countSide);
    }
    Siderow.push(seatsSideSecondary);
    row.push(seatsSidePrimary);
    // count++;
  }

  // ==>> For Rendering the All the Seats

  const { id } = useParams();

  const handler = (SeatName) => {
    let isExist = seatsSelect.seatName.find((seat) => seat === SeatName.name);
    let multipleSeatsHandler = [...multipleSeats, SeatName.name];
    if (isExist === SeatName.name) {
      const removeSeat = multipleSeats.filter((item) => item !== isExist);
      setMultipleSeats(removeSeat);
      dispatch(slotActions.removeSelectedSeats(isExist));
    } else {
      if (seatsSelect.seatName.length < 5 || isExist === SeatName.name) {
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
                }}
              >
                Select Seat
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  marginBottom: "86px",
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
                  gap: "25px",
                  width: "100%",
                  height: "auto",
                }}
              >
                <Box sx={{ cursor: "pointer" }}>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
                    {row?.map((seatData) => {
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
                    {Siderow?.map((seatData) => {
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
