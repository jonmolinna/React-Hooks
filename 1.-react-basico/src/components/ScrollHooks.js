import React, { useState, useEffect } from 'react';

export default function ScrollHooks(){
    const [scrollY, setScrollY] = useState(0);
    //const [name, setName] = useState('Dallas');

    // Se ejecuta cuando hay un cambio en el variable de scrollY
    useEffect(() => {
        //console.log("Moviendo el Scroll");

        const detectarScroll = () => setScrollY(window.pageYOffset);
        
        window.addEventListener("scroll", detectarScroll);

        return () => {
            window.addEventListener("scroll", detectarScroll);
        }

    }, [scrollY]);

    // Se ejecuta solo una sola vez
    useEffect(() => {
        //console.log("Fase de Montaje")
    }, []);

    // Se ejecuta cuando hay un cambio de cualquier variable en el estado
    useEffect(() => {
        //console.log("Fase de Actualizacion")
    });

    useEffect(() => {
          
     return () => {
        //console.log("Fase de Desmontaje, van para hacer limpieza como desucribirse, temporizador")
     }
    })

    return (
        <>
            <h2>Hooks - useEffect y el Ciclo de Vida</h2>
            <p>Scroll Y del navegador {scrollY}px</p>
        </>
    )
};