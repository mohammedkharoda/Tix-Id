import Login from "./Login/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import MovieHome from "./movie/MovieHome";
import MovieBook from "./BookingTime/movieBook/MovieBook";
import { ContainerSlots } from "./BookingTime/ContainerSlots";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movieHome" element={<MovieHome />} />
        <Route path="/movieBook/:id" element={<ContainerSlots />} />
      </Routes>
    </>
  );
}

export default App;
