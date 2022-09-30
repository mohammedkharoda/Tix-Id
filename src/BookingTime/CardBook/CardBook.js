import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
const CardBook = () => {
  const selectedSlot = useSelector((state) => state.slot.tempSelectedTheatre);
  const dateSelector = useSelector((state) => state.slot.DateAndDay);

  console.log(selectedSlot);
  const mainHeaderBox = {
    marginTop: "30px",
  };
  const headingTypo = {
    fontWeight: "700",
    fontSize: "28px",
    fontFamily: "Roboto",
  };
  const margins = {
    marginTop: "36px",
    marginLeft: "24px",
    marginRight: "24px",
    marginBottom: "174px",
  };

  const boldText = {
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "32px",
    color: "#333",
    marginTop: "12px",
  };

  const greyTypo = {
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "21px",
    color: "#5A637A",
    paddingTop: "25px",
  };

  const warningTypo = {
    fontSize: "12px",
    fontWeight: "400",
    color: "#9DA88E",
    lineHeight: "14px",
    marginTop: "24px",
  };

  const button = {
    backgroundColor: "#1A2C50",
    color: "#FFBE00",
    textAlign: "center",
    borderRadius: "5px",
    padding: "16px 12px",
    textTransform: "uppercase",
    fontSize: "24px",
    marginTop: "36px",
  };
  return (
    <>
      <Box component="section" sx={mainHeaderBox}>
        <Box
          sx={{
            border: "1px solid #5A637A",
            height: "333px",
            borderRadius: "12px",
          }}
        >
          <Box sx={margins}>
            <Box>
              <Typography sx={headingTypo}>{selectedSlot.venue}</Typography>

              <Typography sx={greyTypo}>
                {dateSelector.day},{dateSelector.date}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={boldText}>
                  {selectedSlot.TheaterName}
                </Typography>
                <Typography sx={boldText}>
                  {selectedSlot.showType_Time}
                </Typography>
              </Box>
            </Box>
            <Typography sx={warningTypo}>
              * Pemilihan kursi dapat dilakukan setelah ini
            </Typography>
            <Box sx={button}>BELI SEKARANG</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CardBook;
