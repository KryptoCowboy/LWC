import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResidentialServices from './components/ResidentialServices';
import CommercialServices from './components/CommercialServices';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Update document title
  React.useEffect(() => {
    document.title = 'Loudoun Window Clean - Streak-Free Shine';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ResidentialServices />
      <CommercialServices />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;