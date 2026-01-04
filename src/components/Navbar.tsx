import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button'; // Descomentamos esto para usar el mismo estilo base
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para cerrar el menú móvil al hacer clic en un enlace
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`
      fixed z-50 transition-all duration-300 
      left-1/2 -translate-x-1/2  
      w-[90%] md:w-[80%] max-w-7xl           
      rounded-full                
      border border-white/20    
      bg-white/5 
      
      ${isScrolled 
        ? 'top-4 bg-osa-black/80 backdrop-blur-md py-3 shadow-2xl' 
        : 'top-6 bg-osa-black/40 backdrop-blur-sm py-4'             
      }
    `}>
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center">
          <a href="#">
            <img 
              src={logo} 
              alt="OSA-logo" 
              className="w-12 h-auto rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]" 
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

        {/* BOTÓN DE ESCRITORIO (Estilo Hero) */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#contact">
            <Button variant="glow" size="nav">
              Contacto
              {/* Animación de la flecha */}
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
        <div className="lg:hidden bg-osa-black/95 backdrop-blur-xl absolute top-full left-0 w-full mt-4 rounded-3xl border border-white/10 p-6 shadow-2xl">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>Inicio</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>Desafíos</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>Nosotros</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>Servicios</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>Revops</a>

            {/* BOTÓN MÓVIL (Ancho completo) */}
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