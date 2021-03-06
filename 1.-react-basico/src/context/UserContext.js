import React, { createContext, useState } from "react";

const UserContext = createContext();

const initialUser = {
  id: 1,
  name: "Kendra",
  favoriteMovies: [],
};

// Esto hace cuando hay cambios en sus estados no renderize todos los componentes que envuelve
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser(null);
  };

  const toggleFavoriteMovieToUser = (movieId) => {
    const isFavorite = user.favoriteMovies.includes(movieId);
    const favoriteMovies = isFavorite
      ? user.favoriteMovies.filter((id) => id !== movieId)
      : [...user.favoriteMovies, movieId];

    setUser({
      ...user,
      favoriteMovies,
    });
  };

  const data = { user, login, logout, toggleFavoriteMovieToUser };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
