import React, { useState } from "react";
import Card from "./Card";

const LaodingApp = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Show/Hidden</button>
      {show && <Card />}
    </div>
  );
};

export default LaodingApp;
