import React, {  useRef } from 'react';

export default function Referencias(){
    // import React, { createRef, useRef } from 'react';
    //let refMenu = createRef(); // Esto se usa en un componente de clase
    let refMenu = useRef();
    let refMenuBtn = useRef(); 

    /** Manipulando el DOM, no es recomendado */
    /*
    const handleToggleMenu = (e) => {
        const $menu = document.getElementById("menu");

        if(e.target.textContent === "Menu"){
            e.target.textContent = "Cerrar";
            $menu.style.display = "block";
        } else {
            e.target.textContent = "Menu";
            $menu.style.display = "none";
        };
    };
    */

    const handleToggleMenu = (e) => {
        if(refMenuBtn.current.textContent === "Menu"){
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        } else {
            refMenuBtn.current.textContent = "Menu";
            refMenu.current.style.display = "none"
        }
    };

    return (
        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
            <nav id="menu" ref={refMenu} style={{ display: "none"}}>
                <a href="index.html">Seccion 1</a>
                <br />
                <a href="index.html">Seccion 2</a>
                <br />
                <a href="index.html">Seccion 3</a>
                <br />
                <a href="index.html">Seccion 4</a>
                <br />
                <a href="index.html">Seccion 5</a>
            </nav>
        </>
    )
};

/*
Las referencias sirven para manipular el DOM, no se recomienda usar mucho
Se usa caso que quieres cambiar un estilo en el DOM
*/