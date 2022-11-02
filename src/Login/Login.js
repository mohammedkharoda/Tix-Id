import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Input,
  Button,
  IconButton,
  FormControl,
  Alert,
} from "@mui/material";
import BackgroundImage from "../assets/Picture.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const Login = () => {
  const navigate = useNavigate();
  // ============= password ==================
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  // ====================== Phone Number ============
  const [phoneNumber, setIsPhoneNumber] = useState("");

  // ========================= Local Storage =========
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "true") {
      navigate("/movieHome");
      setIsLoggedIn(true);
    }
  }, []);

  // ======================= Form Checker =========
  const handleNumberChange = (event) => {
    const limit = 10;
    setIsPhoneNumber(event.target.value.slice(0, limit));
  };

  const FormSubmitHandler = () => {
    let re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (
      phoneNumber.match(re) &&
      phoneNumber.length <= 10 &&
      phoneNumber === "7778878653" &&
      values.password === "abcdef"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/movieHome");
    } else if (phoneNumber !== "7778878653") {
      alert("Wrong Phone Number");
      values.phoneNumber = "";
      setIsPhoneNumber("");
    } else {
      alert("Wrong Password");
      values.password = "";
      setValues("");
    }
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "fixed",
            top: 0,
            left: 0,
            minWidth: "100%",
            minHeight: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                md: "flex-end",
                xs: "center",
                sm: "center",
              },
              paddingTop: {
                md: "14px",
                sm: "25px",
                xs: "15px",
              },
              paddingRight: {
                md: "64px",
                sm: "25px",
                xs: "15px",
              },
              paddingBottom: {
                md: "64px",
                sm: "25px",
                xs: "15px",
              },
            }}
          >
            <CardContent
              sx={{
                width: {
                  xl: "620px",
                  lg: "670px",
                  md: "550px",
                  sm: "99%",
                  xs: "342px",
                },
                height: {
                  xl: "568px",
                  lg: "510px",
                  md: "570px",
                  xs: "490px",
                },
                marginBottom: {
                  lg: "64px",
                  md: "64px",
                  xs: "25px",
                },
                background: "#fff",
              }}
            >
              <FormControl
                sx={{
                  marginLeft: {
                    xs: "0%",
                    sm: "8%",
                    md: "10%",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "700",
                    fontSize: "36px",
                    lineHeight: "42px",
                    marginTop: {
                      xs: "57px",
                      sm: "25px",
                      md: "10px",
                    },
                  }}
                >
                  TIX ID
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "42px",
                    marginTop: "64px",
                  }}
                >
                  Phone Number
                </Typography>
                <TextField
                  sx={{
                    width: {
                      xs: "285px",
                      sm: "560px",
                      md: "435px",
                      lg: "458px",
                    },
                  }}
                  value={phoneNumber}
                  onChange={handleNumberChange}
                  helperText={
                    !phoneNumber
                      ? "Enter Phone Number"
                      : "We Do not share Your Number"
                  }
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91 |</InputAdornment>
                    ),
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "28px",
                    paddingTop: "40px",
                  }}
                >
                  Password
                </Typography>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Button
                  variant="contained"
                  onClick={FormSubmitHandler}
                  fullWidth
                  sx={{
                    marginTop: {
                      ls: "66px",
                      md: "66px",
                      xs: "50px",
                    },
                    marginBottom: "24px",
                    width: {
                      lg: "423px",
                      xs: "90%",
                      md: "420px",
                    },
                    height: " 48px",
                    fontWeight: "500",
                    fontSize: "20px",
                    backgroundColor: "#1A2C50",
                    "&:hover": {
                      backgroundColor: "#383782",
                    },
                  }}
                >
                  login
                </Button>
              </FormControl>
            </CardContent>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
