import React, { Component } from 'react';

export default class Padre extends Component {
    state = {
        contador: 0,
    };

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render(){
        return(
            <>
            <h2>Comunicacion entre Componentes</h2>
            <p>Contador <b>{this.state.contador}</b></p>
            <Hijo mensaje="Mensaje para el hijo 1" incrementarContador={this.incrementarContador} />
            <Hijo mensaje="Mensaje para el hijo 2" incrementarContador={this.incrementarContador} />
            </>
        )
    }
};

function Hijo(props){
    return(
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </>
    )
};