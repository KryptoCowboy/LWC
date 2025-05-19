import React from 'react';
import { Users, Leaf, Star } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We bring professionalism, quality, and reliability to every job
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Users size={32} />}
            title="Local, Family-Owned"
            description="We're proud members of the Loudoun County community, serving our neighbors with personalized care."
          />
          
          <FeatureCard 
            icon={<Leaf size={32} />}
            title="Eco-Friendly Solutions"
            description="Our cleaning solutions are tough on dirt but gentle on the environment and safe for your family."
          />
          
          <FeatureCard 
            icon={<Star size={32} />}
            title="5-Star Rated"
            description="With hundreds of positive reviews, we're one of Loudoun's highest-rated window cleaning services."
          />
        </div>
        
        <div className="mt-16 bg-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Our Promise to You</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We guarantee your satisfaction with every service. If you're not completely happy with our work, we'll come back and make it right at no additional cost.
          </p>
          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full inline-flex items-center justify-center transition-all hover:bg-blue-50"
            >
              Schedule Your Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;