import React, { useEffect, useState } from 'react';

const services = [
  {
    img: `${process.env.PUBLIC_URL}/images/Screenshot 2025-08-08 093543.png`,
    title: "ANALITICS",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec eleifend, sem sed dictum",
  },
  {
    img: `${process.env.PUBLIC_URL}/images/Screenshot 2025-08-08 093618.png`,
    title: "DESIGN",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec eleifend, sem sed dictum",
  },
  {
    img: `${process.env.PUBLIC_URL}/images/Screenshot 2025-08-08 093644.png`,
    title: "CONSULTING",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec eleifend, sem sed dictum",
  },
  {
    img: `${process.env.PUBLIC_URL}/images/Screenshot 2025-08-08 093710.png`,
    title: "ADVERTISING",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec eleifend, sem sed dictum",
  },
];

const services2 = [
  {
    img: `${process.env.PUBLIC_URL}/images/sb1-removebg-preview.png`,
    title: "LIFETIME UPDATES",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: `${process.env.PUBLIC_URL}/images/sb2-removebg-preview (1).png`,
    title: "LIGHTWEIGHT",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: `${process.env.PUBLIC_URL}/images/sb2-removebg-preview.png`,
    title: "RESPONSIVE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: `${process.env.PUBLIC_URL}/images/sb4-removebg-preview.png`,
    title: "MULTI-PURPOSE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const slides = [
  { id: 1, image: `${process.env.PUBLIC_URL}/images/l1.png` },
  { id: 2, image: `${process.env.PUBLIC_URL}/images/l2.png` },
  { id: 3, image: `${process.env.PUBLIC_URL}/images/l3.png` },
];

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide logic for mobile
  useEffect(() => {
    if (isMobile) {
      const t1 = setInterval(() => setIndex1((prev) => (prev + 1) % services.length), 3000);
      const t2 = setInterval(() => setIndex2((prev) => (prev + 1) % services2.length), 3000);
      return () => { clearInterval(t1); clearInterval(t2); };
    }
  }, [isMobile]);

  // 3rd part slider (always active)
  useEffect(() => {
    const t3 = setInterval(() => setIndex3((prev) => (prev + 1) % slides.length), 3000);
    return () => clearInterval(t3);
  }, []);

  return (
    <>
      {/* Title Section */}
      <div className="flex flex-col mt-10 px-3 md:px-20 py-16 text-center items-center">
        <h1 className="text-3xl md:text-4xl py-5 font-montserrat font-normal tracking-[3px] text-gray-800">
          Our Services
        </h1>
        <p className="text-gray-700 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* 1st part */}
      <div className="py-14 mb-6 px-5">
        {isMobile ? (
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center text-center transition-all duration-500">
              <img src={services[index1].img} alt={services[index1].title} className="h-18 w-20" />
              <h2 className="text-gray-750 text-xl mt-3">{services[index1].title}</h2>
              <p className="text-gray-600 mt-6">{services[index1].text}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-around">
            {services.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center px-3">
                <img src={s.img} alt={s.title} className="h-18 w-20" />
                <h2 className="text-gray-750 text-xl mt-3">{s.title}</h2>
                <p className="text-gray-600 mt-6">{s.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2nd part with background */}
      <div className="relative w-full">
        <img src={`${process.env.PUBLIC_URL}/images/f1.jpeg`} alt="" className="absolute w-full h-full md:h-96 object-cover" />
        <div className="relative py-14 mb-6 px-5 z-10">
          {isMobile ? (
            <div className="flex justify-center items-center text-white">
              <div className="flex flex-col items-center text-center transition-all duration-500">
                <img src={services2[index2].img} alt={services2[index2].title} className="h-18 w-20" />
                <h2 className="text-xl mt-3">{services2[index2].title}</h2>
                <p className="mt-6">{services2[index2].text}</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
              {services2.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center px-3">
                  <img src={s.img} alt={s.title} className="h-18 w-20" />
                  <h2 className="text-xl mt-3">{s.title}</h2>
                  <p className="mt-6">{s.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 3rd part */}
      <div className="flex mt-[5%] mb-[10%] md:mt-[7%] flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-16">
        <div className="flex flex-col gap-4 py-10 md:py-0 md:w-1/2">
          <h1 className="text-2xl md:text-4xl tracking-[3px] font-montserrat font-normal text-gray-800">
            How can we help?
          </h1>
          <p className="text-gray-700 mt-6 w-[80%]">
            Pheromone will look beautiful on any device.
          </p>
          <a href="/contact">
            <button className="mt-4 bg-black text-white px-4 md:px-6 py-2 md:py-3 font-semibold text-sm md:text-base shadow-md transition hover:bg-[#4d4f4d]">
              LEARN MORE
            </button>
          </a>
        </div>
        {/* right side */}
        <div className="flex flex-col md:flex-row justify-center md:mt-[5%] p-5 md:w-1/2">
          <div className="relative w-full overflow-hidden">
            <div className="h-[280px] md:h-[320px] w-full">
              <img src={slides[index3].image} alt="slide" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
