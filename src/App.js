import { HashRouter, Routes, Route } from "react-router-dom";


import Navbar from "./component/Navbar";
import Footer from "./component/Footer";


import Heroimage from "./component/Heroimage";
import About1 from "./component/About1";
import Portfolio from "./component/Portfolio";
import Services from "./component/Services";
import Subscription from "./component/Subscription"; 
import Lastwork from "./component/Lastwork";
import Team from "./component/Team";
import Testimonials from "./component/Testimonials";
import Contact from "./component/Contact";


import About2 from "./Container/About2";
import Portfolio2 from "./Container/Portfolio2";
import Services2 from "./Container/Services2";
import OurTeam from "./Container/OurTeam";
import Testimony from "./Container/Testimony";
import Contactus from "./Container/Contactus";


function Home() {
  return (
    <>
      <Heroimage />
      <About1 />
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
