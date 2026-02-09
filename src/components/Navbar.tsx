import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`
      /* === CLASES FIJAS (ESTRUCTURA) === */
      fixed z-50 transition-all duration-500 ease-in-out
      left-1/2 -translate-x-1/2
      rounded-full
      max-w-7xl
      
      /* Ancho y Posición CONSTANTES (no cambian con el scroll) */
      w-[90%] md:w-[80%] 
      top-2
      
      /* === CLASES DINÁMICAS (ESTILO) === */
      ${isScrolled 
        // CAMBIO: Bajé la opacidad a /60 para que el 'backdrop-blur-md' se note más.
        ? 'border border-white/20 bg-osa-black/20 backdrop-blur-md py-4 shadow-2xl' 
        : 'border border-transparent bg-transparent py-2 shadow-none' 
      }
    `}>
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center justify-start w-40">
          <a href="#">
            <img 
              src={logo} 
              alt="OSA-logo" 
              // El logo también se ajusta ligeramente para acompañar el cambio de altura del nav
              className={`rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all duration-300 ${isScrolled ? 'w-12' : 'w-12'}`} 
            />
          </a>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-base font-medium">Inicio</a></li>
          <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors text-base font-medium">Desafíos</a></li>
          <li><a href="#about" className="text-gray-300 hover:text-white transition-colors text-base font-medium">Nosotros</a></li>
          <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-base font-medium">Servicios</a></li>
          <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-base font-medium">Revops</a></li>
        </ul>

        {/* BOTÓN DE ESCRITORIO */}
        <div className="hidden lg:flex items-center justify-end space-x-4 w-40">
          <a href="#contact">
            {/* Si quieres que el botón también se achique en el Hero, usa la lógica en 'size' */}
            <Button variant="glow" size={isScrolled ? "nav" : "nav"}>
              Contacto
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button className="lg:hidden text-white p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-osa-black/95 backdrop-blur-xl absolute top-full left-0 w-full mt-4 rounded-3xl border border-white/10 p-6 shadow-2xl animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>Inicio</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>Desafíos</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>Nosotros</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>Servicios</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>Revops</a>

            <div className="pt-4">
              <a href="#contact" onClick={handleNavClick}>
                <Button className="w-full group bg-white text-black hover:bg-gray-200 rounded-full">
                  Contacto
                  <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;