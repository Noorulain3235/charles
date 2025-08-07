import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const navItems = [
  { label: 'Home', href: '/', dropdown: ['HOME VERSION ONE', 'HOME VERSION TWO'] },
  {
    label: 'About Us',
    dropdown: ['ABOUT US', 'OUR TEAM', 'FAQ`S', '404', 'SHOP', 'SHOP DETAILS'],
  },
  {
    label: 'Service', href: '/OurServices',
    dropdown: ['SERVICES VERSION ONE', 'SERVICES VERSION TWO', 'SERVICE DETAILS'],
  },
  { label: 'Our Team', dropdown: ['PROJECTS', 'PROJECT DETAILS'] },
  { label: 'Blog', dropdown: ['Blog List', 'Blog GRID', 'BLOG DETAILS'] },
  { label: 'Contact', href: '/Contactus' },
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



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`top-5 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg px-4 md:px-10'
            : 'bg-white px-4 md:px-5'
        }`}
      >
        <div className="flex items-center justify-between py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="hidden sm:block">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Info Section */}
          <div className="hidden md:flex items-center justify-center gap-8 bg-white p-4 shadow-sm">
            {/* Address Block */}
            <div className="flex items-start gap-3">
              <img
                src={`${process.env.PUBLIC_URL}/images/images__3_-removebg-preview.png`}
                alt="Location"
                className="w-[90px] h-[100px]"
              />
              <div className="mt-6">
                <h4 className="text-base font-semibold text-gray-800">Address:</h4>
                <p className="text-base text-gray-600">2A0, Queenstown St, USA.</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-8 border-l border-gray-300"></div>

            {/* Mail Block */}
            <div className="flex items-start gap-3">
              <img
                src={`${process.env.PUBLIC_URL}/images/images (2).png`}
                alt="Mail"
                className="w-[50px] h-[60px]"
              />
              <div className="mt-1">
                <h4 className="text-base font-semibold text-gray-800">Mail us:</h4>
                <p className="text-base text-gray-600">supporthere@mail.com</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/your-link-here">
            <button className="hidden md:block border-[3px] border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition">
              GET A QUOTES
            </button>
          </Link>
        </div>
      </header>

      <nav
        className={`fixed z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'top-0 w-full bg-[#001848] shadow-md text-white py-4'
            : 'top-0 sm:top-40 h-[12%] w-full sm:w-[90%] bg-[#001848] text-white py-2'
        } left-1/2 -translate-x-1/2`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          {/* Mobile Nav */}
          <div className="md:hidden flex items-center justify-between w-full">
            <h1 className="text-4xl font-bold mt-1">Charles</h1>

            <div className="flex items-center gap-3">
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

              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-12 text-sm font-medium ml-5 mt-4">
            {navItems.map((item) => (
              <li className="relative group" key={item.label}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className="cursor-pointer hover:no-underline flex items-center gap-1"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="cursor-pointer hover:no-underline flex items-center gap-1">
                    {item.label} {item.dropdown && <span className="text-xs">▼ </span>}
                  </span>
                )}

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

          {/* Desktop Icons */}
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

        {/* Mobile Menu */}
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

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-6 text-xl">
              <FaFacebookF className="cursor-pointer hover:text-blue-400" />
              <FaTwitter className="cursor-pointer hover:text-sky-400" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-300" />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
