import React, { useState, useEffect } from "react";

const services = [

{

title: "Business Services",

subtitle: "The tiny ship today stiller",

image: `${process.env.PUBLIC_URL}/images/3.jpg`,
},

{

title: "Consumer Product",

subtitle: "The tiny ship today stiller",

image: `${process.env.PUBLIC_URL}/images/4.jpg`,
},

{

title: "Financial Services",

subtitle: "The tiny ship today stiller",

image: `${process.env.PUBLIC_URL}/images/5.jpg`,
},

{

title: "Travel and Aviation",

subtitle: "The tiny ship today stiller",

image: `${process.env.PUBLIC_URL}/images/6.jpg`,
},

{

title: "Software Research",

subtitle: "The tiny ship today stiller",

image:`${process.env.PUBLIC_URL}/images/7.jpg`,
},

{

title: "Quality Resourcing",

subtitle: "The tiny ship today stiller",

image: `${process.env.PUBLIC_URL}/images/8.jpg`

},

];
export default function Service() {

    const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === services.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000);
        return () => clearInterval(interval);
      }, []);
    return (
       <>
        
    {/* our services */}
    <div className=' px-10 py-10 mt-10 text-justify'>
      <h1 className='text-4xl font-bold text-center'>OUR SERVICES</h1>
      <p className='text-1xl mt-4 text-gray-700 text-center'>A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers</p>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9">

  {services.map((service, index) => (

    <div

      key={index}

      className="flex border  overflow-hidden hover:shadow-lg transition-shadow duration-300 "

    >

      <img

        src={service.image}

        alt={service.title}

        className="w-28 h-28 object-cover flex-shrink-0"

      />

      <div className="p-4 flex flex-col justify-between">

        <div>

          <h3 className="text-lg font-bold text-blue-1000">{service.title}</h3>

          <p className="text-gray-500">{service.subtitle}</p>

        </div>

        <a

          href="#"

          className="mt-2 text-[#001848] font-medium text-sm "

        >

          READ MORE

              </a>

            </div>

         </div>
        ))}
     </div> */}


                  {/* SLIDE Mobile  */}
     <div className="block lg:hidden relative w-full overflow-hidden mt-9">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${currentIndex * 100}%)`,
    }}
  >
    {services.map((service, index) => (
      <div
        key={index}
        className="w-full flex-shrink-0 flex justify-center px-4"
      >
        <div className="flex w-[350px] h-[150px] border ">
          <img
            src={service.image}
            alt={service.title}
            className="w-20 h-30 object-cover flex-shrink-0"
          />
          <div className="flex flex-col justify-between p-4 flex-grow">
            <div>
              <h3 className="text-lg font-bold text-blue-1000 break-words">
                {service.title}
              </h3>
              <p className="text-gray-500 break-words">
                {service.subtitle}
              </p>
            </div>
            <a
              href="#"
              className="mt-2 text-[#001848] font-medium text-sm"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


 {/* ✅ GRID (Desktop Only) */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex border overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-28 h-28 object-cover flex-shrink-0"
            />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-blue-1000">
                  {service.title}
                </h3>
                <p className="text-gray-500">{service.subtitle}</p>
              </div>
              <a
                href="#"
                className="mt-2 text-[#001848] font-medium text-sm"
              >
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>



      <h5 className='text-base sm:text-2xl py-12 text-gray-800 text-center'>
  You can also send us an email and we’ll get in touch shortly, or Call us
</h5>

<div className='text-base sm:text-2xl underline text-blue-800 text-center'>
  <a href="#">info@support.com</a> (or)
  <a href="#"> +1 234 6780 900</a>
</div>

    </div>

  <div className="relative w-full h-[340px]">
  {/* Background Image */}
  <img 
    src={`${process.env.PUBLIC_URL}/images/download.png`} 
    alt="Vision"
    className="w-full h-full object-cover absolute"
  />

  {/* Overlay Content */}
  <div className="absolute bg-slate-50 px-4 py-6 rounded  
                  w-[90%] max-w-xl mx-auto left-1/2 transform -translate-x-1/2 
                  top-1/2 -translate-y-1/2 
                  sm:w-[80%] md:w-[600px]">

    <p className="text-center text-sm md:text-base text-gray-700">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem neque ut, libero mollitia quae culpa fuga tempore eaque officiis necessitatibus provident deleniti rerum obcaecati modi repellendus corrupti nulla enim animi.
    </p>

    <h5 className="text-blue-800 mt-4 text-center text-sm md:text-lg font-semibold">
      Rashed Ka.
    </h5>
  </div> 
</div>
       </>
            
            
    
    );
    }