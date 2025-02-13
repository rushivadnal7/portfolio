import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuDrawerHandler = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all flex justify-center duration-300 backdrop-blur-md shadow-lg ${
        isScrolled ? "h-16 bg-black/80" : "h-20 bg-black"
      }`}
    >
      <div className="flex w-full justify-between items-center px-6 py-4">
        <div className="flex flex-col gap-1 cursor-pointer md:hidden" onClick={menuDrawerHandler}>
          {hamburgerMenu ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-purple-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-purple-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </div>

        <div className={`absolute top-full left-0 w-2/3 h-screen bg-black transition-transform duration-500 ${hamburgerMenu ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
          <ul className="mt-16 flex flex-col gap-4 text-white px-6">
            <li className="cursor-pointer hover:text-purple-400 transition-all" onClick={() => navigate("/")}>Home</li>
            <li className="cursor-pointer hover:text-purple-400 transition-all" onClick={() => navigate("/products")}>About</li>
            <li className="cursor-pointer hover:text-purple-400 transition-all" onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </div>

        <span className="text-2xl font-bold uppercase bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent animate-glow poppins">
          Rushikesh Vadnal
        </span>

        <ul className="hidden md:flex gap-10 uppercase text-sm text-gray-300">
          <li className="cursor-pointer hover:text-purple-400 transition-all" onClick={() => navigate("/")}>Home</li>
          <li className="cursor-pointer hover:text-purple-400 transition-all" onClick={() => navigate("/products")}>About</li>
          <li className="cursor-pointer hover:text-purple-400 transition-all" onClick={() => navigate("/contact")}>Contact</li>
        </ul>

        {/* <div className="hidden md:flex w-72 justify-center cursor-pointer text-purple-400 font-semibold">
          Your Logo
        </div> */}
      </div>

      <style>
        {`
          @keyframes glow {
            0% { text-shadow: 0 0 10px rgba(168, 85, 247, 0.8); }
            50% { text-shadow: 0 0 20px rgba(168, 85, 247, 1); }
            100% { text-shadow: 0 0 10px rgba(168, 85, 247, 0.8); }
          }

          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
