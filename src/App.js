import Login from "./Login/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import MovieHome from "./movie/MovieHome";
import MovieBook from "./BookingTime/movieBook/MovieBook";
import { ContainerSlots } from "./BookingTime/ContainerSlots";
import SeatsDisplay from "./SeatsSelections/SeatsDisplay";
import ConfirmTicket from "./Ticket/ConfirmTicket";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movieHome" element={<MovieHome />} />
        <Route path="/movieBook/:id" element={<ContainerSlots />} />
        <Route path="/seatsSelect/:id" element={<SeatsDisplay/>}/>
        <Route path="/confirmTicket/:id" element={<ConfirmTicket/>} /> 
      </Routes>
    </>
  );
}

export default App;
