import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserList } from '../store/slices/crudSlicer';
import axios from "axios";

import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const CrudApi = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.crudSlicer);

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const res = await axios.get('http://localhost:5000/santos');
                dispatch(setUserList(res.data))
            } catch (err) {
                console.log(err.response);
            }
        };
        getAllUsers();
    }, [dispatch]);

    return (
        <div className='container'>
            <h2>CRUD API</h2>
            <article className="grid-1-2">
                <CrudForm />
                {
                    users && <CrudTable data={users} />
                }                
            </article>
        </div>
    )
}

export default CrudApi;