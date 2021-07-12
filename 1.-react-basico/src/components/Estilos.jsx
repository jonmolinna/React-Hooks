import React from 'react';
import './Estilos.css';
import moduleStyle from './Estilos.module.css';
import './Estilos.scss';

export default function Estilos(){
    let myStyle = {
        borderRadius: "0.5rem",
        margin: "2rem auto",
        maxWidth: "50%",
    }

    return (
        <section className="estilos">
            <h2>Estilos CSS en React</h2>
            <h3 className="bg-react">Estilos en hoja CSS externa</h3>
            <h3 className="bg-react" style={{ borderRadius: "0.25rem", margin: "1rem"}}>Estilos en Linea (atributo style)</h3>
            <h3 className="bg-react" style={myStyle}>Estilos en linea</h3>
            <h3 className="bg-react">
                Agregando Normalize con
                <br />
                <code>@import Normalize</code> 
            </h3>
            <h3 className={moduleStyle.error}>Estilos con Módulos</h3>
            <h3 className={moduleStyle.success}>Estilos con Módulos</h3>
            <h3 className="bg-sass">Estilos con SASS</h3>
        </section>
    )
};