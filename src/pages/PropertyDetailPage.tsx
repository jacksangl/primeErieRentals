import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import WaitlistForm from '../components/WaitlistForm';
import { Phone, Mail, Home, Building2, PhoneCall } from 'lucide-react';
import { propertyPhotos } from '../data/propertyPhotos';
import Navbar from '../components/Navbar';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const propertyId = parseInt(id || '0', 10);
  const propertyData = propertyPhotos[propertyId];

  const [selectedPhoto, setSelectedPhoto] = React.useState<{ id: number; image: string; description: string } | null>(null);

  // Scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!propertyData) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Content - Added pt-16 to account for fixed navbar */}
      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        <h1 className="text-3xl font-bold mb-8">{propertyData.title}</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyData.photos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative">
                <img
                  src={photo.image}
                  alt={photo.description}
                  className="w-full h-72 object-cover cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                />
              </div>
              <div className="p-6">
                <p className="text-lg font-semibold text-gray-900">{photo.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Modal for enlarged image view */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-full max-h-[90vh]">
            <img
              src={`/${selectedPhoto.image}`}
              alt={selectedPhoto.description}
              className="max-w-full max-h-[80vh] mx-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
              <p className="text-gray-900 text-center text-lg font-bold">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}

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
};

export default PropertyDetailPage;