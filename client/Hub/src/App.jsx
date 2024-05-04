import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import HUB from './components/HUB';
import './App.css';
import Add from './components/Add'
import Update from './components/Update';
import Login from './components/login';
import Signup from './components/signup';

function App() {

  return (
    <>
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element={<HUB />} />
        <Route path="/add" element={<Add />} />
        <Route path='/Update/:id' element={<Update />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={< Signup/>} />
        


      </Routes>
    </BrowserRouter>
    </>


  );
}

export default App;