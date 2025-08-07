import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './component/Navbar';
import Heroslider from './component/Heroslider';
import Boxes from './component/Boxes';
import About from './component/About';
import About1 from './component/Image';
import Footer from './component/Footer';
import Contactus from './component/Contactus';
import OurServices from './component/OurServices'; // if you have this page

function App() {
  const location = useLocation();

  // Combine both pages in one condition
  const hideLayout = location.pathname === "/Contactus" || location.pathname === "/OurServices";

  return (
    <>
      {!hideLayout && <Navbar />}
      {!hideLayout && <Heroslider />}
      {!hideLayout && <Boxes />}
      {!hideLayout && <About />}
      {!hideLayout && <About1 />}

      <Routes>
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/OurServices" element={<OurServices />} />
       
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
