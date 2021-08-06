import React, { Component } from "react";
import data from '../helpers/data.json';

function ElementoLista(props){
    return(
        <li>
            <a href={props.elemento.web} target="_blank" rel="noreferrer">{props.elemento.name}</a>
        </li>
    )
};

export default class RenderizadoElementos extends Component {
    constructor(props){
        super(props);
        this.state = {
            seasons: ["Primavera", "Verano", "Otoño", "Invierno"]
        }
    }

    render(){
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del Año</h3>
                <ol>
                    {
                        this.state.seasons.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))
                    }
                </ol>
                <h3>Frameworks Frontend JavaScript</h3>
                <ul>
                    {
                        data.frameworks.map(element => (
                            <ElementoLista key={element.id} elemento={element} />
                        ))
                    }
                </ul>
            </div>
        )
    }
};