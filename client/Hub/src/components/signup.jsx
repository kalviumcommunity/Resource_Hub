import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [signupError, setSignupError] = useState('');

  const onSubmit = async (data) => {
    const { username, password } = data;
    try {
      if (password.length < 6) {
        setSignupError("Password should be more than 5 characters");
        return;
      }

      const response = await axios.post(`https://resource-hub-1.onrender.com/signup`, { username, password });
      if (response.status === 200) {
        sessionStorage.setItem('login', true);
        sessionStorage.setItem('signupSuccess', 'Signup successful'); 
        sessionStorage.setItem('username', username);
        navigate("/");
      } else {
        setSignupError('Signup failed');
      }
    } catch (err) {
      console.error(err);
      setSignupError('An error occurred during the signup');
    }
  };

  return (
    <div>
      <div className='signup-container'>
        <div className='signupinput'>
          <h1 className='signup'>Signup</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className='signup-input1'
              type="text"
              placeholder='Username'
              {...register("username", { required: true })}
            />
            {errors.username && <p className="error">Username is required</p>}

            <input
              className='signup-input2'
              type="password"
              placeholder='Password'
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && errors.password.type === "minLength" && (
              <p className="error">Password should be more than 5 characters</p>
            )}

            {signupError && <p className="error">{signupError}</p>}
            <button className='signup-button' type="submit">Sign up</button>
          </form>
          <p className='option'>
            Already a user? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
