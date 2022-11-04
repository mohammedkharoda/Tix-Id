import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../../movie/Navbar/Navbar";
import { theaterDates } from "../../movie/data";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { slotActions } from "../../components/Slices/ticketShow";

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #5A637A",
    width: "86px",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #5A637A",
    width: "86px",
    height: "82px",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#fff",
    background: "#1A2C50",
  };
  return (
    <>
      <Box
        component="section"
        sx={{
          marginTop: "100px",
        }}
      >
        <Box>
          <Typography variant="h5">Select Date</Typography>
          <Typography
            sx={{
              fontFamily: "Noto Sans",
              fontStyle: "Normal",
              fontSize: "20px",
              marginTop: "18px",
            }}
          >
            Book Ticket for the Latest Show Of {dateSelector.date}
          </Typography>
        </Box>
        <Box sx={{ width: { xs: "500px" } }}>
          <Box
            sx={{
              marginTop: "30px",
              display: "flex",
              gap: "24px",
              alignItems: "center",
            }}
          >
            {/* Box-1 */}
            {theaterDates?.map((date) => (
              <Box
                key={date.id}
                component="div"
                sx={date.id === dateSelector.showDateId ? selected : boxSX}
                onClick={() => {
                  ToggleSlotHandler();
                  dateSelectHandler({
                    showDate: date.date,
                    showDay: date.dayName,
                    showDateId: date.id,
                  });
                }}
              >
                <Typography sx={typographySx}>{date.date}</Typography>
                <Typography sx={typoDaySx}>{date.dayName}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MovieBook;
