import React from 'react';
import { Redirect, Route } from 'react-router-dom';

/*
const PrivateRoute = (props) => {
    return (
        <Route {...props} />
    )
};
*/

// Simular Autenticacion
let auth;
auth = null;
auth = true;

const PrivateRoute = ({ Component, ...rest}) => {
    return (
        <Route {...rest}>
            { auth? <Component /> : <Redirect to="/login" /> }
        </Route>
    )
};

export default PrivateRoute;

// Rutas privadas