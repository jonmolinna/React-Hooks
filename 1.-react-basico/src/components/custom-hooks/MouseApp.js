import React from "react";
import useBackground from "../../hooks/useBackground";
// import useMousePosition from "../../hooks/useMousePosition";

const MouseApp = () => {
  //   const background = position.x < window.innerWidth / 2 ? "#7a818e" : "#0d1117";

  const { background, position } = useBackground();

  return (
    <div style={{ background, height: "30vh" }}>
      <h3>Mouse App</h3>
      <pre>{JSON.stringify(position, null, 2)}</pre>
    </div>
  );
};

export default MouseApp;
