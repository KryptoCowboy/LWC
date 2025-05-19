import React from 'react';
import { Calendar, RotateCcw, Zap } from 'lucide-react';

interface PricingPlanProps {
  title: string;
  icon: React.ReactNode;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan = ({ title, icon, price, description, features, isPopular = false }: PricingPlanProps) => (
  <div className={`relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${isPopular ? 'border-2 border-blue-500 transform -translate-y-2' : ''}`}>
    {isPopular && (
      <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-4 text-sm font-bold">
        MOST POPULAR
      </div>
    )}
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="mr-3 bg-blue-100 p-2 rounded-full text-blue-600">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="#contact"
        className={`block text-center py-3 px-4 rounded-lg font-medium transition-colors ${
          isPopular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
        }`}
      >
        Select Plan
      </a>
    </div>
  </div>
);

const ServiceOptions = () => {
  return (
    <section id="service-options" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Options</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your needs and budget
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingPlan 
            title="One-Time Cleaning" 
            icon={<Calendar size={24} />}
            price="From $199"
            description="Perfect for a seasonal deep clean or before special occasions"
            features={[
              "Interior & exterior window cleaning",
              "Screen cleaning included",
              "Sill and track cleaning",
              "100% satisfaction guarantee",
              "Free estimate before service"
            ]}
          />
          
          <PricingPlan 
            title="Recurring Plan" 
            icon={<RotateCcw size={24} />}
            price="From $179"
            description="Save with regular cleaning on a schedule that works for you"
            features={[
              "Quarterly or bi-annual service",
              "10% discount on recurring visits",
              "Priority scheduling",
              "Same team each visit",
              "Seasonal inspection report"
            ]}
            isPopular={true}
          />
          
          <PricingPlan 
            title="Premium Package" 
            icon={<Zap size={24} />}
            price="From $249"
            description="Our most comprehensive cleaning service with extra benefits"
            features={[
              "All standard cleaning services",
              "Hard water treatment included",
              "Gutter cleaning add-on available",
              "Extended warranty",
              "24-hour rain guarantee"
            ]}
          />
        </div>
        
        <div className="mt-12 bg-gray-100 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-6">Optional Add-On Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg mb-2">Pressure Washing</h4>
              <p className="text-gray-600">Clean your decks, patios, and siding alongside your windows.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg mb-2">Gutter Cleaning</h4>
              <p className="text-gray-600">Remove debris and ensure proper water flow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOptions;