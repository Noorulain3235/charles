import React, { useEffect, useState } from 'react';


const slides = [
  { id: 1, image: `${process.env.PUBLIC_URL}/images/l1.png` },
  { id: 2, image: `${process.env.PUBLIC_URL}/images/l2.png` },
  { id: 3, image: `${process.env.PUBLIC_URL}/images/l3.png` },
];
export default function Portfolio() {

      const [index, setIndex] = useState(0);
     
       useEffect(() => {
         const interval = setInterval(() => {
           setIndex((prev) => (prev + 1) % slides.length);
         }, 3000); // Change every 3 seconds
         return () => clearInterval(interval);
       }, []);
     
       const { image } = slides[index];

    return (
        <>
            <div className="flex flex-col mt-10 px-3 md:px-20 py-16 text-center justify-center items-center">
                <h1 className="text-3xl text-gray-800 md:text-4xl  py-5 [letter-spacing:3px] font-montserrat font-normal">
                    Our Services
                </h1>
                <p className="text-gray-700 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec eleifend, sem sed dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.s
                </p>

            </div>


            {/* all services */}
            <div className=" py-14 mb-6 px-5 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-around">
                {/* 1 */}
                <div className="relative px-3 w-full  flex flex-col  items-center justify-center text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/Screenshot 2025-08-08 093543.png`}
                        alt=""
                        className="h-18 w-20 object-cover"
                    />
                    <h2 className="text-gray-750 text-xl mt-3">ANALITICS</h2>
                    <p className="text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec eleifend, sem sed dictum</p>
                </div>
                {/* 2 */}
                <div className="relative px-3 w-full  flex flex-col  items-center justify-center text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/Screenshot 2025-08-08 093618.png`}
                        alt=""
                        className=" h-18 w-20 object-cover"
                    />
                    <h2 className=" text-gray-750 text-xl  mt-3">DESIGN</h2>
                    <p className="text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec eleifend, sem sed dictum</p>
                </div>
                {/* 3 */}
                <div className="relative px-3 w-full  flex flex-col  items-center justify-center text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/Screenshot 2025-08-08 093644.png`}
                        alt=""
                        className=" h-18 w-20 object-cover"
                    />
                    <h2 className="text-gray-750 text-xl  mt-3">CONSULTING</h2>
                    <p className="text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec eleifend, sem sed dictum</p>
                </div>
                {/* 4 */}
                <div className="relative px-3 w-full  flex flex-col  items-center justify-center text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/Screenshot 2025-08-08 093710.png`}
                        alt=""
                        className=" mt-3 h-19 w-20 "
                    />
                    <h2 className="text-xl text-gray-750  mt-3">ADVERTISING</h2>
                    <p className="text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec eleifend, sem sed dictum</p></div>
            </div>



            <div className="relative w-full h-full">
                <div className="absolute  w-full h-full">
                    <img
                    src={`${process.env.PUBLIC_URL}/images/f1.jpeg`}
                    alt=""
                    className=" w-full h-full md:h-96 object-cover "
                />
                </div>





                 <div className=" py-20 mb-6 px-5 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-around">
                {/* 1 */}
                <div className="relative px-3 py-3 w-full  flex flex-col  items-center justify-center text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/sb1-removebg-preview.png`}
                        alt=""
                        className="h-20 w-24 object-cover"
                    />
                    <h2 className="text-white text-xl mt-3">LIFETIME UPDATES</h2>
                    <p className="text-white mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                {/* 2 */}
                <div className="relative px-3 w-full  flex flex-col  items-center justify-center text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/sb2-removebg-preview (1).png`}
                        alt=""
                        className=" h-18 w-20 object-cover"
                    />
                    <h2 className=" text-white  text-xl  mt-3">LIGHTWEIGHT</h2>
                    <p className="text-white mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                {/* 3 */}
                <div className="relative px-3 w-full  flex flex-col  items-center justify-center text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/sb2-removebg-preview.png`}
                        alt=""
                        className=" h-18 w-20 object-cover"
                    />
                    <h2 className="text-white  text-xl  mt-3">RESPONSIVE </h2>
                    <p className="text-white  mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                {/* 4 */}
                <div className="relative px-3 w-full  flex flex-col  items-center justify-center text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/sb4-removebg-preview.png`}
                        alt=""
                        className=" mt-3 h-19 w-20 "
                    />
                    <h2 className="text-xl text-white  mt-3"> MULTI-PURPOSE</h2>
                    <p className="text-white  mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
            </div>



            </div>




            <div className="flex mt-[5%] mb-[10%] md:mt-[2%]   flex-col md:flex-row  justify-center items-center md:justify-normalmin-h-screen gap-10 px-6 md:px-16">
            {/* right side */}
            <div className="flex flex-col gap-4 py-10 md:py-0">
                <h1 className="text-2xl text-gray-800 md:text-4xl  [letter-spacing:3px] font-montserrat font-normal">
                   How can we help?
                </h1>
                <p className='text-gray-700 mt-6 w-[80%] '>
                   Pheromone will look beautiful on any device. Serve high-resolution images to devices with retina displays. We have a dedicated support team ready to answer your questions. Feel free to contact us to provide some feedback on our templates or give us suggestions for new themes.
                </p>
                 <a href="/contact">
            <button className="mt-4 bg-black text-white px-4 md:px-6 py-2 md:py-3  font-semibold text-sm md:text-base shadow-md transition hover:bg-[#4d4f4d] ">
              LEARN MORE
            </button>
          </a>
            </div>

            {/* left side */}
            <div className="flex flex-col md:flex-row justify-center md:mt-[5%] p-5">


                <div className="relative w-full overflow-hidden">
      {/* Image */}
      <div className="h-[280px] md:h-[320px] w-full">
        <img
          src={image}
          alt="slide"
          className="w-full h-full "
        />
      </div>

    
    </div>

                    

            </div>
        </div>


        </>

    );

}