import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Footer from "../movie/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { movieData } from "../movie/data";
import { useSelector } from "react-redux";
import Protected from "../Login/Protected";
const FinalTicket = () => {
  const seatsSelect = useSelector((state) => state.slot.SeatSelected);
  const navigate = useNavigate();
  const homePage = () => {
    navigate("../movieHome");
  };
  let { id } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  useEffect(() => {
    if (id) {
      let temp = movieData.primary.find((movieInfo) => movieInfo.id === +id);
      let temp2 = movieData.secondary.find((movieInfo) => movieInfo.id === +id);
      setMovieInfo(temp || temp2);
    }
  }, [id]);

  const movieTitle = movieInfo?.title;
  return (
    <>
      <Protected />
      <Box>
        <Box
          sx={{ textAlign: "center", marginTop: "40px" }}
          className="Message_holder"
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "700",
              fontSize: { md: "56px", xs: "35px" },
              fontFamily: "Noto Sans",
              textTransform: "capitalize",
            }}
          >
            Hurray!!{""} Movie Booked
          </Typography>
          <Box
            sx={{
              width: { md: "30%", sm: "45%" },
              height: { md: "30%", sm: "45%" },
              display: "block",
              margin: "auto",
            }}
          >
            <img
              style={{ width: "100%" }}
              src={require("../assets/45732-cinema-animation.gif")}
              alt="Successfully"
            />
          </Box>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "20px",
              overflowWrap: "normal",
            }}
          >
            You have Book the Show of {movieTitle}! and The Total Seats are{" "}
            {seatsSelect.seatName.length}.
          </Typography>
          <Box onClick={homePage}>
            <Button
              variant="contained"
              sx={{ marginBottom: "60px", marginTop: "60px" }}
            >
              Return To Movie's
            </Button>
          </Box>
        </Box>
      </Box>
      <hr></hr>
      <Footer />
    </>
  );
};

export default FinalTicket;
