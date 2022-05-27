import React from "react";
import CounterApp from "./CounterApp";
import ProductApp from "./ProductApp";
import TodoApp from "./TodoApp";

const ReducerApp = () => {
  return (
    <div>
      <h2>useReducer</h2>
      <CounterApp />
      <TodoApp />
      <ProductApp />
    </div>
  );
};

export default ReducerApp;
