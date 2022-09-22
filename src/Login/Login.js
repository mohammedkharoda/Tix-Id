import React, { useState } from "react";
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
} from "@mui/material";
import BackgroundImage from "../assets/Picture.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const Login = () => {
  // ============= password ==================
  const [values, setValues] = React.useState({
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
      setIsPhoneNumber("");
      values.password = "";
      alert("Welcome!");
    } else {
      alert("Wrong Credentials");
      values.password = "";
      setIsPhoneNumber("");
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
              justifyContent: "flex-end",
              padding: "64px",
            }}
          >
            <CardContent
              sx={{
                width: "670px",
                height: "640px",
                marginBottom: "64px",
                background: "#fff",
              }}
            >
              <FormControl sx={{ marginLeft: "80px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "700",
                    fontSize: "36px",
                    lineHeight: "42px",
                    marginTop: "98px",
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
                  value={phoneNumber}
                  onChange={handleNumberChange}
                  // error={!phoneNumber}
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
                    marginTop: "66px",
                    marginBottom: "24px",
                    width: "423px",
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
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "12px",
                    lineHeight: "14px",
                    transform: "translateX(160px)",
                    fontWeight: "400",
                    color: "#5A637A",
                  }}
                >
                  don't have account?
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    marginTop: "8px",
                    width: "423px",
                    height: " 48px",
                    color: "#1A2C50",
                    fontWeight: "500",
                    fontSize: "20px",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#383782",
                      color: "#DADFE8",
                    },
                  }}
                >
                  create account
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
