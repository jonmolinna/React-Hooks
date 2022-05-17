import React, { useState } from "react";
import CicloVida from "./CicloVida";
import FetchCard from "./FetchCard";
import ResizeApp from "./ResizeApp";

// getEventListeners(window) => lista todos los eventos "clg"

const AppEffect = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>useEffect</h2>
      <CicloVida />
      <FetchCard />
      <button onClick={() => setShow(!show)}>show/hide</button>
      {show && <ResizeApp />}
    </div>
  );
};

export default AppEffect;
