import React, { useReducer } from "react";

const types = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
  reset: "RESET",
};

const initialState = 10.25;

// modifica al estado cuendo se inicialize el programa
const init = (value) => {
  return parseInt(value);
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.increment:
      return state + 1;
    case types.decrement:
      return state - 1;
    case types.reset:
      return initialState;
    default:
      return state;
  }
};

const CounterApp = () => {
  const [counter, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div>
      <h3>Counter App</h3>
      <p>Numero: {counter}</p>
      <button onClick={() => dispatch({ type: types.increment })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: types.reset })}>Reset</button>
      <button onClick={() => dispatch({ type: types.decrement })}>
        Decrement
      </button>
    </div>
  );
};

export default CounterApp;
