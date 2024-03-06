import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import HUB from './components/HUB';
import './App.css';
import Update from './components/Update'

function App() {

  return (
    <>
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element={<HUB />} />
        <Route path="/om" element={<Update />} />
      </Routes>
    </BrowserRouter>
    </>


  );
}

export default App;