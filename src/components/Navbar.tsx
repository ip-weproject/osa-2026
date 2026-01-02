import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button'; // Ya no lo necesitamos para estos enlaces
import { Menu, X, ArrowRight } from 'lucide-react'; // Asegúrate de importar ArrowRight si lo usas
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

  // Clases compartidas para el botón "Hablemos" para no repetir código
  const buttonClasses = `
    inline-flex items-center justify-center rounded-full text-sm font-medium
    bg-osa-white text-osa-black border px-8 py-3 
    transition-all duration-500 ease-out
    cursor-pointer
    hover:text-white
    hover:border-transparent
    hover:bg-gradient-to-r hover:from-osa-cian hover:via-osa-blue hover:to-osa-cian
    hover:bg-[length:200%_auto]
    hover:bg-right
  `;

  return (
    <nav className={`
  fixed z-50 transition-all duration-300 
  left-1/2 -translate-x-1/2  
  w-[80%] max-w-7xl          
  rounded-full                
  border border-white/20     
  
  ${isScrolled 
    ? 'top-4 bg-osa-black/80 backdrop-blur-sm py-3 shadow-2xl' 
    : 'top-6 bg-osa-black/40 backdrop-blur-sm py-4'             
  }
`}>
      <div className="container mx-auto px-20 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo link al top */}
          <a href="#">
            <img 
              src={logo} 
              alt="OSA-logo" 
              className="w-14 md-w-10 h-auto rounded-xl shadow-2xl " 
            />
          </a>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Inicio</a></li>
          <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">Desafíos</a></li>
          <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Nosotros</a></li>
          <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Servicios</a></li>
          {/* <li><a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Soluciones</a></li> */}
          <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">Revops</a></li>
        </ul>

        {/* BOTÓN DE ESCRITORIO (Aquí faltaba actualizar) */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#contact" className={buttonClasses}>
            Contacto
            {/* Si quieres la flecha, descomenta esto: */}
            {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-osa-black backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg h-screen">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={handleNavClick}>Inicio</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={handleNavClick}>Desafíos</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={handleNavClick}>Nosotros</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={handleNavClick}></a>Servicios</li>
              {/* <li><a href="#solutions" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={handleNavClick}></a>Soluciones</li> */}
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={handleNavClick}>Revops</a></li>

              {/* BOTÓN MÓVIL (Actualizado y corregido) */}
              <li className="pt-4 flex flex-col space-y-3">
                <a href="#contact" onClick={handleNavClick} className={buttonClasses}>
                  Contacto
                </a>
              </li>

            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;