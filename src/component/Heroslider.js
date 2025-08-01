import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaShoppingCart } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const navItems = [
  { label: 'Home', dropdown: ['Home One', 'Home Two'] },
  { label: 'Pages', dropdown: ['About Us', 'Team'] },
  { label: 'Service', dropdown: ['Consulting', 'Development'] },
  { label: 'Portfolio', dropdown: ['Portfolio Grid', 'Portfolio Details'] },
  { label: 'Blog', dropdown: ['Blog List', 'Blog Post'] },
  { label: 'Contact' }, // No dropdown
];

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

  // Navbar scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Image slider loop
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { image, title, subtext } = slides[index];

  return (
    <div className="relative font-sans">
      <nav
        className={`fixed z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'top-0 w-full bg-[#001848] shadow-md text-white py-4'
            : 'top-40 h-[10%] w-[80%] bg-[#001848] text-white py-2 rounded-lg'
        } left-1/2 -translate-x-1/2`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Left: Navigation */}
          <ul className="hidden md:flex gap-6 text-sm font-medium ml-12">
            {navItems.map((item) => (
              <li className="relative group mt-5 ml-3" key={item.label}>
                <span className="cursor-pointer hover:underline flex items-center gap-1">
                  {item.label} {item.dropdown && <span className="text-xs">▼</span>}
                </span>
                {item.dropdown && (
                  <ul className="absolute top-full left-0 mt-1 bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    {item.dropdown.map((option) => (
                      <li key={option} className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Right: Icons */}
          <div className="flex items-center gap-4 text-white text-lg mr-12 mt-5 ml-3">
            <FaFacebookF className="cursor-pointer hover:text-blue-400" />
            <FaTwitter className="cursor-pointer hover:text-sky-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-300" />
            <div className="relative cursor-pointer">
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </div>
            <div className="relative">
              <FiSearch
                className="cursor-pointer hover:text-gray-300"
                onClick={() => setSearchOpen(!searchOpen)}
              />
              {searchOpen && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="absolute top-full mt-2 right-0 w-48 px-3 py-1 text-black border rounded shadow"
                />
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero / Slider */}
      <div className="relative h-screen mt-[60px] overflow-hidden">
        <img src={image} alt="slide" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-10 md:px-20 text-white">
          <p className="text-lg md:text-xl text-[#001848] ml-8 mt-20">{subtext}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2 text-[#001848] ml-8 w-[50%]">{title}</h1>
          <a href="/contact">
            <button className="mt-6 bg-white text-[#001848] px-6 py-3 ml-8 rounded font-semibold text-sm shadow-md transition hover:bg-[#001848] hover:text-white">
              CONTACT US
            </button>
          </a>
        </div>

        {/* Dots */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 ml-10">
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
