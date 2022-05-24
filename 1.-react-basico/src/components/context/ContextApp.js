import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";

const ContextApp = () => {
  return (
    <div>
      <h3>useContext</h3>
      <Navbar />
      <MovieList />
    </div>
  );
};

export default ContextApp;
