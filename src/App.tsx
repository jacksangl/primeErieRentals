import React from 'react';
import { Building2, MapPin, Phone, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard';
import WaitlistForm from './components/WaitlistForm';

function App() {
  const properties = [
    {
      id: 1,
      image: 'pictures/single_family_lecom/front.png',
      title: 'Single Family House - near LECOM',
      location: 'Millcreek, PA',
      price: 'Price Upon Request',
      beds: 3,
      baths: 1,
      sqft: 1100,
      available: false,
    },
    {
      id: 2,
      image: 'pictures/single_family/front.jpg',
      title: 'Single Family House - near LECOM, Presque Isle',
      location: 'Millcreek, PA',
      price: 'Price Upon Request',
      beds: 3,
      baths: 1,
      sqft: 1200,
      available: false,
    },
    {
      id: 3,
      image: 'pictures/single_west/front.png',
      title: 'Single Family House- West Side of Erie',
      location: 'West Erie, PA',
      price: 'Price Upon Request',
      beds: 3,
      baths: 1.5,
      sqft: 1200,
      available: false,
    },
    {
      id: 4,
      image: 'pictures/4unit/front.jpg',
      title: 'Milcreek Townhome Complex - 4 Units',
      location: 'West Millcreek, PA',
      price: 'Price Upon Request',
      beds: 2,
      baths: 1.5,
      sqft: 1000,
      available: false,
    },
    {
      id: 5,
      image: 'pictures/swan/front.png',
      title: 'Swanville Apartments - 14 Units',
      location: 'West Millcreek, PA',
      price: 'Price Upon Request',
      beds: 1,
      baths: 1,
      sqft: 720,
      available: false,
    },
    {
      id: 6,
      image: 'pictures/canter/front.jpg',
      title: 'Canterbury Apartments - 12 Units',
      location: 'West Millcreek, PA',
      price: 'Price Upon Request',
      beds: 1,
      baths: 1,
      sqft: 720,
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/pictures/logoupscale.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find Your Perfect Home in Erie
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Prime Rentals in Prime Locations
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#properties"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Building2 className="w-5 h-5" />
                <span>View Properties</span>
              </a>
              <a
                href="#waitlist"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Join Waitlist</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600">Discover our selection of rental properties</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Waitlist</h2>
            <p className="text-gray-600">
              Be the first to know when new properties become available
            </p>
          </div>
          <WaitlistForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">Get in touch with our team</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">(814) 529-1029</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">john@primeerierentals.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Prime Erie</h3>
            <p className="text-gray-400 mb-6">Affordable Prime Erie Living</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © Copyright PrimeErieRentals LLC
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;