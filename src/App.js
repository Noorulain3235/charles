import React from "react";
import Navbar from "./component/Navbar";
import Heroimage from "./component/Heroimage";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Services from "./component/Services";
import Subscription from "./component/Subcription"; 
import Lastwork from "./component/Lastwork";
import Team from "./component/Team";



export default function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Sections */}
      <section id="home">
        <Heroimage />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="subscription">
        <Subscription />
      </section>
      
      <section id="lastwork">
         <Lastwork/>
      </section> 

      <section id="team">
         <Team/>
      </section>
      
       
    </div>
  );
}
