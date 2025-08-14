// import React from "react";
// import Navbar from "./component/Navbar";
// import Heroimage from "./component/Heroimage";
// import About from "./component/About";
// import Portfolio from "./component/Portfolio";
// import Services from "./component/Services";
// import Subscription from "./component/Subcription"; 
// import Lastwork from "./component/Lastwork";
// import Team from "./component/Team";
// import Testimonials from "./component/Testimonials";
// import Contact from "./component/Contact";
// import Footer from "./component/Footer";


// export default function App() {
//   return (
//     <div className="App">
//       <Navbar />

//       {/* Sections */}
//       <section id="home">
//         <Heroimage />
//       </section>

//       <section id="about">
//         <About />
//       </section>

//       <section id="portfolio">
//         <Portfolio />
//       </section>

//       <section id="services">
//         <Services />
//       </section>

//       <section id="subscription">
//         <Subscription />
//       </section>

//       <section id="lastwork">
//          <Lastwork/>
//       </section> 

//       <section id="team">
//          <Team/>
//       </section>


//       <section id="testimonials">
//          <Testimonials/>
//       </section>


//         <section id="contact">
//          <Contact/>
//       </section>


//        <section id="footer">
//          <Footer/>
//       </section>
//     </div>
//   );
// }





// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./component/Navbar";
// import Heroimage from "./component/Heroimage";
// import About from "./component/About";
// import About2 from "./component/About2";
// import Portfolio from "./component/Portfolio";
// import Portfolio2 from "./component/Portfolio2";
// import Services from "./component/Services";
// import Services2 from "./component/Services2";
// import Subscription from "./component/Subcription"; 
// import Lastwork from "./component/Lastwork";
// import Team from "./component/Team";
// import OurTeam from "./component/OurTeam";
// import Testimony from "./component/Testimony";
// import Testimonials from "./component/Testimonials";
// import Contact from "./component/Contact";
// import Contactus from "./component/Contactus";
// import Footer from "./component/Footer";

// function Home() {
//   return (
//     <>
//         <Heroimage />
//       <About />
//       <Portfolio />
//       <Services />
//       <Subscription />
//       <Lastwork />
//       <Team />
//       <Testimonials />
//       <Contact />
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <Navbar />


//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about2" element={<About2/>} />
//         <Route path="/portfolio2" element={<Portfolio2/>} />
//         <Route path="/services2" element={<Services2/>} />  
//         <Route path="/ourteam" element={<OurTeam />} />
//         <Route path="/testimony" element={<Testimony />} />
//         <Route path="/contactus" element={<Contactus />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }




import { HashRouter, Routes, Route } from "react-router-dom";

// Layout components
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

// Front page components
import Heroimage from "./component/Heroimage";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Services from "./component/Services";
import Subscription from "./component/Subscription"; // make sure filename matches exactly!
import Lastwork from "./component/Lastwork";
import Team from "./component/Team";
import Testimonials from "./component/Testimonials";
import Contact from "./component/Contact";

// Other pages
import About2 from "./Container/About2";
import Portfolio2 from "./Container/Portfolio2";
import Services2 from "./Container/Services2";
import OurTeam from "./Container/OurTeam";
import Testimony from "./Container/Testimony";
import Contactus from "./Container/Contactus";

// Home page layout (only ONE definition)
function Home() {
  return (
    <>
      <Heroimage />
      <About />
      <Portfolio />
      <Services />
      <Subscription />
      <Lastwork />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/portfolio2" element={<Portfolio2 />} />
          <Route path="/services2" element={<Services2 />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/testimony" element={<Testimony />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}
