import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const Movie = ({ movie }) => {
  const imgStyles = {
    height: "260px",
    width: "100%",
    objectFit: "cover",
  };

  const btnStyle = {
    padding: "10px",
    backgroundColor: "#0d6efd",
    color: "white",
    borderRadius: "7px",
    border: "none",
  };

  const { user, toggleFavoriteMovieToUser } = useContext(UserContext);

  const isFavorite = user?.favoriteMovies?.includes(movie.id);

  return (
    <div style={{ border: "1px solid #f4f4f4" }}>
      <img style={imgStyles} src={movie.imageUrl} alt={movie.title} />
      <div style={{ padding: "20px" }}>
        <h4>{movie.title}</h4>
        {user?.id && (
          <button
            style={btnStyle}
            onClick={() => toggleFavoriteMovieToUser(movie.id)}
          >
            {isFavorite ? "Favorito" : "No favorito"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Movie;
