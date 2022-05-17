import React, { useState, useEffect } from "react";

const initialState = window.innerWidth;

const ResizeApp = () => {
  const [windowWidth, setWindowWidth] = useState(initialState);

  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Componente que se desmonta
    return () => {
      // Limpia todas las funciones (eventos) en caso que se desmonte el componente
      //   console.log("return useEffect");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2>Resize App</h2>
      {isMobile && <h2>Show only mobile device</h2>}
      <p>Ancho de pantalla: {windowWidth}</p>
    </div>
  );
};

export default ResizeApp;
