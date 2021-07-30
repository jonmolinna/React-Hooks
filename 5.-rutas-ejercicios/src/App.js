import React from 'react';
import CrudApi from './componentes/CrudApi';
import SongSearch from './componentes/SongSearch';

function App() {
  return (
    <div>
      <h1>Ejercicios React Router</h1>
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
    </div>
  );
}

export default App;