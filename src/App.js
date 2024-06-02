import { BrowserRouter , Routes, Route } from 'react-router-dom';
import 'react-toastify/ReactToastify.css';


import React, { useEffect, useState } from 'react';
import Login from './component/Login.jsx';
import About from './component/About.jsx';
import RegisterDonor from './component/RegisterDonor.jsx';
import RegisterOrga from './component/RegisterOrga.jsx';
import './App.css'
import FindBlood from './component/FindBlood.jsx';
import Accueil from './component/Accueil.jsx';
import Donnor from './component/Donor/Donnor.jsx';
import Organisation from './component/Orga/Organisation.jsx';
import Historique from './component/Donor/Historique.jsx';
import Listeorga from './component/Donor/Listeorga.jsx';
import Listedonor from './component/Orga/Listedonor.jsx';
import Banksang from './component/Orga/Banksang.jsx';




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
                        <Route path="/historique" element={<Historique />} />
                        <Route path="/listorga" element={<Listeorga />} />
                        <Route path="/listdonor" element={<Listedonor />} />
                        <Route path="/bank" element={<Banksang />} />
                        <Route path="/orga" element={<Organisation />} />
                        <Route path="/" element={<Accueil />} />
              
                </Routes>
              </BrowserRouter>
    </>
  );
}

export default App;
