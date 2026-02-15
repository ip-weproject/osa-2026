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
    // Contenedor fijo para ambos elementos (barra y menú móvil)
    // para que se posicionen correctamente.
    <div className="fixed z-50 top-2 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] max-w-7xl">
      
      <nav className={`
        w-full transition-all duration-500 ease-in-out rounded-full
        ${isMobileMenuOpen ? 'hidden lg:flex' : 'flex'}
        ${isScrolled 
          ? `py-4 shadow-2xl backdrop-blur-md border bg-white/80 border-gray-200/80 dark:bg-black/80 dark:border-white/10` 
          : 'py-2 bg-transparent border-transparent shadow-none'
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
    <a href="#challenges" className="inline-block min-w-[80px] text-center transition-colors text-base font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">
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
    <a href="#revops" className="inline-block min-w-[80px] text-center transition-colors text-base font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">
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
        <button 
          className="lg:hidden text-gray-800 dark:text-white p-1" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </nav>
      
      {/* --- PANEL DE MENÚ MÓVIL (FLOTANTE) --- */}
      {isMobileMenuOpen && (
        <div className="
          lg:hidden w-full p-6 rounded-3xl animate-in slide-in-from-top-5
          shadow-2xl backdrop-blur-md border bg-white/80 border-gray-200/80
          dark:bg-black/80 dark:border-white/10
        ">
          <div className="flex flex-col space-y-4">
            {/* 1. Cabecera del menú móvil con Logo y Botón de Cierre */}
            <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-white/10 mb-2">
              <a href="#" onClick={handleNavClick}>
                <img 
                  src={theme === 'dark' ? logoLight : logoDark} 
                  alt="OSA-logo" 
                  className="w-12 h-12"
                />
              </a>
              <div className="flex items-center gap-4">
                <LanguageSwitch />
                <ModeToggle />
                <button 
                  className="text-gray-800 dark:text-white p-1" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>
            </div>

            {/* 2. Links de navegación */}
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>{t.navbar.home}</a>
            <a href="#challenges" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>{t.navbar.challenges}</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>{t.navbar.about}</a>
            <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>{t.navbar.services}</a>
            <a href="#revops" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors block py-2 text-center" onClick={handleNavClick}>{t.navbar.revops}</a>

            {/* 3. Botón de Contacto */}
            <div className="pt-4">
              <a href="#contact" onClick={handleNavClick}>
                <Button variant="glow" className="w-full group">
                  {t.navbar.contact}
                  <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;