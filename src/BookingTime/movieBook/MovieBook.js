import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../../movie/Navbar/Navbar";
import TheaterSelect from "../TheaterSelect/TheaterSelect";
import { theatreData } from "../../movie/data";
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
    padding: "18px",
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
    display: "inline-block",
    whiteSpace: "nowrap",
    fontWeight: "500",
    fontSize: "16px",
    color: "inherit",
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
    width: "86px",
    height: "82px",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#fff",
    background: "#1A2C50",
  };

  return (
    <>
      <Box component="section" sx={{ marginTop: "24px" }}>
        <Navbar />
      </Box>
      <Box component="section" sx={{ marginTop: "100px", marginLeft: "72px" }}>
        <Box>
          <Typography variant="h5">Select Date</Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
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
              gap: "24px",
              alignItems: "center",
            }}
          >
            {/* Box-1 */}
            {theatreData?.map((date) =>
              date?.theaterDates?.map((day) => (
                <Box
                  component="div"
                  sx={day.id ===  dateSelector.showDateId ? selected : boxSX}
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
      <hr style={{ width: "630px", marginLeft: "72px", marginTop: "22px" }} />
      <TheaterSelect />
    </>
  );
};

export default MovieBook;
