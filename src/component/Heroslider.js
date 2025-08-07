import React, { useEffect, useState } from 'react';



const slides = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/images/slide-1.jpg`,
    title: 'WE IMPROVE YOUR SALES EFFICIENCY',
    subtext: 'The government they survive artical of fortune',
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/images/slide-2.jpg`,
    title: 'WE IMPROVE YOUR SALES EFFICIENCY',
    subtext: 'The government they survive artical of fortune',
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/images/slide-3.jpg`,
    title: 'WE IMPROVE YOUR SALES EFFICIENCY',
    subtext: 'The government they survive artical of fortune',
  },
];



function App() {
  const [scrolled, setScrolled] = useState(false);
  const [index, setIndex] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { image, title, subtext } = slides[index];

  return (
    <div className="relative font-sans">
      
    

      {/* Hero / Slider */}
      <div className="relative h-screen mt-[60px] overflow-hidden">
        <img src={image} alt="slide" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center md:items-start px-4 md:px-20 text-white text-center md:text-left">
          <p className="text-base md:text-xl text-[#001848] mt-4 md:mt-20">{subtext}</p>
          <h1 className="text-2xl md:text-6xl font-extrabold leading-tight mt-2 text-[#001848] w-full md:w-[50%]">
            {title}
          </h1>
          <a href="/contact">
            <button className="mt-4 bg-white text-[#001848] px-4 md:px-6 py-2 md:py-3 rounded font-semibold text-sm md:text-base shadow-md transition hover:bg-[#001848] hover:text-white">
              CONTACT US
            </button>
          </a>
        </div>

        {/* Dots */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full border border-white ${i === index ? 'bg-white' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
