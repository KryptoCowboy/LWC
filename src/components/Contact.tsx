import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactCard = ({ icon, title, content, link, linkText }: { icon: React.ReactNode, title: string, content: string, link?: string, linkText?: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
    <div className="flex items-center mb-4">
      <div className="mr-4 bg-blue-100 p-3 rounded-full text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{content}</p>
    {link && (
      <a 
        href={link} 
        className="text-blue-600 font-medium hover:underline flex items-center"
      >
        {linkText || "Learn More"}
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    )}
  </div>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready for Crystal-Clear Windows?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contact us today for a free estimate and experience the difference
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Estimate</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    id="name" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    id="email" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    id="phone" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="571-752-8200"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Type</label>
                  <select 
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a Service</option>
                    <option value="residential">Residential Window Cleaning</option>
                    <option value="commercial">Commercial Window Cleaning</option>
                    <option value="recurring">Recurring Maintenance</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-blue-600 text-white font-bold px-6 py-3 rounded-lg w-full transition-all ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </button>

              {submitStatus === 'success' && (
                <p className="mt-4 text-green-600 text-center">Thank you! We'll get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-600 text-center">Something went wrong. Please try again later.</p>
              )}
            </form>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <ContactCard 
              icon={<Phone size={24} />}
              title="Call Us"
              content="We're available Monday-Friday 5pm-7pm, Saturday 7am-7pm (June-August: Monday-Friday 8am-6pm)"
              link="tel:5717528200"
              linkText="571-752-8200"
            />
            
            <ContactCard 
              icon={<Mail size={24} />}
              title="Email Us"
              content="Send us an email and we'll respond within 24 hours"
              link="mailto:LoudounWindowClean@gmail.com"
              linkText="LoudounWindowClean@gmail.com"
            />
            
            <ContactCard 
              icon={<Clock size={24} />}
              title="Business Hours"
              content="Monday-Friday: 5pm-7pm | Saturday: 7am-7pm | June-August: Monday-Friday 8am-6pm"
            />
            
            <ContactCard 
              icon={<MapPin size={24} />}
              title="Service Area"
              content="Proudly serving all of Loudoun County, including Ashburn, Leesburg, Sterling, and surrounding areas"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;