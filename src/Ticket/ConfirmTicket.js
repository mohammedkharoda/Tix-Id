/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { movieData } from "../movie/data";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../movie/Navbar/Navbar";
import { ReactComponent as LeftArrow } from "../assets/arrowLeft.svg";
import Footer from "../movie/Footer/Footer";
import { couponList } from "../movie/data";
import Protected from "../Login/Protected";
import GooglePayButton from "@google-pay/button-react";
import MaxWrapper from "../MaxWrapper";
import SecondaryWrapper from "../SecondaryWrapper";
const ConfirmTicket = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [valid, setvalid] = useState(false);
  const [coupon, setCoupon] = useState("");
  const dateSelector = useSelector((state) => state.slot.DateAndDay);
  const selectedSlot = useSelector((state) => state.slot.SelectedTheatre);
  const seatsSelect = useSelector((state) => state.slot.SeatSelected);
  const [movieInfo, setMovieInfo] = useState();
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  useEffect(() => {
    if (id) {
      let temp = movieData.primary.find((movieInfo) => movieInfo.id === +id);
      let temp2 = movieData.secondary.find((movieInfo) => movieInfo.id === +id);
      setMovieInfo(temp || temp2);
    }
  }, [id]);

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

  const [calculatedTotal, setCalculatedTotal] = useState(total);

  const couponHandler = () => {
    const validCoupon = couponList.find(
      (item) => item.name === coupon.toLowerCase()
    );
    if (validCoupon) {
      setvalid(false);
      setIsCouponApplied(true);
      let finalDiscount =
        total - (total / 100) * validCoupon.discountedPercentage;
      setCalculatedTotal(finalDiscount);
    } else {
      setvalid(true);
    }
  };

  return (
    <>
      <Protected />
      <MaxWrapper>
        <SecondaryWrapper>
          <Box
            component="section"
            marginBottom="136px"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: {
                xs: "column",
                lg: "row",
              },
              gap: { lg: "250px", md: "190px" },
              overflowX: "hidden",
            }}
          >
            <Box component="section">
              <Navbar />
              <Box
                component="div"
                sx={{
                  marginTop: "140px",
                  marginRight: "auto",
                }}
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
                          width: { lg: "420px", md: "420px", xs: "280px" },
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
                        {dateSelector.date == undefined
                          ? navigate(-1)
                          : `${dateSelector.date} , ${dateSelector.day}`}
                      </Typography>
                      <Box
                        component="div"
                        sx={{
                          border: "0.5px  black",
                          width: { lg: "420px", md: "420px", xs: "280px" },
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
                              width: { lg: "420px", md: "420px", xs: "280px" },
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
                          Ticket({seatsSelect.seatName.length})
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
                          {`${seatsSelect.seatName}`}
                        </Typography>
                        <Box
                          component="div"
                          sx={{
                            border: "0.5px  black",
                            width: { lg: "420px", md: "420px", xs: "280px" },
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
                    display: { md: "flex", xs: "none" },
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
                    sx={{
                      color: "#5A637A",
                      fontWeight: "700",
                      fontSize: "24px",
                    }}
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
                  height: { sm: "690px" },
                  border: {
                    sm: "1px solid #c4c4c4",
                    xs: "0",
                  },
                  // marginRight: { md: "370px" },
                  boxShadow: {
                    xs: "0",
                  },
                  borderRadius: "13px",
                  paddingLeft: { xs: "14px" },
                  paddingRight: { xs: "100px" },
                  padding: {
                    lg: "30px 48px",
                    xl: "18px 48px",
                    sm: "30px 48px",
                  },
                  marginTop: { lg: "170px", xs: "80px" },
                  // marginLeft: { sm: "35px" },
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
                        <Box
                          className="inside-details"
                          sx={{ display: "flex" }}
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
                            Regular seats
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "400px",
                              fontSize: "16px",
                              lineHeight: "19px",
                              marginTop: "16px",
                              marginLeft: {
                                sm: "auto",
                                xs: "110px",
                              },
                            }}
                          >
                            {`Rs ${
                              RegularData.length === 0
                                ? 0
                                : selectedSlot.showType.show.showPrice
                            }.00`}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Noto Sans",
                              fontStyle: "normal",
                              fontWeight: "700",
                              fontSize: "16px",
                              lineHeight: "19px",
                              marginTop: "16px",
                              color: " #414A63",
                              marginLeft: "12px",
                            }}
                          >
                            {`x ${
                              seatsSelect.seatName.length - filteredData.length
                            }`}
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
                              marginLeft: {
                                sm: "auto",
                                xs: "100px",
                              },
                            }}
                          >
                            {`Rs ${
                              filteredData.length === 0 ? 0 : premiumPrice
                            }.00`}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Noto Sans",
                              fontStyle: "normal",
                              fontWeight: "700",
                              fontSize: "16px",
                              lineHeight: "19px",
                              marginTop: "16px",
                              color: " #414A63",
                              marginLeft: "12px",
                            }}
                          >
                            x {filteredData.length}
                          </Typography>
                        </Box>
                        <hr style={{ backgroundColor: "#000" }} />
                        {/* Promo and Vouchers */}
                        <Box sx={{ mt: 2 }}>
                          {isCouponApplied ? (
                            <>
                              <Typography sx={{ color: "#0CCE6B" }}>
                                COUPON APPLIED: {coupon.toUpperCase()}
                              </Typography>
                            </>
                          ) : (
                            <>
                              <TextField
                                onChange={(e) => setCoupon(e.target.value)}
                                id="outlined-basic"
                                label="Coupon Here!"
                                variant="outlined"
                                required
                                value={coupon.toUpperCase()}
                              />
                              <Button
                                variant="contained"
                                sx={{
                                  marginX: "6px",
                                  marginTop: "10px",
                                  color: "#FFFFFF",
                                  backgroundColor: "#118EEA",
                                  "&:hover": {
                                    backgroundColor: "#118EEA",
                                  },
                                }}
                                onClick={() => couponHandler()}
                              >
                                Apply
                              </Button>
                            </>
                          )}
                        </Box>
                        <Typography sx={{ color: "#A40606", mt: 1 }}>
                          {valid ? "Invalid Coupon" : ""}
                        </Typography>
                        <hr style={{ backgroundColor: "#000" }} />
                        <Box className="Total" sx={{ display: "flex" }}>
                          <Typography
                            sx={{
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "19px",
                              color: "#333",
                              marginTop: "16px",
                            }}
                          >
                            SubTotal
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "400px",
                              fontSize: "16px",
                              lineHeight: "19px",
                              marginTop: "16px",
                              marginLeft: {
                                sm: "auto",
                                xs: "15rem",
                              },
                            }}
                          >
                            {RegularData.length !== 0 ||
                            filteredData.length !== 0
                              ? total
                              : 0}
                          </Typography>
                        </Box>
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
                            Discount
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "400px",
                              fontSize: "16px",
                              lineHeight: "19px",
                              marginTop: "16px",
                              marginLeft: {
                                sm: "auto",
                                xs: "15rem",
                              },
                            }}
                          >
                            {isCouponApplied ? calculatedTotal - total : 0}
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
                              marginLeft: {
                                sm: "auto",
                                xs: "17rem",
                              },
                            }}
                          >
                            {isCouponApplied ? calculatedTotal : total}
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
                            marginLeft: {
                              lg: "auto",
                              md: "auto",
                              sm: "auto",
                              xs: "8rem",
                            },
                            color: "#118EEA",
                          }}
                        >
                          Debit Card
                        </Typography>
                      </Box>
                      {/* Card Details */}
                      <Box className="Wallets" sx={{ display: "flex" }}>
                        <Box className="GooglePay">
                          <GooglePayButton
                            environment="TEST"
                            paymentRequest={{
                              apiVersion: 2,
                              apiVersionMinor: 0,
                              allowedPaymentMethods: [
                                {
                                  type: "CARD",
                                  parameters: {
                                    allowedAuthMethods: [
                                      "PAN_ONLY",
                                      "CRYPTOGRAM_3DS",
                                    ],
                                    allowedCardNetworks: ["MASTERCARD", "VISA"],
                                  },
                                  tokenizationSpecification: {
                                    type: "PAYMENT_GATEWAY",
                                    parameters: {
                                      gateway: "example",
                                      gatewayMerchantId:
                                        "exampleGatewayMerchantId",
                                    },
                                  },
                                },
                              ],
                              merchantInfo: {
                                merchantId: "12345678901234567890",
                                merchantName: "Demo Merchant",
                              },
                              transactionInfo: {
                                totalPriceStatus: "FINAL",
                                totalPriceLabel: "Total",
                                totalPrice: `${calculatedTotal}`,
                                currencyCode: "INR",
                                countryCode: "US",
                              },
                            }}
                            onLoadPaymentData={(paymentRequest) => {
                              console.log("load payment data", paymentRequest);
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="buttonConfirm">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#1A2C50",
                      width: { sm: "100%", xs: "70%" },
                      marginTop: "50px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#FFBE00",
                        fontSize: "24px",
                        fontWeight: "500",
                      }}
                    >
                      <Link
                        to="./finalTicket"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        Book Ticket
                      </Link>
                    </Typography>
                  </Button>
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

export default ConfirmTicket;
