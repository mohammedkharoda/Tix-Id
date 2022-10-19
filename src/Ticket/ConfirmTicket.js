/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { movieData } from "../movie/data";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../movie/Navbar/Navbar";
import { ReactComponent as LeftArrow } from "../assets/arrowLeft.svg";
import Footer from "../movie/Footer/Footer";
import Paytm from "../assets/Paytm-Logo.wine.svg";
import PhonePe from "../assets/PhonePe-Logo.wine.svg";
import GooglePay from "../assets/Google_Pay-Logo.wine.svg";
const ConfirmTicket = () => {
  let { id } = useParams();
  const dateSelector = useSelector((state) => state.slot.DateAndDay);
  const selectedSlot = useSelector((state) => state.slot.SelectedTheatre);
  const seatsSelect = useSelector((state) => state.slot.SeatSelected);

  const [movieInfo, setMovieInfo] = useState();
  useEffect(() => {
    if (id) {
      let temp = movieData.primary.find((movieInfo) => movieInfo.id === +id);
      setMovieInfo(temp);
    }
  }, [id]);

  const navigate = useNavigate();

  return (
    <>
      <Box
        component="section"
        marginBottom="136px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Box component="section">
          <Navbar />
          <Box
            component="div"
            sx={{ marginTop: "140px", marginLeft: "72px", marginRight: "auto" }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                fontWeight: "700",
                fontSize: "36px",
              }}
            >
              confirm booking
            </Typography>
            <Box component="div">
              <Box
                component="div"
                sx={{
                  marginTop: "50px",
                  fontWeight: "500",
                  fontSize: "24px",
                  lineHeight: "32px",
                }}
              >
                <Box component="div">
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "24px",
                      lineHeight: "32px",
                    }}
                  >
                    Ticket Details
                  </Typography>
                </Box>
                {/* Movie Name */}
                <Box component="div" sx={{ marginTop: "28px" }}>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "34px",
                      marginBottom: "4px",
                    }}
                  >
                    Film Name
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: "#333",
                      textTransform: "uppercase",
                      marginBottom: "10px",
                    }}
                  >
                    {movieInfo?.title}
                  </Typography>
                  <Box
                    component="div"
                    sx={{
                      border: "0.5px  black",
                      width: "420px",
                      backgroundColor: "#000",
                      borderStyle: "solid",
                    }}
                  />
                </Box>
                {/* Date */}
                <Box component="div" sx={{ marginTop: "28px" }}>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "34px",
                      marginBottom: "4px",
                    }}
                  >
                    Date
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: "#333",
                      textTransform: "uppercase",
                      marginBottom: "10px",
                    }}
                  >
                    {`${dateSelector.date} , ${dateSelector.day}`}
                  </Typography>
                  <Box
                    component="div"
                    sx={{
                      border: "0.5px  black",
                      width: "420px",
                      backgroundColor: "#000",
                      borderStyle: "solid",
                    }}
                  />
                </Box>
                {/* Seat and Time */}
                <Box component="section">
                  <Box component="div">
                    <Box component="div" sx={{ marginTop: "28px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          gap: "195px",
                          marginBottom: "8px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: "16px",
                            textTransform: "capitalize",
                          }}
                        >
                          Seats
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: "16px",
                            textTransform: "capitalize",
                          }}
                        >
                          Time
                        </Typography>
                      </Box>
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: "76px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontSize: "24px",
                            lineHeight: "32px",
                            color: "#333",
                            textTransform: "uppercase",
                            marginBottom: "10px",
                          }}
                        >
                          {selectedSlot.showType.showTypeName}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontSize: "24px",
                            lineHeight: "32px",
                            color: "#333",
                            textTransform: "uppercase",
                            marginBottom: "10px",
                          }}
                        >
                          {selectedSlot.showType.show.showTime}
                        </Typography>
                      </Box>
                      <Box
                        component="div"
                        sx={{
                          border: "0.5px  black",
                          width: "420px",
                          backgroundColor: "#000",
                          borderStyle: "solid",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                {/* Tickets */}
                <Box>
                  <Box component="div" sx={{ marginTop: "28px" }}>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "34px",
                        marginBottom: "4px",
                      }}
                    >
                      Ticket({seatsSelect.seatName.length - 1})
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "32px",
                        color: "#333",
                        textTransform: "uppercase",
                        marginBottom: "10px",
                      }}
                    >
                      {seatsSelect.seatName}
                    </Typography>
                    <Box
                      component="div"
                      sx={{
                        border: "0.5px  black",
                        width: "420px",
                        backgroundColor: "#000",
                        borderStyle: "solid",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Return */}
          <Box component="div" sx={{ cursor: "pointer" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "62px",
                gap: "25px",
              }}
              onClick={() => navigate(-1)}
            >
              <Box
                sx={{
                  color: "#5A637A",
                  width: "32px",
                  height: "32px",
                  marginLeft: "70px",
                }}
              >
                <LeftArrow />
              </Box>
              <Box
                sx={{ color: "#5A637A", fontWeight: "700", fontSize: "24px" }}
              >
                return
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Card Side */}
        <Box component="section">
          <Box
            component="div"
            className="outerDiv"
            sx={{
              backgroundColor: "#fff",
              width: "500px",
              height: "650px",
              border: "1px solid #c4c4c4",
              marginRight: "370px",
              boxShadow: "0px 1px 6px rgba(0,0,0.3)",
              borderRadius: "13px",
              padding: "26px 48px",
            }}
          >
            <Box component="div">
              <Box component="div" className="ticket-info">
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "24px",
                    lineHeight: "28px",
                    textTransform: "capitalize",
                  }}
                >
                  Confirm Ticket
                </Typography>
                <Box className="Inner-sections">
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "18px",
                      marginTop: "32px",
                    }}
                  >
                    Details
                  </Typography>
                  <Box component="div" className="seats-details">
                    <Box className="inside-details" sx={{ display: "flex" }}>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "19px",
                          color: "#333",
                          marginTop: "16px",
                        }}
                      >
                        Regular seats
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400px",
                          fontSize: "16px",
                          lineHeight: "19px",
                          marginTop: "16px",
                          marginLeft: "auto",
                        }}
                      >
                        Rs 500.00
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "16px",
                          lineHeight: "19px",
                          marginTop: "16px",
                          color: " #414A63",
                          marginLeft: "12px",
                        }}
                      >
                        x3
                      </Typography>
                    </Box>
                    {/* Premium-Seats  */}
                    <Box
                      className="inside-details-2"
                      sx={{ display: "flex", marginBottom: "27px" }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "19px",
                          color: "#333",
                          marginTop: "16px",
                        }}
                      >
                        Premium Seats
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400px",
                          fontSize: "16px",
                          lineHeight: "19px",
                          marginTop: "16px",
                          marginLeft: "auto",
                        }}
                      >
                        Rs 800.00
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "16px",
                          lineHeight: "19px",
                          marginTop: "16px",
                          color: " #414A63",
                          marginLeft: "12px",
                        }}
                      >
                        x3
                      </Typography>
                    </Box>
                    <hr style={{ backgroundColor: "#000" }} />
                    {/* Vouchers  */}
                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "18px",
                        marginTop: "32px",
                      }}
                    >
                      Promo & Vouchers
                    </Typography>
                    {/* Vouchers Details */}
                    <Box
                      className="Vouchers-details"
                      sx={{ display: "flex", marginBottom: "27px" }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "19px",
                          color: "#333",
                          marginTop: "16px",
                        }}
                      >
                        MOVIE50
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400px",
                          fontSize: "16px",
                          lineHeight: "19px",
                          marginTop: "16px",
                          marginLeft: "auto",
                        }}
                      >
                        - Rs 200.00
                      </Typography>
                    </Box>
                    <hr style={{ backgroundColor: "#000" }} />
                    <Box
                      className="Total"
                      sx={{ display: "flex", marginBottom: "27px" }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "19px",
                          color: "#333",
                          marginTop: "16px",
                        }}
                      >
                        Total
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400px",
                          fontSize: "16px",
                          lineHeight: "19px",
                          marginTop: "16px",
                          marginLeft: "auto",
                        }}
                      >
                        Rs 865.00
                      </Typography>
                    </Box>
                    <hr style={{ backgroundColor: "#000" }} />
                  </Box>
                  {/* Payments Modes */}
                  <Box
                    className="inside-details-2"
                    sx={{ display: "flex", marginBottom: "27px" }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "19px",
                        color: "#000",
                        marginTop: "16px",
                      }}
                    >
                      Payment Modes
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: "12px",
                        lineHeight: "19px",
                        marginTop: "16px",
                        marginLeft: "auto",
                        color: "#118EEA",
                      }}
                    >
                      Debit Card
                    </Typography>
                  </Box>
                  {/* Card Details */}
                  <Box className="Wallets" sx={{ display: "flex" }}>
                    <Box className="Paytm">
                      <img src={Paytm} style={{ width: "70px" }} />
                    </Box>
                    <Box className="PhonePe">
                      <img src={PhonePe} style={{ width: "70px" }} />
                    </Box>
                    <Box className="GooglePay">
                      <img src={GooglePay} style={{ width: "70px" }} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1A2C50",
                width: "419px",
                height: "64px",
                marginTop: "50px",
              }}
            >
              <Typography
                sx={{ color: "#FFBE00", fontSize: "24px", fontWeight: "500" }}
              >
                Book Ticket
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default ConfirmTicket;
