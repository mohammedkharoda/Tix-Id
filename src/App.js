import Login from "./Login/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import MovieHome from "./movie/MovieHome";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movieHome" element={<MovieHome />} />
      </Routes>
    </>
  );
}

export default App;
