import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

const Login = () => {
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .catch(error => window.alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/100px-IMessage_logo.svg.png" alt="logo-imessage" />
                <h1>iMessage</h1>
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;