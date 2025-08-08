import React, { useEffect, useState } from 'react';



const slides = [
  { id: 1, image: `${process.env.PUBLIC_URL}/images/s1.png` },
  { id: 2, image: `${process.env.PUBLIC_URL}/images/s2.png` },
  { id: 3, image: `${process.env.PUBLIC_URL}/images/s3.png` },
];
export default function App() {

   const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const { image } = slides[index];

    return (

        <div className="flex bg-[#d2d4d2] mt-[5%] md:mt-[2%]   flex-col md:flex-row items-center justify-center min-h-screen gap-10 px-6 md:px-16">
            {/* right side */}
            <div className="flex flex-col gap-4 py-10 md:py-0">
                <h1 className="text-2xl text-gray-800 md:text-4xl  [letter-spacing:3px] font-montserrat font-normal">
                    MODERN PORTFOLIO
                </h1>
                <p className='text-gray-700 mt-6'>
                    Amazing solution for portfolio websites which you can fit for freelancers, photographers or agency showcase. Pheromone easily and efficiently scales your project with one code base.
                </p>
                 <a href="/contact">
            <button className="mt-4 bg-black text-white px-4 md:px-6 py-2 md:py-3  font-semibold text-sm md:text-base shadow-md transition hover:bg-[#4d4f4d] ">
              CHECK IT OUT
            </button>
          </a>
            </div>

            {/* left side */}
            <div className="flex flex-col md:flex-row justify-center md:mt-[7%] p-10">


                <div className="relative w-full overflow-hidden">
      {/* Image */}
      <div className="h-[350px] md:h-[400px] w-full">
        <img
          src={image}
          alt="slide"
          className="w-full h-full "
        />
      </div>

    
    </div>

                    

            </div>
        </div>
    );
}


