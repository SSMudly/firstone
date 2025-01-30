import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"; // Import the logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      {/* Desktop Navbar (flex container with links aligned to the right) */}
    
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link to="/">
        <img src={logo} alt="Logo" className="h-14 w-auto rounded-xl" />
      </Link>
        <div className="text-white text-xl font-semibold">
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white text-lg hover:bg-gray-700 hover:text-yellow-400 px-4 py-2 rounded transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg hover:bg-gray-700 hover:text-yellow-400 px-4 py-2 rounded transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/events"
            className="text-white text-lg hover:bg-gray-700 hover:text-yellow-400 px-4 py-2 rounded transition-all duration-300"
          >
            Events
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg hover:bg-gray-700 hover:text-yellow-400 px-4 py-2 rounded transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? 'X' : '☰'}
        </button>
      </div>

      {/* Mobile Navbar (show when the menu is open) */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white text-lg px-4 py-2 hover:bg-gray-700 hover:text-yellow-400 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white text-lg px-4 py-2 hover:bg-gray-700 hover:text-yellow-400 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/events"
              className="text-white text-lg px-4 py-2 hover:bg-gray-700 hover:text-yellow-400 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/contact"
              className="text-white text-lg px-4 py-2 hover:bg-gray-700 hover:text-yellow-400 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
