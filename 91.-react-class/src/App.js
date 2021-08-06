import React from 'react';
import Componente from './components/Componente';
import Estado from './components/Estado';
import Propiedades from './components/Propiedades';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';

function App() {
  return (
    <div>
      <section>
        <Componente msg="Hola soy un componente de clase" />
        <hr />
        <Propiedades 
          cadena="Esto es una cadena de Texto"
          numero={19}
          booleano={true}
          arreglo={[1,2,3]}
          objeto={{nombre:"Jon", correo:"jmolina2624@gmail.com"}}
          funcion={(num) => num * num}
          elementoReact={<i>Esto es un elemento de React</i>}
          componenteReact={<Componente msg="Soy un Componente pasado como Prop" />}
        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr />
        <EventosES6 />
        <hr/>
        <EventosES7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <ComunicacionComponentes />
        <hr />
        <CicloVida />
        <hr />
        <AjaxApis />
      </section>
    </div>
  );
}

export default App;
