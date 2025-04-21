import { Link } from 'react-router-dom';
import { ArrowRightIcon, SearchIcon, HomeIcon, KeyIcon, CheckCircleIcon } from 'lucide-react';
import { properties, Property } from '../utils/mockData';
import PropertyCard from '../components/PropertyCard';
import { motion } from 'framer-motion';

const HomePage = () => {
  const featuredProperties = properties.filter((property: Property) => property.featured).slice(0, 3);
  return <div className="w-full bg-white">
    {/* Hero Section */}
    <section className="relative h-[600px] bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="/image.png"
          alt="Modern Villa"
          className="object-cover w-full h-full opacity-60" />
      </div>

      <div className="container relative flex flex-col justify-center h-full px-4 mx-auto">
        <motion.h1
          className="max-w-2xl mb-4 text-4xl font-bold md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Modern Villas in the world.
        </motion.h1>

        <motion.p
          className="max-w-xl mb-8 text-lg text-gray-200 md:text-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}>
          Discover the perfect harmony of luxury and nature with our exclusive
          collection of modern woodland villas.
        </motion.p>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}>
          <Link
            to="/listings"
            className="inline-flex items-center justify-center px-8 py-3 font-medium text-white transition-colors rounded-full bg-emerald-600 hover:bg-emerald-700">
            Browse Properties
          </Link>
          <Link
            to="/add-property"
            className="inline-flex items-center justify-center px-8 py-3 font-medium text-gray-900 transition-colors bg-white rounded-full hover:bg-gray-100">
            Sell Your Property
          </Link>
        </motion.div>
      </div>
    </section>

    {/*  Search Section */}
    <section className="container relative z-10 px-4 py-8 mx-auto -mt-24">
      <div className="p-6 rounded-lg shadow-xl bg-white/70 backdrop-blur-md">
        <h2 className="mb-4 text-xl font-bold">Find Your Dream Property</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="relative">
            <SearchIcon className="absolute text-gray-400 left-3 top-3" size={20} />
            <input
              type="text"
              placeholder="Location"
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>
          <div>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
              <option value="">Property Type</option>
              <option value="villa">Villa</option>
              <option value="estate">Estate</option>
              <option value="penthouse">Penthouse</option>
            </select>
          </div>
          <div>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
              <option value="">Price Range</option>
              <option value="1000000-2000000">$1M - $2M</option>
              <option value="2000000-3000000">$2M - $3M</option>
              <option value="3000000-5000000">$3M - $5M</option>
              <option value="5000000+">$5M+</option>
            </select>
          </div>
          <div>
            <Link
              to="/listings"
              className="inline-flex items-center justify-center w-full px-4 py-2 text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700">
              Search
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Properties */}
    <section className="container px-4 py-16 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Featured Properties</h2>
        <Link to="/listings" className="flex items-center text-emerald-600 hover:text-emerald-700">
          View All <ArrowRightIcon size={16} className="ml-2" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProperties.map((property: Property) => <PropertyCard
          key={property.id}
          id={property.id}
          title={property.title}
          location={property.location}
          price={property.price}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          area={property.area}
          images={property.images}
          featured={property.featured} />)}
      </div>
    </section>
    {/* Why Choose Us */}
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Why Choose Modern Villas
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We provide an exceptional experience in luxury real estate, with a
            focus on modern design and premium locations.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-emerald-100 text-emerald-600">
              <HomeIcon size={28} />
            </div>
            <h3 className="mb-2 text-xl font-bold">Exclusive Properties</h3>
            <p className="text-gray-600">
              Access to the most exclusive luxury villas and estates, many of
              which are not available elsewhere.
            </p>
          </div>
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-emerald-100 text-emerald-600">
              <KeyIcon size={28} />
            </div>
            <h3 className="mb-2 text-xl font-bold">Seamless Experience</h3>
            <p className="text-gray-600">
              From browsing to closing, our team ensures a smooth and
              transparent buying or selling process.
            </p>
          </div>
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircleIcon size={28} />
            </div>
            <h3 className="mb-2 text-xl font-bold">Expert Guidance</h3>
            <p className="text-gray-600">
              Our team of luxury real estate experts provides personalized
              service and insider knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* CTA Section */}
    <section className="py-16 text-white bg-emerald-700">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Ready to Find Your Dream Home?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Browse our exclusive collection of luxury properties or list your
          own villa with us.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/listings" className="inline-flex items-center justify-center px-8 py-3 font-medium transition-colors bg-white rounded-full text-emerald-700 hover:bg-gray-100">
            Browse Properties
          </Link>
          <Link to="/add-property" className="inline-flex items-center justify-center px-8 py-3 font-medium transition-colors bg-transparent border border-white rounded-full hover:bg-emerald-800">
            Sell Your Property
          </Link>
        </div>
      </div>
    </section>
  </div>;
};
export default HomePage;