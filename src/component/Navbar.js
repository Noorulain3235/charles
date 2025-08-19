import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/Shop" },
  { label: "About Us", path: "/Aboutus" },
  { label: "Contact Us", path: "/Contactus" },
];

export default function Navbar() {


  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    // scrolled code
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return (

    ) => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <nav
      className={`fixed z-50 transition-all duration-300 ease-in-out ${scrolled
        ? "top-0 w-full bg-black shadow-md text-white py-4"
        : "top-0 sm:top-0 h-[12%] w-full sm:w-[100%] bg-transparent text-white py-3"
        } left-1/2 -translate-x-1/2`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* items/links code */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="cursor-pointer hover:no-underline flex 
                hover:text-[#4d5259] items-center gap-1 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* logo code */}
        <Link
          to="/"
          className="flex items-center cursor-pointer absolute left-1/2 transform -translate-x-1/2"
        >
          <div className="text-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/Screenshot_2025-08-18_041050-removebg-preview.png`}
              alt="logo"
              className="h-12 object-contain"
            />

          </div>
        </Link>

        {/* Search, Cart , 3line Menu */}
        <div className="flex items-center gap-4">
          {/* Search code */}
          <button
            className="p-2 hover:text-[#4d5259] transition-colors duration-200 hidden md:block"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search size={20} />
          </button>

          {/* Cart code */}
          <button
            onClick={() => setCartOpen(true)}
            className="p-2 hover:text-[#4d5259] transition-colors duration-200 relative hidden md:block"
          >
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-[white] text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
              0
            </span>
          </button>

          {/* 3line Menu  */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* searchbar code */}
      {searchOpen && (
        <div className="absolute top-full right-2 w-[30] bg-white text-black ">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>
      )}

      {/* 3 lineMenu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="block py-2 cursor-pointer hover:text-[#4d5259] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          

          
          <div className="flex gap-4 pt-4 border-t border-gray-700">
            <button
              className="flex items-center gap-2 py-2 hover:text-[#4d5259]"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search size={16} />
              Search
            </button>
            <button
              className="flex items-center gap-2 py-2 hover:text-[#4d5259]"
              onClick={() => {
                setCartOpen(true);
                setMenuOpen(false);
              }}
            >
              <ShoppingCart size={16} />
              Cart (0)
            </button>
          </div>
        </div>
      )}

      
      {cartOpen && (
        <div className="fixed top-0 right-0 h-900 w-[35%] bg-white shadow-lg z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-base font-semibold text-black">Shopping Cart</h2>
            <button
              onClick={() => setCartOpen(false)}
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <X size={22} className="text-black" />
            </button>
          </div>
          <div className="flex-1 p-4 py-56 flex items-center justify-center text-gray-500">
            No products in the cart.
          </div>
          <div className="p-4">
            <Link
              to="/Shop"
              className="block w-full text-center bg-transparent border border-black text-black py-3 hover:bg-black hover:text-white transition"
              onClick={() => setCartOpen(false)}
            >
              Continue Shopping
            </Link>
          </div>
        </div>


      )}
    </nav>
  );
}
