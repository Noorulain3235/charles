import React from "react";
import Services from './Services';
import Team from './Team';
import Contact from './Contact';



export default function StickyImageSection() {
    
  return (
    <>
      <div className="relative h-[300px] w-full overflow-hidden">
      {/* Background image */}
      <img
        src={`${process.env.PUBLIC_URL}/images/6.jpg`}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-2xl md:text-4xl font-bold max-w-3xl leading-snug">
          We provide high quality services & innovative solutions for the reliable growth
        </h1>

        <button className="mt-6 bg-[#001848] text-white px-8 py-3 rounded font-semibold text-base md:text-lg shadow-md transition hover:bg-white hover:text-[#001848]">
          GET A QUERIES
        </button>
      </div>
    </div>
    <Services/>

           {/* our team */}

     <div className='py-10 mt-10 text-justify'>
  <h1 className='text-4xl font-bold text-center'>OUR TEAM</h1>
  <p className='text-sm sm:text-base mt-4 text-gray-700 text-center'>
    A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers
  </p>
</div>


   <Team/>
    <Contact/>

    </>
  );
}
