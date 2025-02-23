import React, { useState } from 'react';
import { Menu, X, Home, Building2, PhoneCall } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Handle clicks for the logo and Home button.
  // On the homepage, scroll to the top.
  // If inside a project (i.e. not on "/"), navigate to the homepage anchored to the properties section.
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    } else {
      window.location.href = '/#properties';
    }
  };

  // Handle clicks for the other menu items which scroll or navigate based on the current location.
  const handleNavClick = (section: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${section}`;
      return;
    }
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // We remove the Home menu item from the list because we handle it separately.
  const menuItems = [
    { name: 'Properties', icon: <Building2 className="w-5 h-5" />, section: 'properties' },
    { name: 'Contact', icon: <PhoneCall className="w-5 h-5" />, section: 'contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="flex items-center text-blue-900 hover:text-blue-700 transition-colors text-2xl font-bold"
            >
              <img 
                src="/pictures/logoupscale.jpg" 
                alt="Logo" 
                className="w-24 h-12 mr-2 rounded-lg object-cover"
              />
              Prime Erie Rentals
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleHomeClick}
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.section)}
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={handleHomeClick}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-md w-full text-left"
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </button>
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.section)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-md w-full text-left"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;