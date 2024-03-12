import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div>
            <div className='login-container'>
                <div className='Logininput'>
                <h1 className='login'>Login</h1>
                    <input className='login-input1' type="text" placeholder='Email' />
                    <input className='login-input2' type="text" placeholder='Password' />
                    <p className='forgot'>Forgot your password?</p>
                    <button className='login-button'>Login</button>
                </div>







            </div>

        </div>

    );
}

export default Login;
