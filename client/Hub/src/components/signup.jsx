import React from 'react';
import './signup.css';

const signup = () => {
    return (
        <div>
            <div className='signup-container'>
                <div className='signupinput'>
                    <h1 className='signup'>Signup</h1>
                    <input className='signup-input1' type="text" placeholder='Name' />
                    <input className='signup-input2' type="text" placeholder='Password' />
                    {/* <p className='forgot'>Forgot your password?</p> */}
                    <button className='signup-button'>Sign up</button>
                </div>







            </div>

        </div>

    );
}

export default signup;
