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
} from "@mui/material";
import BackgroundImage from "../../assets/Picture.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Protected from "./Protected";
const Login = () => {
  const navigate = useNavigate();
  // ============= password ==================
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (event) => {
    setValues((prevValue) => {
      return {
        showPassword: prevValue.showPassword,
        password: event.target.value,
      };
    });
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
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "true") {
      navigate("/movieHome");
    }
  }, []);
  // ======================= Form Checker =========
  const handleNumberChange = (event) => {
    setIsPhoneNumber(event.target.value.slice(0, 10));
  };

  const FormSubmitHandler = () => {
    let re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (
      phoneNumber.match(re) &&
      phoneNumber.length <= 10 &&
      phoneNumber === "12345678" &&
      values.password === "abcdef"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/movieHome");
    } else {
      alert("Wrong Password");
      values.password = "";
      setValues("");
    }
  };

  return (
    <>
      <Protected />
      <Box>
        <Box
          id="background"
          sx={{
            display: "flex",
            justifyContent: {
              lg: "flex-end",
              md: "flex-end",
              sm: "flex-end",
              xs: "center",
            },
            alignItems: "center",
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          }}
        >
          <CardContent
            sx={{
              padding: { sm: "52px 52px", xs: "40px 20px" },
              marginRight: "10px",
              marginLeft: { xs: "10px" },
              background: "#fff",
            }}
          >
            <FormControl>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "700",
                  fontSize: "36px",
                  lineHeight: "42px",
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
                }}
              >
                Phone Number
              </Typography>
              <TextField
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
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
                    lg: "66px",
                    xs: "50px",
                  },
                  width: {
                    md: "423px",
                    xs: "100%",
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
    </>
  );
};

export default Login;
