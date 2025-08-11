import { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // ✅ changed import

const navItems = [
  { label: 'ABOUT', href: 'about' },
  { label: 'SERVICES', href: 'services' },
  { label: 'PORTFOLIO', href: 'portfolio' },
  { label: 'NEWS', href: 'news' },
  { label: 'TEAM', href: 'team' },
  { label: 'TESTIMONIALS', href: 'testimonials' },
  { label: 'CONTACT', href: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'top-0 w-full bg-black shadow-md text-white py-4'
            : 'top-0 sm:top-0 h-[12%] w-full sm:w-[100%] bg-transparent text-white py-2'
        } left-1/2 -translate-x-1/2`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          
          {/* Logo */}
          <Link to="home" smooth={true} duration={500} offset={-80} className="flex items-center cursor-pointer">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="Logo"
              className="h-8 w-auto md:h-10"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-12 text-sm font-medium ml-auto">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  smooth={true}
                  duration={500}
                  offset={-80} // keeps section from being hidden by navbar
                  className="cursor-pointer hover:no-underline flex items-center gap-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-xl ml-auto"
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black text-white p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                smooth={true}
                duration={500}
                offset={-80}
                className="block py-2 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
