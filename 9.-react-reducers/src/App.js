import React from 'react';
import Contador from './components/Contador';
import ContadorMejorada from './components/ContadorMejorada';
import CrudApi from './components/CrudApi';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr />
      <CrudApi />
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
