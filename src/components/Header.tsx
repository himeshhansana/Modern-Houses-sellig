import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, HomeIcon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-white/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <HomeIcon className="w-6 h-6 text-emerald-600" />
          <span className="text-xl font-bold hover:text-emerald-600">Modern Villas</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="items-center hidden space-x-8 md:flex">
          <Link to="/" className="font-bold text-gray-800 transition-colors hover:text-emerald-600">
            Home
          </Link>
          <Link to="/listings" className="font-bold text-gray-800 transition-colors hover:text-emerald-600">
            Listings
          </Link>
          <Link to="/add-property" className="font-bold text-gray-800 transition-colors hover:text-emerald-600">
            Sell
          </Link>
          <Link to="/about" className="font-bold text-gray-800 transition-colors hover:text-emerald-600">
            About
          </Link>
          <Link to="/contact" className="font-bold text-gray-800 transition-colors hover:text-emerald-600">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="px-4 py-2 shadow-md bg-white/80 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col py-3 space-y-3">
            <Link to="/" className="px-2 py-1 text-gray-800 transition-colors hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/listings" className="px-2 py-1 text-gray-800 transition-colors hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>
              Listings
            </Link>
            <Link to="/add-property" className="px-2 py-1 text-gray-800 transition-colors hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>
              Sell
            </Link>
            <Link to="/about" className="px-2 py-1 text-gray-800 transition-colors hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="px-2 py-1 text-gray-800 transition-colors hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;