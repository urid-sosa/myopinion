import React from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Home/Inicio';
import About from './Components/About/About';
import Form from './Components/Form/Form';
import Cuestionario from './Components/Cuestionario/Cuestionario';
import Cuestionario2 from './Components/Cuestionario/Cuestionario2';
import Cuestionario3 from './Components/Cuestionario/Cuestionario3';
import Cuestionario4 from './Components/Cuestionario/Cuestionario4';
import Cuestionario5 from './Components/Cuestionario/Cuestionario5';
import FCuestioanrio from './Components/finalizarEncuesta/finalizarEncuesta';
import EncuestaF from './Components/encuestaFinalizada/encuestaFinalizada';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
        <Router>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path='/about' element={<About/>} />
              <Route path='/form' element={<Form/>} />
              <Route path='/cuestionario01' element={<Cuestionario/>} />
              <Route path='/cuestionario02' element={<Cuestionario2/>} />
              <Route path='/cuestionario03' element={<Cuestionario3/>} />
              <Route path='/cuestionario04' element={<Cuestionario4/>} />
              <Route path='/cuestionario05' element={<Cuestionario5/>} />
              <Route path='/finalizarencuesta' element={<FCuestioanrio/>} />
              <Route path='/encuestafinalizada' element={<EncuestaF/>} />
          </Routes>
        </Router>  
  );
}

export default App;
