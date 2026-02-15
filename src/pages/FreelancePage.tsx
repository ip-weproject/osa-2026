import { useEffect } from 'react';
// import Navbar from '@/components/Navbar';
import Freelance from '@/components/Freelance';
// import CTA from '@/components/CTA';
// import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Clients from '@/components/Clients'; // 1. Importamos el carrusel de clientes
import logoLight from '../assets/logo.svg';
import logoDark from '../assets/logo-dark.svg';
import LanguageSwitch from '@/components/LanguageSwitch';
import ModeToggle from '@/components/ModeToggle';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';

const FreelancePage = () => {
  useEffect(() => {
    document.title = "OSA | Contractor Services";
    window.scrollTo(0, 0); // Asegura que la página se muestre desde el principio
  }, []);

  const { theme } = useTheme();

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Cabecera simple para logo y controles */}
      <header className="absolute top-0 left-0 w-full z-50 p-4 sm:p-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" aria-label="Volver a la página principal">
            <img 
              src={theme === 'dark' ? logoLight : logoDark} 
              alt="OSA-logo" 
              className="w-12 h-12 transition-all duration-300 hover:opacity-80"
            />
          </a>
          {/* Controles */}
          <div className="flex items-center gap-4">
            <LanguageSwitch />
            <ModeToggle />
          </div>
        </div>
      </header>

      <Freelance />
      <Clients /> 
      {/* <CTA /> */}
      {/* <Footer /> */}
      <ScrollToTop />
    </div>
  );
};

export default FreelancePage;