import React from 'react';
import { Home, Droplet, Shield, Building, Sun } from 'lucide-react';

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
    <div className="flex items-center mb-4">
      <div className="mr-4 bg-blue-100 p-3 rounded-full text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ResidentialServices = () => {
  return (
    <section id="residential" className="py-16 relative">
      <div 
        className="absolute inset-0 bg-black opacity-40"
        style={{
          backgroundImage: "url('https://postimg.cc/dhMT3C0Q')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          mixBlendMode: 'multiply'
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <Home className="mr-3 text-blue-300" /> 
            Residential Window Cleaning
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We Make Your Windows Invisible Again!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            icon={<Droplet size={24} />}
            title="Interior & Exterior Cleaning"
            description="Comprehensive cleaning of all window surfaces, inside and out, leaving them spotless and streak-free."
          />
          
          <ServiceCard 
            icon={<Shield size={24} />}
            title="Hard Water Stain Removal"
            description="Specialized treatment to remove stubborn mineral deposits and hard water stains that regular cleaning can't address."
          />
          
          <ServiceCard 
            icon={<Building size={24} />}
            title="Screen, Track & Sill Cleaning"
            description="Thorough cleaning of all window components including screens, tracks, and sills for a complete cleaning experience."
          />
          
          <ServiceCard 
            icon={<Sun size={24} />}
            title="Skylight & Specialty Windows"
            description="Expert cleaning of hard-to-reach skylights and specialty-shaped windows with proper safety equipment."
          />
          
          <ServiceCard 
            icon={<Shield size={24} />}
            title="Post-Construction Cleanup"
            description="Removal of construction debris, adhesives, and paint from new or renovated windows."
          />
          
          <div className="bg-blue-600 p-6 rounded-xl text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Ready for Sparkling Windows?</h3>
            <p className="mb-6">Schedule your free estimate today and experience the Crystal Clear difference!</p>
            <a 
              href="#contact" 
              className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full inline-flex items-center justify-center transition-all hover:bg-blue-50"
            >
              Get Your Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialServices;