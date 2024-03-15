import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setLoginMessage('Please fill in both fields');
      return;
    }
    if (password.length < 6) {
      setLoginMessage("Password should be more than 5 characters");
      return;
    }

    try {
      const response = await axios.post(`https://resource-hub-1.onrender.com/login`, { username, password });
      if (response.status === 200) {
        setCookie('username', username, 365);
        setCookie('password', password, 365);
        sessionStorage.setItem('login', true);
        sessionStorage.setItem('username', username);
        navigate("/");
      } else {
        setLoginMessage('Invalid Credentials');
      }
    } catch (err) {
      console.error(err);
      setLoginMessage('Invalid Credentials');
    }
  };

  return (
    <div>
      <div className='login-container'>
        <form onSubmit={handleLogin} className='Logininput'>
          <h1 className='login'>Login</h1>
          <input
            className='login-input1'
            type="text"
            placeholder='Name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='login-input2'
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {loginMessage && <p className="login-error-message">{loginMessage}</p>}
          <p className='forgot'>Forgot your password?</p>
          <button type="submit" className='login-button'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;