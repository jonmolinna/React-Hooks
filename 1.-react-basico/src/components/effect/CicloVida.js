import React, { useState, useEffect } from "react";

// Aqui debes meter el codigos pesado ya que se ejecuta con imp en caso que no la uses
console.log("Pre-render");

const CicloVida = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // Se ejecuta cuando hay un render
  useEffect(() => {
    console.log("useEffect no dependency");

    return () => {
      console.log("useEffect no dependency");
    };
  });

  // Se ejecuta una sola vez cuando el componente se carga
  useEffect(() => {
    console.log("useEffect []");

    return () => {
      console.log("cleanup useEffect []");
    };
  }, []);

  // Se ejecuta cuando hay cambios en el estado de counter 1
  useEffect(() => {
    console.log("useEffect [counter 1]");

    return () => {
      console.log("useEffect [counter 1]");
    };
  }, [counter1]);

  useEffect(() => {
    console.log("useEffect [counter 2]");

    return () => {
      console.log("useEffect [counter 2]");
    };
  }, [counter2]);

  //   Se ejecutara cuando cambien uno de los dos de los estados
  useEffect(() => {
    console.log("useEffect [counter 1, counter 2]");
  }, [counter1, counter2]);
  return (
    <div>
      <h2>Ciclo de vida</h2>
      <h4>Clicks c1: {counter1}</h4>
      <h4>Clicks c2: {counter2}</h4>
      <button onClick={() => setCounter1(counter1 + 1)}>Increment c1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Increment c1</button>
    </div>
  );
};

export default CicloVida;
