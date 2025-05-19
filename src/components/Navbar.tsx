import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="h-12">
              <img 
                src="https://i.postimg.cc/3WyJtjn5/logo.png" 
                alt="Loudoun Window Clean" 
                className="h-full w-auto"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#residential" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Residential</a>
            <a href="#commercial" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Commercial</a>
            <a href="#why-choose-us" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Why Choose Us</a>
            <a href="#testimonials" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Testimonials</a>
            <a href="#contact" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full font-medium transition-colors hover:bg-blue-700">
              <Phone size={16} className="mr-2" />
              571-752-8200
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 py-4 bg-white rounded-lg shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#residential" className="font-medium text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Residential</a>
              <a href="#commercial" className="font-medium text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Commercial</a>
              <a href="#why-choose-us" className="font-medium text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Why Choose Us</a>
              <a href="#testimonials" className="font-medium text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Testimonials</a>
              <a href="#contact" className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700">
                <Phone size={16} className="mr-2" />
                571-752-8200
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;