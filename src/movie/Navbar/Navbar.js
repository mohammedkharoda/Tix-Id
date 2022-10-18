import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import TixLogo from "../../assets/tix id 1.svg";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
const Navbar = () => {
  const FormSubmitHandler = () => {
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "0px 0px",
          marginBottom: "80px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: {
              lg: "space-between",
              md: "space-evenly",
              sm: "space-evenly",
              xs: "space-evenly",
            },
            gap: {
              lg: "62%",
            },
            marginBottom: "24px",
            paddingRight: {
              lg: "72px",
              md: "72px",
              sm: "120px",
              xs: "72px",
            },
          }}
        >
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
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#383782" }}>Home</Typography>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#000" }}>Movies</Typography>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#000" }}>Payments</Typography>
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: "none" }}
              onClick={FormSubmitHandler}
            >
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
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
