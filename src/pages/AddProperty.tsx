import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UploadIcon, PlusIcon, CheckIcon, InfoIcon } from 'lucide-react';
const AddPropertyPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    location: '',
    type: '',
    amenities: [] as string[]
  });
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleAmenityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value,
      checked
    } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, value]
      });
    } else {
      setFormData({
        ...formData,
        amenities: formData.amenities.filter(amenity => amenity !== value)
      });
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newImages: File[] = [];
    const newPreviewUrls: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newImages.push(file);
      newPreviewUrls.push(URL.createObjectURL(file));
    }
    setImages([...images, ...newImages]);
    setPreviewUrls([...previewUrls, ...newPreviewUrls]);
  };
  const removeImage = (index: number) => {
    const newImages = [...images];
    const newPreviewUrls = [...previewUrls];
    newImages.splice(index, 1);
    URL.revokeObjectURL(previewUrls[index]);
    newPreviewUrls.splice(index, 1);
    setImages(newImages);
    setPreviewUrls(newPreviewUrls);
  };
  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    console.log('Form Data:', formData);
    console.log('Images:', images);
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };
  if (isSubmitted) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-6">
          <CheckIcon size={32} />
        </div>
        <h2 className="text-3xl font-bold mb-4">
          Property Submitted Successfully!
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Your property has been submitted for review. Our team will contact you
          shortly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
            Back to Home
          </Link>
          <Link to="/listings" className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors">
            View Listings
          </Link>
        </div>
      </div>;
  }
  const amenityOptions = ['Pool', 'Sauna', 'Home Theater', 'Smart Home System', 'Private Garden', 'Wine Cellar', 'Gym', 'Fireplace', 'Heated Floors', 'Outdoor Kitchen', 'Infinity Pool', 'Private Dock', 'Rooftop Terrace', 'Solar Power', 'Guest House'];
  return <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">List Your Property</h1>
        <p className="text-gray-600">
          Complete the form below to list your property on Modern Villas
        </p>
      </div>
      {/* Progress Steps */}
      <div className="flex justify-between mb-8 relative">
        <div className="absolute top-1/2 h-1 transform -translate-y-1/2 bg-gray-200 w-full"></div>
        <div className="relative flex justify-between w-full">
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${step >= 1 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              1
            </div>
            <div className="mt-2 text-sm font-medium">Basic Info</div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${step >= 2 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              2
            </div>
            <div className="mt-2 text-sm font-medium">Property Details</div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${step >= 3 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              3
            </div>
            <div className="mt-2 text-sm font-medium">Photos & Amenities</div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Information */}
          {step === 1 && <div>
              <h2 className="text-xl font-bold mb-6">Basic Information</h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Property Title*
                </label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="e.g. Modern Villa in the Woods" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description*
                </label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={6} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Describe your property in detail..." required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                  Price (USD)*
                </label>
                <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="e.g. 1500000" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                  Location*
                </label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="e.g. Aspen, Colorado" required />
              </div>
            </div>}
          {/* Step 2: Property Details */}
          {step === 2 && <div>
              <h2 className="text-xl font-bold mb-6">Property Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bedrooms">
                    Bedrooms*
                  </label>
                  <input type="number" id="bedrooms" name="bedrooms" value={formData.bedrooms} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="e.g. 4" required />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bathrooms">
                    Bathrooms*
                  </label>
                  <input type="number" id="bathrooms" name="bathrooms" value={formData.bathrooms} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="e.g. 3" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="area">
                    Area (sq ft)*
                  </label>
                  <input type="number" id="area" name="area" value={formData.area} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="e.g. 3000" required />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                    Property Type*
                  </label>
                  <select id="type" name="type" value={formData.type} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" required>
                    <option value="">Select Type</option>
                    <option value="Villa">Villa</option>
                    <option value="Estate">Estate</option>
                    <option value="Penthouse">Penthouse</option>
                  </select>
                </div>
              </div>
            </div>}
          {/* Step 3: Photos & Amenities */}
          {step === 3 && <div>
              <h2 className="text-xl font-bold mb-6">Photos & Amenities</h2>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Property Photos*
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input type="file" id="images" multiple accept="image/*" onChange={handleImageChange} className="hidden" />
                  <label htmlFor="images" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                      <UploadIcon className="h-12 w-12 text-gray-400 mb-3" />
                      <p className="text-gray-700 font-medium">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        SVG, PNG, JPG or GIF (max. 10MB)
                      </p>
                    </div>
                  </label>
                </div>
                {previewUrls.length > 0 && <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {previewUrls.map((url, index) => <div key={index} className="relative">
                        <img src={url} alt={`Preview ${index + 1}`} className="h-24 w-full object-cover rounded-lg" />
                        <button type="button" className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600" onClick={() => removeImage(index)}>
                          &times;
                        </button>
                      </div>)}
                  </div>}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Amenities
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {amenityOptions.map((amenity, index) => <div key={index} className="flex items-center">
                      <input type="checkbox" id={`amenity-${index}`} value={amenity} checked={formData.amenities.includes(amenity)} onChange={handleAmenityChange} className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded" />
                      <label htmlFor={`amenity-${index}`} className="ml-2 text-gray-700">
                        {amenity}
                      </label>
                    </div>)}
                </div>
              </div>
            </div>}
          <div className="flex justify-between mt-8">
            {step > 1 && <button type="button" onClick={prevStep} className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors">
                Back
              </button>}
            {step < 3 ? <button type="button" onClick={nextStep} className="ml-auto px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
                Continue
              </button> : <button type="submit" className="ml-auto px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
                Submit Property
              </button>}
          </div>
        </form>
      </div>
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start">
        <InfoIcon className="text-blue-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
        <div>
          <h3 className="font-bold text-blue-800">Need assistance?</h3>
          <p className="text-blue-700">
            Our team is here to help you list your property. Contact us at{' '}
            <a href="mailto:support@modernvillas.com" className="underline">
              support@modernvillas.com
            </a>{' '}
            or call{' '}
            <a href="tel:+15551234567" className="underline">
              +1 (555) 123-4567
            </a>
            .
          </p>
        </div>
      </div>
    </div>;
};
export default AddPropertyPage;