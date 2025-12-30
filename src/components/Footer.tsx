import { useState, useEffect } from 'react';

// IMPORTANTE: Asegúrate de que estas rutas sean correctas
import hubspotLogo from '../assets/HubSpot_Logo.svg';
import salesforceLogo from '../assets/salesforce-with-type-logo.svg';
import partnerLogo from '../assets/partner-logo.svg'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Clase base para las imágenes: blancas por defecto, transición suave, y reseteo al hacer hover en el grupo
  const logoImgClasses = " transition-all duration-300";

  return (
    <footer className="bg-[#12141C] pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA 1: Información de Contacto (Sin cambios) */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              <h6 className="text-white font-bold tracking-wide text-sm">E-mail</h6>
              <p className="text-gray-400 hover:text-crypto-cian transition-colors">
                <a href="mailto:info@osarevops.com">info@osarevops.com</a>
              </p>
            </div>

            <div className="mb-4">
              <h6 className="text-white font-bold tracking-wide text-sm">Phone</h6>
              <p className="text-gray-400">
                <a href="https://wa.me/5491124760567" target="_blank" rel="noreferrer" className="hover:text-crypto-cian transition-colors">
                  +54 9 11 2476-0567
                </a>
              </p>
            </div>

            <div className="mb-4">
              <h6 className="text-white font-bold tracking-wide text-sm">Address</h6>
              <p className="text-gray-400 leading-relaxed">
                Buenos Aires, Argentina
              </p>
            </div>

            <div className="mt-4 pt-8 border-t border-white/5 md:border-none">
              <small className="text-gray-500">
                {currentYear} © OSA Consulting LLC. All rights reserved.
              </small>
            </div>
          </div>

          {/* COLUMNA 2: Logos de Partners (CON CAMBIOS DE COLOR) */}
          <div className="flex flex-col items-center md:items-end">
            
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 bg-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
              
              {/* HubSpot */}
              {/* 1. Agregamos 'group' al anchor <a> */}
              <a href="https://www.hubspot.com" target="_blank" rel="noreferrer" className="group transition-transform hover:scale-105 opacity-80 hover:opacity-100">
                <img 
                  src={hubspotLogo} 
                  alt="HubSpot" 
                  // 2. Usamos las nuevas clases con group-hover
                  className={`h-8 w-auto ${logoImgClasses}`} 
                />
              </a>

              {/* Salesforce */}
              <a href="https://www.salesforce.com" target="_blank" rel="noreferrer" className="group transition-transform hover:scale-105 opacity-80 hover:opacity-100">
                <img 
                  src={salesforceLogo} 
                  alt="Salesforce" 
                  className={`h-14 w-auto ${logoImgClasses}`} 
                />
              </a>

              {/* Partner Logo */}
              <a href="#" target="_blank" rel="noreferrer" className="group transition-transform hover:scale-105 opacity-80 hover:opacity-100">
                <img 
                  src={partnerLogo} 
                  alt="Partner" 
                  className={`h-20 w-auto ${logoImgClasses}`} 
                />
              </a>

            </div>
            
            <p className="text-gray-600 text-xs mt-4 text-center md:text-right max-w-xs">
              Proud partners of leading CRM platforms worldwide.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;