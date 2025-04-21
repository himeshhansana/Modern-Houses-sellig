import React, { useState } from 'react';
import { SearchIcon, SlidersIcon } from 'lucide-react';
interface SearchFiltersProps {
  onFilterChange: (filters: any) => void;
}
const SearchFilters = ({
  onFilterChange
}: SearchFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState({
    keyword: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    propertyType: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    const updatedFilters = {
      ...filters,
      [name]: value
    };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };
  return <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-grow">
            <SearchIcon className="absolute text-gray-400 left-3 top-3" size={20} />
            <input type="text" name="keyword" placeholder="Search by location, property name..." className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" value={filters.keyword} onChange={handleChange} />
          </div>
          <button type="button" className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 md:w-auto" onClick={() => setIsExpanded(!isExpanded)}>
            <SlidersIcon size={18} />
            <span>Filters</span>
          </button>
          <button type="submit" className="px-6 py-2 text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700">
            Search
          </button>
        </div>
        {isExpanded && <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="w-full md:w-1/2">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Min Price
                </label>
                <input type="number" name="minPrice" placeholder="Min" className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" value={filters.minPrice} onChange={handleChange} />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Max Price
                </label>
                <input type="number" name="maxPrice" placeholder="Max" className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" value={filters.maxPrice} onChange={handleChange} />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Bedrooms
              </label>
              <select name="bedrooms" className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" value={filters.bedrooms} onChange={handleChange}>
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Bathrooms
              </label>
              <select name="bathrooms" className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" value={filters.bathrooms} onChange={handleChange}>
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Property Type
              </label>
              <select name="propertyType" className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" value={filters.propertyType} onChange={handleChange}>
                <option value="">Any</option>
                <option value="Villa">Villa</option>
                <option value="Estate">Estate</option>
                <option value="Penthouse">Penthouse</option>
              </select>
            </div>
          </div>}
      </form>
    </div>;
};
export default SearchFilters;