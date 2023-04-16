import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import TixLogo from "../../assets/tix id 1.svg";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
    console.log(event.currentTarget);
  };
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const FormSubmitHandler = () => {
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <Box id="WrapperChild">
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "0px 0px",
          marginBottom: "80px",
          padding: "0 60px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            marginBottom: "24px",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <Box
              component="img"
              sx={{
                marginTop: "24px",
                marginBottom: "24px",
                height: "100%",
                width: "100%",
              }}
              alt="Tix Logo."
              src={TixLogo}
            />
          </Link>

          {isMobile ? (
            <>
              <IconButton onClick={handleMenu}>
                <HiMenu />
              </IconButton>
              <Menu
                id="menu-appbar"
                /* to open the anchor at the top below the cursor */
                anchorEl={anchor}
                /* anchor origin so that it open it that location */
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
              >
                <IconButton onClick={() => setAnchor(null)}>
                  <IoMdClose />
                </IconButton>
                <MenuItem onClick={() => setAnchor(null)}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "30px",
                      flexWrap: { sm: "no-wrap", xs: "wrap" },
                      justifyContent: { sm: "no-wrap", xs: "center" },
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
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "48px",
              }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                <Typography sx={{ color: "#383782" }}>Home</Typography>
              </Link>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                <Typography sx={{ color: "#000" }}>Movies</Typography>
              </Link>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
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
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
