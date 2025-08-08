import React from "react";
import { Router } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Heroimage from './component/Heroimage';
import About from './component/About';
import Portfolio from './component/Portfolio';



export default function App() {
  return (
    <Router>
      <Navbar />
        <Heroimage />
        <About />
        <Portfolio/>
      {/* <Routes>
        <Route path="/About" element={<About />} /> 
      </Routes> */}
    </Router>
  );
}
