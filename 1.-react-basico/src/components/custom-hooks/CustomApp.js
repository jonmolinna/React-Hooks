import React from "react";
import CounterApp from "./CounterApp";
import MouseApp from "./MouseApp";
import TodoApp from "./TodoApp";

// La diferencia de usar un objeto y el arreglo
// en los arreglo puedes nombrar cualquiere nombre [background] => [bg]
// en los objectos debes ponder un alias { background: bd}
// en los arreglo debes importar todos los nombre o usar comas [, , , background]
// en los objetos solo importas el nombre que vas a usar { background }

const CustomApp = () => {
  return (
    <div>
      <h2>Hooks Personalizados</h2>
      <CounterApp />
      <br />
      <TodoApp />
      <br />
      <MouseApp />
    </div>
  );
};

export default CustomApp;
