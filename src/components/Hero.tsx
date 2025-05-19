import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-800 to-blue-600 flex items-center">
      {/* Background overlay with opacity */}
      <div 
        className="absolute inset-0 bg-black opacity-40"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6195136/pexels-photo-6195136.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          mixBlendMode: 'multiply'
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fadeInUp">
            Sparkling Windows in Loudoun County – Streak-Free & Guaranteed!
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-100 mb-8 animate-fadeInUp animation-delay-200">
            Residential & Commercial Window Cleaning | Eco-Friendly | Insured & Local
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-400">
            <a 
              href="#contact" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-full inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Estimate
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a 
              href="#services" 
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 rounded-full inline-flex items-center justify-center transition-all duration-300"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,250.7C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;