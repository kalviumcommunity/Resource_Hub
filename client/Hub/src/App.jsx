import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HUB from './components/HUB';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<HUB />} />
      </Routes>
    </Router>
  );
}

export default App;