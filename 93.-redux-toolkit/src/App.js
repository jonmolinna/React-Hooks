import React from 'react';
import UserList from './components/UserList';
import CrudApi from './components/CrudApi';

// redux
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <hr />
      <CrudApi />
      <hr />
      <UserList />
    </ Provider >

  );
};

export default App;