import React from 'react';
import { Building2, Store, UtensilsCrossed, Repeat, BarChart } from 'lucide-react';

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

const CommercialServices = () => {
  return (
    <section id="commercial" className="py-16 relative">
      <div 
        className="absolute inset-0 bg-black opacity-40"
        style={{
          backgroundImage: "url('https://i.postimg.cc/8Fh3TmMY/div-element.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          mixBlendMode: 'multiply'
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <Building2 className="mr-3 text-blue-300" /> 
            Commercial Window Cleaning
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Boost Curb Appeal for Your Business!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            icon={<Store size={24} />}
            title="Storefronts & Office Buildings"
            description="Professional cleaning of street-level storefronts and office building windows to make a great first impression."
          />
          
          <ServiceCard 
            icon={<Building2 size={24} />}
            title="Low/Mid-Rise Buildings"
            description="Specialized equipment and trained professionals to safely clean windows on multi-story buildings."
          />
          
          <ServiceCard 
            icon={<UtensilsCrossed size={24} />}
            title="Restaurant & Café Windows"
            description="Regular cleaning services to keep food service establishments looking spotless and inviting."
          />
          
          <ServiceCard 
            icon={<Repeat size={24} />}
            title="Custom Maintenance Plans"
            description="Tailored weekly or monthly maintenance plans to keep your commercial property looking its best year-round."
          />
          
          <ServiceCard 
            icon={<BarChart size={24} />}
            title="Budget-Friendly Options"
            description="Competitive rates and flexible scheduling to meet your business needs and budget constraints."
          />
          
          <div className="bg-blue-600 p-6 rounded-xl text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Enhance Your Business Image</h3>
            <p className="mb-6">Clean windows make a significant difference in how customers perceive your business.</p>
            <a 
              href="#contact" 
              className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full inline-flex items-center justify-center transition-all hover:bg-blue-50"
            >
              Request Business Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialServices;