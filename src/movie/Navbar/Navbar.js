import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import TixLogo from "../../assets/tix id 1.png";

import { Box, display } from "@mui/system";
const Navbar = () => {
  return (
    <>
      <AppBar sx={{ backgroundColor: "transparent", boxShadow: "0px 0px" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            component="img"
            sx={{
              marginTop: "24px",
              marginBottom: "24px",
              marginLeft: "72px",
              height: 32,
              width: 64,
            }}
            alt="Your logo."
            src={TixLogo}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "48px",
              marginRight: "72px",
            }}
          >
            <Typography sx={{ color: "#000" }}>Home</Typography>
            <Typography sx={{ color: "#000" }}>movies</Typography>
            <Typography sx={{ color: "#000" }}>Payments</Typography>
            <Typography sx={{ color: "#000" }}>
              <NotificationsNoneOutlinedIcon />
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                backgroundColor: "#F2C46F",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                textAlign: "center",
                fontWeight: "500",
                fontSize: "25px",
              }}
            >
              A
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
