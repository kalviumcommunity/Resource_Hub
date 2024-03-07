import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import HUB from './components/HUB';
import './App.css';
import Add from './components/Add'

function App() {

  return (
    <>
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element={<HUB />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
    </>


  );
}

export default App;