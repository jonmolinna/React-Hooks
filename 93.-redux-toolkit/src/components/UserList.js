import React, { useState, useEffect } from 'react';
import { fetchAllUsers } from '../store/slices/users';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {
    const dispatch = useDispatch();
    const { list } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);

    console.log('HOLA')

    return (
        <div className='container mt-4'>
            <div className='row'>
                {
                    list.map((user, index) => (
                        <div key={index} className='col-md-3 mb-4'>
                            <div className='card'>
                                <img src={user.avatar} alt="avatar" />
                                <div className='card-body'>
                                    <h5 className='card-title'>{`${user.first_name} ${user.last_name}`}</h5>
                                    <p className='card-text'>{user.email}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default UserList;