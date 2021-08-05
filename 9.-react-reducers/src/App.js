import React from 'react';
import Contador from './components/Contador';
import ContadorMejorada from './components/ContadorMejorada';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr />
      <ShoppingCart />
      <hr />
      <ContadorMejorada />
      <hr />
      <Contador />
    </div>
  );
}

export default App;
