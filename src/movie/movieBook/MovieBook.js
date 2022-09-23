import React from "react";
import { useParams } from "react-router-dom";
const MovieBook = () => {
  const { id } = useParams();

  return (
    <>
      <h2>Movie Book pages</h2>
    </>
  );
};

export default MovieBook;
