import React from 'react';
import CrudApi from './components/CrudApi';
import { CrudProvider } from './context/CrudContext';

function App() {
  return (
    <div>
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
    </div>
  );
}

export default App;