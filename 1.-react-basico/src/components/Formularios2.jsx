import React, { useState } from 'react';

export default function Formularios(){
    const [form, setForm] = useState({});

    // Es obligatorio que los atributos tengan name para que funcione este metodo
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        });
    };


    const handleChecked = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.checked
        });
    };

    return (
        <>
            <h2>Formularios</h2>
            <form>
                <label htmlFor="nombre">Nombre: </label>
                <input 
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange} 
                />

                <p>Elige tu Sabor JS Favorito</p>
                <input 
                    type="radio" id="vanilla" name="sabor" value="vanilla" 
                    onChange={handleChange}
                />
                <label htmlFor="vanilla">Vanilla</label>
                <input 
                    type="radio" id="react" name="sabor" value="react" 
                    onChange={handleChange}
                />
                <label htmlFor="react">React</label>
                <input 
                    type="radio" id="angular" name="sabor" value="angular" 
                    onChange={handleChange}
                />
                <label htmlFor="angular">Angular</label>
                <input 
                    type="radio" id="vue" name="sabor" value="vue" 
                    onChange={handleChange}
                />
                <label htmlFor="vue">Vue</label>
                <input 
                    type="radio" id="svelte" name="sabor" value="svelte" 
                    onChange={handleChange}
                />
                <label htmlFor="svelte">Svelte</label>

                <p>Elige tu lenguaje de programacion favorito</p>
                <select name="lenguaje" onChange={handleChange} >
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br />
                <br />
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input 
                    type="checkbox" id="terminos" name="terminos"
                    onChange={handleChecked} 
                />
                <br />
                <br />
                <input type="submit" />

            </form>
        </>
    )
};