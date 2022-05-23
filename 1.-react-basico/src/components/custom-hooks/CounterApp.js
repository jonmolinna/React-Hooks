import React from "react";
import useCounter from "../../hooks/useCounter";

const CounterApp = () => {
  const [counter, increment, reset] = useCounter();

  return (
    <div>
      <h3>Counter App</h3>
      <h5>Number: {counter}</h5>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterApp;
