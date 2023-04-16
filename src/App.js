import React from 'react';
import Login from "./components/Login/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import MovieHome from "./components/movie/MovieHome";
import { ContainerSlots } from "./components/BookingTime/ContainerSlots";
import SeatsDisplay from "./components/SeatsSelections/SeatsDisplay";
import ConfirmTicket from "./components/Ticket/ConfirmTicket";
import FinalTicket from "./components/Ticket/FinalTicket";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movieHome" exact={true} element={<MovieHome />} />
        <Route
          path="/movieBook/:id"
          exact={true}
          element={<ContainerSlots />}
        />
        <Route
          path="/seatsSelect/:id"
          exact={true}
          element={<SeatsDisplay />}
        />
        <Route
          path="/confirmTicket/:id"
          exact={true}
          element={<ConfirmTicket />}
        />
        <Route
          path="/confirmTicket/:id/finalTicket"
          element={<FinalTicket />}
        />
      </Routes>
    </>
  );
}

export default App;
