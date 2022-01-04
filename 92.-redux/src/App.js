import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Contador from './componentes/Contador';

function App() {
  return (
    <Provider store={store}>
      <div style={{textAlign: "center"}}>
        <h1>Redux</h1>
        <Contador />
        <hr />
      </div>
    </Provider>
  );
}

export default App;
