export default function Team() {
  return (
    <>
      <div className="w-full min-h-[100px] py-8 flex flex-col md:flex-row justify-around items-center">
        <h1 className="text-2xl text-center mt-4 md:mt-0">OUR PARTNERS</h1>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-4 md:mt-0">
          <img
            src={`${process.env.PUBLIC_URL}/images/p-1.png`}
            alt="brand-name"
            className="h-[60px]"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/p-2.png`}
            alt="brand-name"
            className="h-[60px]"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/p-3.png`}
            alt="brand-name"
            className="h-[60px]"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/p-4.png`}
            alt="brand-name"
            className="h-[60px]"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/p-5.png`}
            alt="brand-name"
            className="h-[60px]"
          />
        </div>
      </div>






          <div className="w-full py-10 bg-blue-950">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
    <div className="py-10 px-5 flex flex-col">
      <h1 className="text-2xl font-semibold text-white mb-4">
        About OUR Consulting
      </h1>
      <p className="text-white max-w-md">
        That started from this tropic port aboard this tiny ship today still want by theam government they survive on up to thetre east side to a deluxe as soldiers of artics fortune.
      </p>
      <div className="flex mt-4">
        <p className="text-white">Any Queries:</p>
        <a href="/" className="text-white ml-1">+(1) 1234567890</a>
      </div>
    </div>

    <div className="py-10 px-5 flex flex-col">
      <h1 className="text-2xl font-semibold text-white mb-4">
        RECENT POSTS
      </h1>
      <div className="flex flex-col gap-4">
        <div className="h-[50px] flex flex-row gap-4">
          <img
            src={`${process.env.PUBLIC_URL}/images/3.jpg`}
            alt="Vision"
            className="w-[70px] h-[90px] rounded"
          />
          <div className="flex flex-col ">
            <a href="/" className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </a>
            <p className="text-gray-500">FEB 06,2018</p>
          </div>
        </div>
        <div className="h-[50px] flex flex-row gap-4 mt-10">
          <img
            src={`${process.env.PUBLIC_URL}/images/5.jpg`}
            alt="Vision"
            className="w-[70px] h-[90px] rounded"
          />
          <div className="flex flex-col">
            <a href="/" className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </a>
            <p className="text-gray-500">FEB 06,2018</p>
          </div>
        </div>
      </div>
    </div>

    <div className="py-10 px-5 flex flex-col">
      <h1 className="text-2xl font-semibold text-white mb-4">
        SOLUTIONS
      </h1>
      <div className="flex flex-col gap-2 text-white">
        <a href="/">Business Consulting</a>
        <a href="/">Financial Advisory</a>
        <a href="/">Risk Management</a>
        <a href="/">Technology Solutions</a>
        <a href="/">Human Resources</a>
      </div>
    </div>

    <div className="py-10 px-5 flex flex-col">
      <h1 className="text-2xl font-semibold text-white mb-4">
        NEWSLETTER
      </h1>
      <form className="flex flex-col gap-2">
        <input
          type="name"
          placeholder="Name"
          className="p-2 text-white bg-blue-950 border-b border-gray-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 text-white bg-blue-950 border-b border-gray-500 focus:outline-none"
        />
        <button className="bg-white text-blue-950 p-2 w-[100px] rounded mt-5">
          Subscribe
        </button>
      </form>
    </div>
  </div>
</div>
  <div className="w-full bg-[#001848] py-5 text-gray-600  text-center">
      <p className="">© Copyrights 2018. All Rights Reserved.</p>
  </div>
  
    
    </>
  );
}






// import React, { useState, useEffect } from 'react';

// const images = [
//   '/images/slide1.jpg',
//   '/images/slide2.jpg',
//   '/images/slide3.jpg',
//   '/images/slide2.jpg',
//   '/images/slide3.jpg',
// ];

// export default function ImageSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-64 sm:h-96 overflow-hidden">
//       {/* Slide images container */}
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//           width: `${images.length * 2}%`,
//         }}
//       >
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Slide ${index + 1}`}
//             className="w-full h-64 sm:h-96 object-cover flex-shrink-0"
//           />
//         ))}
//       </div>

   
    
//     </div>
//   );
// }
