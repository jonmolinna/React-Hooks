import React, { memo, useMemo } from 'react';

const ContadorHijo = ({ contador, sumar, restar }) => {
    /* let superNumero = 0;

    for(let i=0; i<1000000000; i++){
        superNumero++;
    }; */

    // useMemo retorna un valor calculado
    const superNumero = useMemo(() => {
        let numero = 0;

        for(let i=0; i<1000000000; i++){
            numero++;
        };
        return numero;
    }, []);
    
    console.log('Hijo contador se renderiza');

    return (
        <div style={{border:'thin solid #000', margin:'1rem', padding:'1rem'}}>
            <h2>Hijo del Contador</h2>
            <h3>{ contador }</h3>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{superNumero}</h3>
        </div>
    )
};

export default memo(ContadorHijo);

// Consiste en no renderizar componentes inecesarios por multiples veces
// Se renderiza cuando carga, cuando cambie uno de sus estado o componentes.
// memo
// useMemo