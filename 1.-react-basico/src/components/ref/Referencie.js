import React from "react";
import CopyApp from "./CopyApp";
import FocusApp from "./FocusApp";
import LaodingApp from "./LaodingApp";
import MediaPlayer from "./MediaPlayer";
import RenderApp from "./RenderApp";
import ScrollAnimation from "./ScrollAnimation";

// useRef (tiene dos funcionalidades)
// 1. Interacción con el DOM (real)

// 2. Referencia Mutable

// use useRef los menos posible para conservar el estado de los componentes

const Referencie = () => {
  return (
    <>
      <h2>useRef</h2>
      <FocusApp />
      <br />
      <br />
      <CopyApp />
      <br />
      <br />
      <MediaPlayer />
      <br />
      <br />
      <ScrollAnimation />
      <br />
      <br />
      <RenderApp />
      <br />
      <br />
      <LaodingApp />
    </>
  );
};

export default Referencie;
