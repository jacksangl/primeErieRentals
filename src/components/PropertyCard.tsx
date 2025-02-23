import React from 'react';
import { MapPin, Bed, Bath, Square, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  available: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  available,
}) => {
  return (
    <Link to={`/property/${id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-64 object-cover" />
          {!available && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Rented
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center text-gray-600">
              <Tag className="w-5 h-5 mr-1" />
              <span className="text-lg font-semibold text-blue-600">{price}</span>
            </div>
            {available && (
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Tour
              </button>
            )}
          </div>
          <div className="flex justify-between text-gray-600 border-t pt-4">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{beds} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{baths} Baths</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              <span>{sqft} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;