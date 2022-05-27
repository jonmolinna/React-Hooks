import React from "react";
import "./App.css";
import ContadorHooks from "./components/ContadorHook";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHook";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Formularios2 from "./components/Formularios2";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilizados";
import Referencie from "./components/ref/Referencie";
import AppEffect from "./components/effect/AppEffect";
import AppMemo from "./components/memo/AppMemo";
import CustomApp from "./components/custom-hooks/CustomApp";
import ContextApp from "./components/context/ContextApp";
import { UserProvider } from "./context/UserContext";
import { MoviesProvider } from "./context/MoviesContex";
import ReducerApp from "./components/reducer/ReducerApp";

function App() {
  return (
    <div className="App">
      <ReducerApp />
      <hr />
      <UserProvider>
        <MoviesProvider>
          <ContextApp />
        </MoviesProvider>
      </UserProvider>
      <hr />
      <CustomApp />
      <hr />
      <AppMemo />
      <hr />
      <AppEffect />
      <hr />
      <Referencie />
      <hr />
      <ContadorHooks />
      <hr />
      <ScrollHooks />
      <RelojHooks />
      <hr />
      <AjaxHooks />
      <hr />
      <HooksPersonalizados />
      <hr />
      <Referencias />
      <hr />
      <Formularios />
      <hr />
      <Formularios2 />
      <hr />
      <Estilos />
      <hr />
      <ComponentesEstilizados />
      <hr />
    </div>
  );
}

export default App;
