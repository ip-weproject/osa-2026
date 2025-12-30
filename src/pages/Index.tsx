
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import RevOps from '@/components/RevOps';
import AboutUs from '@/components/AboutUs';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Clients from '@/components/Clients';
import useScrollAnimation from '@/utils/useScrollAnimation';

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();

  // Set page title
  useEffect(() => {
    document.title = "OSA | Consulting Services";
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <FAQ />
      <AboutUs />
      <Clients/>
      <Features />
      <Pricing />
      <RevOps />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
