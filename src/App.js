
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './component/Login.jsx';
import About from './component/About.jsx';
import RegisterDonor from './component/RegisterDonor.jsx';
import RegisterOrga from './component/RegisterOrga.jsx';

import FindBlood from './component/FindBlood.jsx';
import Accueil from './component/Accueil.jsx';
import Donnor from './component/Donnor.jsx';
import Organisation from './component/Organisation.jsx';




function App() {
  return (
    <>
 
      <BrowserRouter>
        <Routes>
              
                
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<RegisterDonor />} />
                <Route path="/registerO" element={<RegisterOrga />} />
                <Route path="/findblood" element={<FindBlood />} />               
                <Route path="/donor" element={<Donnor />} />
                <Route path="/orga" element={<Organisation />} />
                <Route path="/" element={<Accueil />} />
      
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
