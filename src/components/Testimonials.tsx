import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Ashburn, VA",
    rating: 5,
    text: "Absolutely amazing service! The team was professional, thorough, and left my windows spotless. I can finally enjoy my view again without water spots or streaks.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Michael Davis",
    location: "Leesburg, VA",
    rating: 5,
    text: "I've tried several window cleaning services in Loudoun County, and Loudoun Window Clean is by far the best. Their attention to detail is impressive, and their prices are reasonable.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Jennifer Wilson",
    location: "Sterling, VA",
    rating: 5,
    text: "The team removed years of hard water stains from our shower doors and windows that I thought were permanent. They look brand new again! Worth every penny.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Robert Thompson",
    location: "Hamilton, VA",
    rating: 4,
    text: "Very reliable and consistent service. We've been using them quarterly for our business storefront, and they always do a wonderful job. Highly recommend!",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 italic mb-6">"{testimonials[activeIndex].text}"</p>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[activeIndex].location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between p-4 bg-gray-50">
              <button 
                onClick={prevTestimonial} 
                className="p-2 rounded-full bg-white shadow-sm hover:bg-blue-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-blue-600" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial} 
                className="p-2 rounded-full bg-white shadow-sm hover:bg-blue-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-blue-600" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200 relative">
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                <p className="font-bold text-xl">Before</p>
              </div>
              <img 
                src="https://i.postimg.cc/SnzSmcnF/div-element.jpg" 
                alt="Dirty window before cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200 relative">
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                <p className="font-bold text-xl">After</p>
              </div>
              <img 
                src="https://i.postimg.cc/nX7X0yYD/div-element.jpg" 
                alt="Clean window after service" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;