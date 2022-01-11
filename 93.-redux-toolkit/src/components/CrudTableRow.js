import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { deleteUser, editUser } from '../store/slices/crudSlicer';

const CrudTableRow = ({ el }) => {
    let { name, constellation, id } = el;
    const dispatch = useDispatch();

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/santos/${id}`);
            dispatch(deleteUser(id))
        } catch (error) {
            console.log(error.response);
        }
    };

    const handleEditUser = () => {
        dispatch(editUser(el))
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                <button onClick={handleEditUser}>Editar</button>
                <button onClick={handleDelete}>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow;