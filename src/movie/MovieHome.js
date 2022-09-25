import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import MovieSelection from "./movieSelection/movieSelection";
import Ads from "./Ads/Ads";
import SeeMoreMovie from "./seeMoreMovie.js/SeeMoreMovie";
import Footer from "./Footer/Footer";
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
      <MovieSelection />
      <Ads />
      <SeeMoreMovie />
      <Footer />
    </>
  );
};

export default MovieHome;
