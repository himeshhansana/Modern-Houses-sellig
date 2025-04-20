import React, { useEffect, useState } from 'react';
import { properties } from '../utils/mockData.ts';
import PropertyCard from '../components/PropertyCard';
import SearchFilters from '../components/SearchFilters';
import { GridIcon, ListIcon } from 'lucide-react';

type FilterOptions = {
  keyword: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  bathrooms: string;
  propertyType: string;
};

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest';

const ListingsPage: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState<SortOption>('featured');
  const [filters, setFilters] = useState<FilterOptions>({
    keyword: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    propertyType: '',
  });

  useEffect(() => {
    let results = [...properties];

    // Keyword filter
    if (filters.keyword) {
      const keyword = filters.keyword.toLowerCase();
      results = results.filter(
        (property) =>
          property.title.toLowerCase().includes(keyword) ||
          property.location.toLowerCase().includes(keyword)
      );
    }

    // Price filters
    if (filters.minPrice) {
      results = results.filter(
        (property) => property.price >= parseInt(filters.minPrice)
      );
    }

    if (filters.maxPrice) {
      results = results.filter(
        (property) => property.price <= parseInt(filters.maxPrice)
      );
    }

    // Bedrooms and Bathrooms
    if (filters.bedrooms) {
      results = results.filter(
        (property) => property.bedrooms >= parseInt(filters.bedrooms)
      );
    }

    if (filters.bathrooms) {
      results = results.filter(
        (property) => property.bathrooms >= parseInt(filters.bathrooms)
      );
    }

    // Property type
    if (filters.propertyType) {
      results = results.filter(
        (property) => property.type === filters.propertyType
      );
    }

    // Sorting
    switch (sortOption) {
      case 'featured':
        results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'price-asc':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Assuming date added is available as property.dateAdded (if implemented)
        // results.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
      default:
        break;
    }

    setFilteredProperties(results);
  }, [filters, sortOption]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as SortOption);
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Luxury Villa Listings</h1>
        <p className="text-gray-600">
          Discover our collection of modern luxury villas and estates
        </p>
      </div>

      <SearchFilters onFilterChange={handleFilterChange} />

      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          {filteredProperties.length} properties found
        </p>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-gray-200' : 'bg-white'
                }`}
            >
              <GridIcon size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-gray-200' : 'bg-white'
                }`}
            >
              <ListIcon size={20} />
            </button>
          </div>

          <select
            value={sortOption}
            onChange={handleSortChange}
            className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {filteredProperties.length === 0 ? (
        <div className="py-16 text-center">
          <h2 className="mb-2 text-2xl font-bold">No properties found</h2>
          <p className="text-gray-600">Try adjusting your search filters</p>
        </div>
      ) : (
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'flex flex-col space-y-6'
          }
        >
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              title={property.title}
              location={property.location}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              area={property.area}
              images={property.images}
              featured={property.featured}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListingsPage;
