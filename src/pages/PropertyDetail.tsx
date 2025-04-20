import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../utils/mockData';
import { BedIcon, BathIcon, SquareIcon, MapPinIcon, HeartIcon, ShareIcon, PhoneIcon, MailIcon, CheckIcon } from 'lucide-react';
const PropertyDetailPage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const property = properties.find(p => p.id === parseInt(id || '0'));
  if (!property) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
        <p className="text-gray-600 mb-8">
          The property you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/listings" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
          Back to Listings
        </Link>
      </div>;
  }
  return <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/listings" className="text-emerald-600 hover:text-emerald-700 mb-4 inline-block">
          &larr; Back to Listings
        </Link>
        <div className="flex flex-wrap justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPinIcon size={18} className="mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-emerald-600">
            ${property.price.toLocaleString()}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="mb-8">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img src={property.images[activeImageIndex]} alt={property.title} className="w-full h-[500px] object-cover rounded-lg" />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {property.images.map((image, index) => <div key={index} className={`cursor-pointer flex-shrink-0 ${activeImageIndex === index ? 'ring-2 ring-emerald-500' : ''}`} onClick={() => setActiveImageIndex(index)}>
                  <img src={image} alt={`View ${index + 1}`} className="h-20 w-32 object-cover rounded" />
                </div>)}
            </div>
          </div>
          {/* Property Details */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Property Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <BedIcon className="mx-auto mb-2 text-emerald-600" />
                <div className="font-bold text-lg">{property.bedrooms}</div>
                <div className="text-gray-600 text-sm">Bedrooms</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <BathIcon className="mx-auto mb-2 text-emerald-600" />
                <div className="font-bold text-lg">{property.bathrooms}</div>
                <div className="text-gray-600 text-sm">Bathrooms</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <SquareIcon className="mx-auto mb-2 text-emerald-600" />
                <div className="font-bold text-lg">{property.area}</div>
                <div className="text-gray-600 text-sm">Square Feet</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="font-bold text-lg">{property.type}</div>
                <div className="text-gray-600 text-sm">Property Type</div>
              </div>
            </div>
            <p className="text-gray-700 mb-6">{property.description}</p>
            <h3 className="text-xl font-bold mb-3">Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {property.amenities.map((amenity, index) => <div key={index} className="flex items-center">
                  <CheckIcon size={18} className="text-emerald-600 mr-2" />
                  <span>{amenity}</span>
                </div>)}
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4">
              Interested in this property?
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Your Name
                </label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Enter your phone number" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="I'm interested in this property..." />
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between mb-4">
                <button className="flex items-center text-gray-700 hover:text-emerald-600">
                  <HeartIcon size={18} className="mr-2" />
                  <span>Save</span>
                </button>
                <button className="flex items-center text-gray-700 hover:text-emerald-600">
                  <ShareIcon size={18} className="mr-2" />
                  <span>Share</span>
                </button>
              </div>
              <div className="flex flex-col space-y-2">
                <a href="tel:+15551234567" className="flex items-center text-gray-700 hover:text-emerald-600">
                  <PhoneIcon size={18} className="mr-2" />
                  <span>+1 (555) 123-4567</span>
                </a>
                <a href="mailto:info@modernvillas.com" className="flex items-center text-gray-700 hover:text-emerald-600">
                  <MailIcon size={18} className="mr-2" />
                  <span>info@modernvillas.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default PropertyDetailPage;