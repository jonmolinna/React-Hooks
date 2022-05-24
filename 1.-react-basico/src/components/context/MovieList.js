import React, { useContext } from "react";
import MoviesContext from "../../context/MoviesContex";
import Movie from "./Movie";

const MovieList = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <div
      style={{
        padding: "10px 20px",
        maxWidth: "1200px",
        border: "1px solid blue",
      }}
    >
      <article
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </article>
    </div>
  );
};

export default MovieList;
