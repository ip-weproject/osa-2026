
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import RevOps from '@/components/RevOps';
import AboutUs from '@/components/AboutUs';
import Solutions from '@/components/Solutions';
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
      {/* <Clients/> */}
      <FAQ />
      <AboutUs />
      <Services />
      {/* <Solutions /> */}
      <RevOps />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
