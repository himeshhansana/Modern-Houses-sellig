import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, HomeIcon, SearchIcon, PlusCircleIcon, UserIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <HomeIcon className="w-6 h-6 text-emerald-600" />
          <span className="text-xl font-bold">Modern Villas</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="items-center hidden space-x-8 md:flex">
          <Link to="/" className="text-gray-800 transition-colors hover:text-emerald-600">
            Home
          </Link>
          <Link to="/listings" className="text-gray-800 transition-colors hover:text-emerald-600">
            Listings
          </Link>
          <Link to="/add-property" className="text-gray-800 transition-colors hover:text-emerald-600">
            Sell
          </Link>
          <Link to="/about" className="text-gray-800 transition-colors hover:text-emerald-600">
            About
          </Link>
          <Link to="/contact" className="text-gray-800 transition-colors hover:text-emerald-600">
            Contact
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="px-4 py-2 bg-white shadow-md md:hidden">
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
            <Link to="/" className="px-2 py-1 text-gray-800 transition-colors hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/" className="px-2 py-1 text-gray-800 transition-colors hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>}
    </header>;
};
export default Header;