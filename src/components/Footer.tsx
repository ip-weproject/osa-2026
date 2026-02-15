import { useState, useEffect } from 'react';
import hubspotLogo from '../assets/HubSpot_Logo.svg';
import salesforceLogo from '../assets/salesforce-with-type-logo.svg';
import partnerLogo from '../assets/partner-logo.svg'; 
import footerLogo from '../assets/logo-footer.png'; 
import { useLanguage } from '../context/LanguageContext'; 

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  // Mantenemos tus clases pero aseguramos que el logo sea legible en ambos modos
  // En light mode, los logos suelen necesitar un pelín de contraste extra si son muy claros
  const logoImgClasses = "transition-all duration-300 dark:brightness-100 brightness-90";

  return (
    <footer className="pt-16 pb-8 relative z-10 bg-background transition-colors duration-300">
      
      {/* --- 2. CONTENIDO --- */}
      <div className="container mx-auto px-6 md:px-12 lg:px-32 relative z-10">
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 text-center"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start">
          
          {/* COLUMNA 1: Contacto */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              <h6 className="text-gray-900 dark:text-white font-bold tracking-wide text-sm transition-colors">
                {t.footer.email}
              </h6>
              <p className="text-gray-600 dark:text-gray-400 hover:text-osa-cian dark:hover:text-osa-cian transition-colors">
                <a href="mailto:info@osarevops.com">info@osarevops.com</a>
              </p>
            </div>
            
            <div className="mb-4">
              <h6 className="text-gray-900 dark:text-white font-bold tracking-wide text-sm transition-colors">
                {t.footer.phone}
              </h6>
              <p className="text-gray-600 dark:text-gray-400">
                <a href="https://wa.me/5491124760567" target="_blank" rel="noreferrer" className="hover:text-osa-cian dark:hover:text-osa-cian transition-colors">
                  +54 9 11 2476-0567
                </a>
              </p>
            </div>
            
            <div className="mb-4">
              <h6 className="text-gray-900 dark:text-white font-bold tracking-wide text-sm transition-colors">
                {t.footer.address}
              </h6>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                {t.footer.location}
              </p>
            </div>
          </div>

          {/* COLUMNA 2: Partners */}
          <div className="flex flex-col items-center md:items-end justify-center h-full">
            
            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-end items-center gap-6 md:gap-10 mb-2">
              <a href="https://www.hubspot.com" target="_blank" rel="noreferrer" className="group transition-transform hover:scale-105 opacity-80 hover:opacity-100">
                <img src={hubspotLogo} alt="HubSpot" className={`h-7 md:h-8 w-auto ${logoImgClasses}`} />
              </a>
              <a href="https://www.salesforce.com" target="_blank" rel="noreferrer" className="group transition-transform hover:scale-105 opacity-80 hover:opacity-100">
                <img src={salesforceLogo} alt="Salesforce" className={`h-12 md:h-14 w-auto ${logoImgClasses}`} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="group transition-transform hover:scale-105 opacity-80 hover:opacity-100">
                <img src={partnerLogo} alt="Partner" className={`h-16 md:h-20 w-auto ${logoImgClasses}`} />
              </a>
            </div>
            
          </div>

        </div>

        {/* DERECHOS RESERVADOS (Ahora fuera del grid, al final para ambos) */}
        <div className="mt-1 pt-2 border-t border-gray-200 dark:border-white/10 text-center"></div>
          <small className="text-gray-500 dark:text-gray-500">
            {currentYear} © OSA Consulting LLC. {t.footer.rights}
          </small>
        </div>
    </footer>
  );
};

export default Footer;