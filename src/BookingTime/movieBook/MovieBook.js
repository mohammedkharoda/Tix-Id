import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../../movie/Navbar/Navbar";
import { theatreData } from "../../movie/data";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { slotActions } from "../../components/Slices/ticketShow";
import Footer from "../../movie/Footer/Footer";

const MovieBook = () => {
  const dispatch = useDispatch();
  const dateSelector = useSelector((state) => state.slot.DateAndDay);

  const dateSelectHandler = (date) => {
    dispatch(slotActions.dateShow(date));
  };

  const ToggleSlotHandler = () => {
    dispatch(slotActions.toggle());
  };

  const boxSX = {
    padding: "18px",
    border: "1px solid #5A637A",
    width: { lg: "86px", md: "86px", sm: "86px", xs: "50%" },
    height: "82px",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#333333",
    "&:hover": {
      backgroundColor: "#282764",
      color: "#fff",
    },
  };
  const typographySx = {
    display: {
      lg: "inline-block",
      md: "inline-block",
      sm: "inline-block",
      xs: "",
    },
    whiteSpace: "nowrap",
    fontWeight: "500",
    fontSize: "16px",
    color: "inherit",
    textAlign: "center",
  };

  const typoDaySx = {
    textAlign: "center",
    fontWeight: "900",
    fontSize: "20px",
    color: "inherit",
    textTransform: "capitalize",
  };

  const selected = {
    padding: "18px",
    border: "1px solid #5A637A",
    width: { lg: "86px", md: "86px", sm: "86px", xs: "50%" },
    height: "82px",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#fff",
    background: "#1A2C50",
  };

  return (
    <>
      <Box component="section" sx={{ marginTop: "24px", overflowX: "hidden" }}>
        <Navbar />
      </Box>
      <Box
        component="section"
        sx={{
          marginTop: "100px",
          marginLeft: { lg: "72px", md: "72px", sm: "10px", xs: "15px" },
        }}
      >
        <Box>
          <Typography variant="h5">Select Date</Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontStyle: "Normal",
              fontSize: "20px",
              marginTop: "18px",
            }}
          >
            Book Ticket for the Latest Show Of {dateSelector.date}
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              marginTop: "30px",
              display: "flex",
              flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
              gap: "24px",
              alignItems: "center",
            }}
          >
            {/* Box-1 */}
            {theatreData?.map((date) =>
              date?.theaterDates?.map((day) => (
                <Box
                  component="div"
                  sx={day.id === dateSelector.showDateId ? selected : boxSX}
                  onClick={() => {
                    ToggleSlotHandler();
                    dateSelectHandler({
                      showDate: day.date,
                      showDay: day.dayName,
                      showDateId: day.id,
                    });
                  }}
                >
                  <Typography sx={typographySx}>{day.date}</Typography>
                  <Typography sx={typoDaySx}>{day.dayName}</Typography>
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MovieBook;
