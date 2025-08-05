import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`top-5 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg px-4 md:px-10' : 'bg-white px-4 md:px-5'}`}>
      <div className="flex items-center justify-between py-4 max-w-7xl mx-auto">
        
        {/* Logo */}
       <div className="hidden sm:block">
  <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="h-12 w-auto" />
</div>


        {/* Info Section: Address + Mail + Button (Hidden on small screens) */}
        <div className="hidden md:flex items-center justify-center gap-8 bg-white p-4 shadow-sm">
          
          {/* Address Block */}
          <div className="flex items-start gap-3">
            <img src={`${process.env.PUBLIC_URL}/images/images__3_-removebg-preview.png`} alt="Location" className="w-[90px] h-[100px]" />
            <div className="mt-6">
              <h4 className="text-base font-semibold text-gray-800">Address:</h4>
              <p className="text-base text-gray-600">2A0, Queenstown St, USA.</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-8 border-l border-gray-300"></div>

          {/* Mail Block */}
          <div className="flex items-start gap-3">
            <img src={`${process.env.PUBLIC_URL}/images/images (2).png`} alt="Mail" className="w-[50px] h-[60px]" />
            <div className="mt-1">
              <h4 className="text-base font-semibold text-gray-800">Mail us:</h4>
              <p className="text-base text-gray-600">supporthere@mail.com</p>
            </div>
          </div>
        </div>

        {/* CTA Button - Hidden on mobile */}
        <Link to="/your-link-here">
          <button className="hidden md:block border-[3px] border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition">
            GET A QUOTES
          </button>
        </Link>
      </div>
    </header>
  );
}
