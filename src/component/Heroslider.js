import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const navItems = [
  { label: 'Home', dropdown: ['HOME VERSION ONE', 'HOME VERSION TWO'] },
  { label: 'Pages', dropdown: ['ABOUT US', 'OUR TEAM','FAQ`S','404','SHOP','SHOP DETAILS'] },
  { label: 'Service', dropdown: ['SERVICES VERSION ONE', 'SERVICES VERSION TWO', 'SERVICE DETAILS'] },
  { label: 'Portfolio', dropdown: ['PROJECTS', 'PROJECT DETAILS'] },
  { label: 'Blog', dropdown: ['Blog List', 'Blog GRID','BLOG DETAILS'] },
  { label: 'Contact' },
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

// ... imports and data remain unchanged

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
      {/* Navbar */}
     <nav
  className={`fixed z-50 transition-all duration-300 ease-in-out ${
    scrolled
      ? 'top-0 w-full bg-[#001848] shadow-md text-white py-4'
      : 'top-0 sm:top-40 h-[12%] w-full sm:w-[90%] bg-[#001848] text-white py-2'
  } left-1/2 -translate-x-1/2`}
>

        <div className="max-w-7xl mx-auto flex items-center  justify-between px-4">
          {/* ✅ Mobile Left: Logo + Hamburger + Icons */}
          <div className="md:hidden flex items-center justify-between w-full">
            <h1 className="text-4xl font-bold mt-1">Charles</h1>


            <div className="flex items-center gap-3">
              {/* Cart */}
              <div className="relative cursor-pointer">
                <FaShoppingCart />
                <span className="absolute -top-2 -right-2  bg-red-500 text-xs text-white w-4 h-4 flex items-center justify-center rounded-full">
                  2
                </span>
              </div>

              {/* Search */}
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

              {/* Hamburger */}
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* ✅ Desktop Nav */}
          <ul className="hidden md:flex gap-12 text-sm font-medium ml-5 mt-4">
            {navItems.map((item) => (
              <li className="relative group" key={item.label}>
                <span className="cursor-pointer hover:no-underline flex items-center gap-1">
                  {item.label} {item.dropdown && <span className="text-xs">▼ </span>}
                </span>
                {item.dropdown && (
                  <ul className="absolute top-full left-0 mt-1 bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                    {item.dropdown.map((option) => (
                      <li
                        key={option}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* ✅ Desktop-only Icons */}
          <div className="hidden md:flex items-center gap-4 text-white text-lg">
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

        {/* ✅ Mobile Menu with Social Icons */}
        {menuOpen && (
          <div className="md:hidden bg-[#001848] text-white p-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <span className="block py-2">{item.label}</span>
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((option) => (
                      <span key={option} className="block py-1 text-sm">
                        {option}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* ✅ Social Icons inside Mobile Menu */}
            <div className="flex justify-center gap-6 mt-6 text-xl">
              <FaFacebookF className="cursor-pointer hover:text-blue-400" />
              <FaTwitter className="cursor-pointer hover:text-sky-400" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-300" />
            </div>
          </div>
        )}
      </nav>

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
