import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { editUser, updatedUser, addUser } from '../store/slices/crudSlicer';

const initialForm = {
    name: "",
    constellation: "",
    id: null,
}

const CrudForm = () => {
    const [form, setForm] = useState(initialForm);
    const { userEdit } = useSelector(state => state.crudSlicer);
    const dispatch = useDispatch();

    useEffect(() => {
     if(Object.keys(userEdit).length > 0){
         setForm(userEdit)
     } 
     else {
         setForm(initialForm)
     }   
    }, [userEdit])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.constellation){
            alert("Datos Incompletos")
        }

        if(form.id === null){
            createData(form)
        } else {
            updateData(form);
        } 

        handleReset();
    };

    const handleReset = () => {
        setForm(initialForm);
        dispatch(editUser({}))
    };

    const updateData = async (data) => {
        try {
            await axios.put(`http://localhost:5000/santos/${data.id}`, data);
            dispatch(updatedUser(data));
        } catch (err) {
            console.log(err.response);
        }
    };

    const createData = async (data) => {
        try {
            data.id = Date.now();
            await axios.post('http://localhost:5000/santos', data);
            dispatch(addUser(data));
        } catch (err) {
            console.log(err.response);
        }
    }

    return (
        <div>
           <h3>{ Object.keys(userEdit).length > 0? "Editar" : "Agregar"}</h3>
           <form onSubmit={handleSubmit}>
               <input 
                    type="text" 
                    name="name" 
                    placeholder="Nombre"
                    onChange={handleChange}
                    value={form.name} 
                />
               <input 
                    type="text" 
                    name="constellation" 
                    placeholder="Constelacion"
                    onChange={handleChange}
                    value={form.constellation} 
                />
               <input type="submit" value={Object.keys(userEdit).length > 0? 'Editar': 'Guardar'} />
               <input type="reset" value="Limpiar" onClick={handleReset} />
            </form> 
        </div>
    )
}

export default CrudForm;