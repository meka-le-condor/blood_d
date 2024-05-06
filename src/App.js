import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './component/Login.jsx';
import About from './component/About.jsx';
import RegisterDonor from './component/RegisterDonor.jsx';
import FindBlood from './component/FindBlood.jsx';
import Accueil from './component/Accueil.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
             
              
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<RegisterDonor />} />
              <Route path="/findblood" element={<FindBlood />} />
              <Route path="/" element={<Accueil />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
