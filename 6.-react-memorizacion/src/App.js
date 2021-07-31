import React from 'react';
import Contador from './componentes/Contador';

function App() {
  return (
    <div>
      <h1>Memorizacion en React</h1>
      <hr />
      <h2>Teoria</h2>
      <h3>
        <a href="https://es.reactjs.org/docs/react-api.html#reactmemo" target="_blank" rel="noreferrer">
          memo
        </a>
      </h3>
      <ul>
        <li>Se encarga de memorizar un componente.</li>
        <li>Lo vuelve a memorizar al momento de que sus props cambian.</li>
        <li>Evita re-renderizados</li>
        <li>Hay que evitarlo en la medida de lo posible, pues podria ser mas costosa la tarea de memorizacion que el re-renderizado del componente</li>
        <li>Usalo, cuando
          <ul>
            <li>Tenemos muchos elementos renderizados en una lista</li>
            <li>Llamamos datos de APIs</li>
            <li>Un componente se vuelve muy pesado</li>
            <li>Salen alertas de rendimiento en la consola</li>
          </ul>
        </li>
      </ul>
      <h3>
        <a href="https://es.reactjs.org/docs/hooks-reference.html#usecallback" target="_blank" rel="noreferrer">
          useCallback
        </a>
      </h3>
      <ul>
        <li>Memoriza una funcion, para no volverla a definir en cada render.</li>
        <li>Usalo siempre que se pase una funcion como prop a un componente memorizado</li>
        <li>Usalo siempre que se pase una funcion como parametro de un efecto</li>
      </ul>
      <h3>
        <a href="https://es.reactjs.org/docs/hooks-reference.html#usememo" target="_blank" rel="noreferrer">
          useMemo
        </a>
      </h3>
      <ul>
        <li>Memoriza un valor calculado, es decir el resultado de una funcion.</li>
        <li>Genera propiedades computadas.</li>
        <li>Usalo en procesos pesados.</li>
      </ul>
      <hr />
      <Contador />
    </div>
  );
}

export default App;

// memo => memoriza un componente por completo.
// useCallback => permite memorizar funciones puras.
// useMemo => permite memorizar un valor calculado.