import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Loudoun Window Clean</h3>
            <p className="mb-4 text-blue-200">
              Professional window cleaning services in Loudoun County, VA. Residential and commercial services with satisfaction guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#residential" className="hover:text-white transition-colors">Residential Window Cleaning</a></li>
              <li><a href="#commercial" className="hover:text-white transition-colors">Commercial Window Cleaning</a></li>
              <li><a href="#service-options" className="hover:text-white transition-colors">Service Plans</a></li>
              <li><a href="#service-options" className="hover:text-white transition-colors">Add-On Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4 text-blue-200">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-300" />
                <a href="tel:5717528200" className="hover:text-white transition-colors">571-752-8200</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-300" />
                <a href="mailto:LoudounWindowClean@gmail.com" className="hover:text-white transition-colors">LoudounWindowClean@gmail.com</a>
              </li>
              <li className="text-sm mt-2">
                Hours: Monday-Friday 5pm-7pm<br />
                Saturday 7am-7pm<br />
                June-August: Monday-Friday 8am-6pm
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="#contact" 
                className="bg-white text-blue-600 hover:bg-blue-100 font-bold px-6 py-2 rounded-full inline-flex items-center justify-center transition-all"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-blue-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Loudoun Window Clean. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-blue-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;