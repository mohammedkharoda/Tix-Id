import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
const MovieHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const tokenData = localStorage.getItem("isLoggedIn");
    if (tokenData === null || tokenData === undefined) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Navbar />
    </>
  );
};

export default MovieHome;
