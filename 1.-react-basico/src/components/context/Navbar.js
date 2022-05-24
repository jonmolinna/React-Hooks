import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const Navbar = () => {
  const btnStyle = {
    padding: "5px",
    backgroundColor: "#198754",
    color: "white",
    borderRadius: "15px",
  };

  const { user, login, logout } = useContext(UserContext);

  return (
    <nav
      style={{
        border: "1px solid blue",
        padding: "0 20px",
        maxWidth: "1200px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <span style={{ fontWeight: "bold" }}>
        <h2>{user ? `Hola ${user?.name}` : "Bienvenido"}</h2>
      </span>
      {user ? (
        <button style={btnStyle} onClick={logout}>
          Cerrar Sesion
        </button>
      ) : (
        <button style={btnStyle} onClick={login}>
          Iniciar Sesion
        </button>
      )}
    </nav>
  );
};

export default Navbar;
