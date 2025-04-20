import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, MailIcon, PhoneIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <HomeIcon className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-bold">Modern Villas</span>
            </div>
            <p className="text-gray-400 mb-4">
              Discover luxury living in modern villas designed for comfort and
              elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/listings" className="text-gray-400 hover:text-white transition-colors">
                  Listings
                </Link>
              </li>
              <li>
                <Link to="/add-property" className="text-gray-400 hover:text-white transition-colors">
                  Sell Your Property
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Properties</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/listings?type=villa" className="text-gray-400 hover:text-white transition-colors">
                  Modern Villas
                </Link>
              </li>
              <li>
                <Link to="/listings?type=estate" className="text-gray-400 hover:text-white transition-colors">
                  Luxury Estates
                </Link>
              </li>
              <li>
                <Link to="/listings?type=woodland" className="text-gray-400 hover:text-white transition-colors">
                  Woodland Retreats
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <MailIcon size={16} />
                <span>info@modernvillas.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <PhoneIcon size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Modern Villas. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;