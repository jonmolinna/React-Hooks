import React, { useState, useRef, useEffect } from "react";

const RenderApp = () => {
  const [text, setText] = useState("");

  const rendersRef = useRef(1);

  useEffect(() => {
    // const renders = rendersRef.current;
    // rendersRef.current++
    rendersRef.current = rendersRef.current + 1; // LOS CAMBIOS NO RENDERIZAN AL COMPONENTE, hasta que un estado lo haya renderizado
  });

  return (
    <div>
      <h2>Render App</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h3>Renders: {rendersRef.current}</h3>
    </div>
  );
};

export default RenderApp;
