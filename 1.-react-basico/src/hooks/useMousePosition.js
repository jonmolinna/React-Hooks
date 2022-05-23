import { useState, useEffect } from "react";

const initialPosition = { x: null, y: null };

const useMousePosition = () => {
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      setPosition({
        x: clientX,
        y: clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // desmontando
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

export default useMousePosition;
