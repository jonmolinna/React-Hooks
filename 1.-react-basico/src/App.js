import React from 'react';
import './App.css';
import ContadorHooks from './components/ContadorHook';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHook';

function App() {
  return (
    <div className="App">
      <ContadorHooks />
      <hr />
      <ScrollHooks />
      <RelojHooks />
      <hr />
      <AjaxHooks />
    </div>
  );
}

export default App;
