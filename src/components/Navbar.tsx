import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-osa-blue/80 backdrop-blur-md py-3 shadow-lg' : 'py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="OSA-logo" 
            // Agrega 'w-32' o 'h-12' (o el tamaño que quieras)
            className="w-16 h-auto rounded-xl shadow-2xl border border-white/10" 
          />
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Inicio
            </a>
          </li>
          <li>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
              Desafíos
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
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
          {/* <Button variant="ghost" className="text-gray-300 hover:text-white">
            Login
          </Button> */}
          <Link to="#contact">
            <Button className="bg-osa-purple hover:bg-osa-dark-purple text-white w-full">Hablemos</Button>
          </Link>
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
                <a href="#features" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  How it works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  FAQ
                </a>
              </li>
              <li className="pt-4 flex flex-col space-y-3">
                <Button variant="ghost" className="text-gray-300 hover:text-white w-full justify-start">
                  Login
                </Button>
                <Link to="#!">
                  <Button className="bg-osa-purple hover:bg-osa-dark-purple text-white w-full">Buy Now</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
