import { useMemo } from "react";
import useMousePosition from "./useMousePosition";

// Hooks dentro de un hooks

const useBackground = () => {
  const position = useMousePosition();

  const background = useMemo(
    () => (position.x < window.innerWidth / 2 ? "#7a818e" : "#0d1117"),
    [position]
  );

  return { background, position };
};

export default useBackground;
