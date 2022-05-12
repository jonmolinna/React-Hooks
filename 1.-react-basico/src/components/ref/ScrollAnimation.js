import React, { useState, useEffect, useRef } from "react";

const ScrollAnimation = () => {
  const [background, setBackground] = useState("#282c34");
  const divRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();
      const backgroundColor = y <= 0 ? "#7a818e" : "#282c34";
      setBackground(backgroundColor);
      // console.log(y);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h2>ScrollAnimation</h2>
      <div ref={divRef} style={{ height: "40vh", background: background }}>
        <h3>Scroll to change background-color</h3>
      </div>
    </div>
  );
};

export default ScrollAnimation;
