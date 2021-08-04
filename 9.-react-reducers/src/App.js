import React from 'react';
import Contador from './components/Contador';
import ContadorMejorada from './components/ContadorMejorada';

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr />
      <ContadorMejorada />
      <hr />
      <Contador />
    </div>
  );
}

export default App;
