import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight } from 'lucide-react';
import logoLight from '../assets/logo.svg';
import logoDark from '../assets/logo-dark.svg';
import LanguageSwitch from './LanguageSwitch';
import { useLanguage } from '../context/LanguageContext';
import ModeToggle from './ModeToggle'; 
import { useTheme } from '../context/ThemeContext'; 

const Navbar = () => {
  const { t } = useLanguage();
  const { theme } = useTheme(); 

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
      fixed z-50 transition-all duration-500 ease-in-out
      left-1/2 -translate-x-1/2
      rounded-full
      max-w-7xl
      w-[90%] md:w-[80%] 
      top-2
      ${isScrolled 
        ? 'border border-white/20 bg-osa-black/20 backdrop-blur-md py-4 shadow-2xl dark:border-white/10 dark:bg-osa-black/20 border-gray-200 bg-white/60' 
        : 'border border-transparent bg-transparent py-2 shadow-none' 
      }
    `}>
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center justify-start w-40">
          <a href="#">
            <img 
              /* 4. LÓGICA DE CAMBIO DE IMAGEN */
              src={theme === 'dark' ? logoLight : logoDark} 
              alt="OSA-logo" 
              className={`
                rounded-full transition-all duration-300
                ${isScrolled ? 'w-12' : 'w-12'}
                
                /* 5. SOMBRA ADAPTATIVA:
                   - Light Mode: Sombra negra suave (hover:shadow-[...rgba(0,0,0,0.2)])
                   - Dark Mode: Tu sombra blanca brillante (dark:hover:shadow-[...rgba(255,255,255,0.8)])
                */
                hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] 
                dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]
              `} 
            />
          </a>
        </div>

        {/* ... Resto del Navbar igual ... */}

       {/* ================= DESKTOP MENU ================= */}
<ul className="hidden lg:flex items-center space-x-2">
  <li>
    <a href="#" className="inline-block min-w-[60px] text-center transition-colors text-base font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">
      {t.navbar.home}
    </a>
  </li>
  <li>
    <a href="#faq" className="inline-block min-w-[80px] text-center transition-colors text-base font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">
      {t.navbar.challenges}
    </a>
  </li>
  <li>
    <a href="#about" className="inline-block min-w-[80px] text-center transition-colors text-base font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">
      {t.navbar.about}
    </a>
  </li>
  <li>
    <a href="#services" className="inline-block min-w-[80px] text-center transition-colors text-base font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">
      {t.navbar.services}
    </a>
  </li>
  <li>
    <a href="#how-it-works" className="inline-block min-w-[80px] text-center transition-colors text-base font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">
      {t.navbar.revops}
    </a>
  </li>
</ul>

        {/* CONTENEDOR DERECHO: IDIOMA + TEMA + CONTACTO */}
        <div className="hidden lg:flex items-center justify-end space-x-4">
          
          <LanguageSwitch /> 
          
          {/* 2. AGREGAR MODE TOGGLE AQUÍ */}
          <ModeToggle />

          <a href="#contact">
            {/* Si quieres que el botón también se achique en el Hero, usa la lógica en 'size' */}
            <Button variant="glow" size={isScrolled ? "nav" : "nav"}>
              {t.navbar.contact}
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
            
            {/* 3. AGREGAR CONTROLES EN MÓVIL (IDIOMA + TEMA) */}
            <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-2">
                <span className="text-gray-400 text-sm">Configuración</span>
                <div className="flex gap-4">
                    <LanguageSwitch />
                    <ModeToggle />
                </div>
            </div>

            <a href="#" className="text-gray-300 hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>{t.navbar.home}</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>{t.navbar.challenges}</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>{t.navbar.about}</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>{t.navbar.services}</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>{t.navbar.revops}</a>

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