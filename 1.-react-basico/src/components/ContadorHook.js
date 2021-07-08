import React, { useState } from 'react';

export default function ContadorHooks(){
    const [contador, setContador] = useState(0);

    return (
        <>
            <h2>Hooks - useState</h2>
            <button onClick={() => setContador(contador + 1)}>+</button>
            <button onClick={() => setContador(contador - 1)}>-</button>
            <h3>{contador}</h3>
        </>
    )
};