import React from 'react';
import { Link } from 'react-router-dom';
import { BedIcon, BathIcon, SquareIcon, MapPinIcon } from 'lucide-react';
interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  featured?: boolean;
}
const PropertyCard = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  images,
  featured
}: PropertyCardProps) => {
  return <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${featured ? 'border-2 border-emerald-500' : ''}`}>
      <Link to={`/property/${id}`}>
        <div className="relative h-64">
          <img src={images[0]} alt={title} className="w-full h-full object-cover" />
          {featured && <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>}
        </div>
      </Link>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-1">
            <Link to={`/property/${id}`} className="hover:text-emerald-600">
              {title}
            </Link>
          </h3>
          <p className="text-emerald-600 font-bold">
            ${price.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center text-gray-500 mb-4">
          <MapPinIcon size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex justify-between border-t pt-4">
          <div className="flex items-center text-gray-700">
            <BedIcon size={18} className="mr-1" />
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center text-gray-700">
            <BathIcon size={18} className="mr-1" />
            <span>{bathrooms} Baths</span>
          </div>
          <div className="flex items-center text-gray-700">
            <SquareIcon size={18} className="mr-1" />
            <span>{area} ft²</span>
          </div>
        </div>
      </div>
    </div>;
};
export default PropertyCard;