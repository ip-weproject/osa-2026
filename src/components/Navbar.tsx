import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom'; // 👈 Ya no necesitamos Link para el scroll interno
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-osa-black/80 backdrop-blur-md py-3 shadow-lg' : 'py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Si quieres que el logo lleve al inicio, usa #home o # (top) */}
          <a href="#">
            <img 
              src={logo} 
              alt="OSA-logo" 
              className="w-16 h-auto rounded-xl shadow-2xl border border-white/10" 
            />
          </a>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Inicio
            </a>
          </li>
          <li>
            {/* Asegúrate que en FAQ.tsx la section tenga id="faq" */}
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
              Desafíos
            </a>
          </li>
          <li>
            {/* Asegúrate que en AboutUs.tsx la section tenga id="about" */}
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Servicios
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
              Revops
            </a>
          </li>
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          {/* 👇 CAMBIO IMPORTANTE: Usa 'a href' en lugar de 'Link to' */}
          <a href="#contact">
            <Button className="bg-osa-cian hover:bg-osa-dark-cian text-white w-full">Hablemos</Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-osa-blue/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={handleNavClick}>
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={handleNavClick}>
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={handleNavClick}>
                  FAQ
                </a>
              </li>
              {/* ... resto de items ... */}
              
              <li className="pt-4 flex flex-col space-y-3">
                <Button variant="ghost" className="text-gray-300 hover:text-white w-full justify-start">
                  Login
                </Button>
                {/* 👇 Corrección en móvil también */}
                <a href="#contact" onClick={handleNavClick}>
                  <Button className="bg-osa-cian hover:bg-osa-dark-cian text-white w-full">Hablemos</Button>
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