import React from 'react';
import logoMads from '../assets/client-mads.svg'; 
import { useLanguage } from '../context/LanguageContext';

const Clients = () => {
  const logos = [
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
  ];

  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gray-50 dark:bg-osa-black border-y border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 mb-8">
        <h5 className="text-center text-gray-500 dark:text-gray-400 font-medium tracking-wide text-sm transition-colors">
          {t.clients.title}
        </h5>
      </div>

      <div className="relative w-full md:w-1/2 mx-auto overflow-hidden">
        
        {/* Máscaras de Gradiente */}
        <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent dark:from-osa-black pointer-events-none"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent dark:from-osa-black pointer-events-none"></div>

        {/* === CONTROL DE VELOCIDAD AQUÍ === 
           1. Eliminé 'hover:[animation-play-state:paused]' para que no se detenga.
           2. Agregué '[animation-duration:30s]'. 
              - Cambia '30s' a '10s' para que vaya rapidísimo.
              - Cambia '30s' a '60s' para que vaya muy lento.
        */}
        <div className="flex w-max animate-scroll [animation-duration:100s]">
          
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 px-2">
              {logos.map((logo, index) => (
                // === CAMBIOS EN LOGOS ===
                // 1. Eliminé hover:grayscale-0, hover:opacity-100, transition, duration.
                // 2. Agregué 'pointer-events-none' para que no sean clickeables ni seleccionables.
                // 3. Dejé 'grayscale opacity-50' fijos.
                // 4. Agregué 'invert dark:invert-0' para que los logos blancos se vean negros en modo claro.
                <div 
                  key={`logo-${i}-${index}`} 
                  className="relative h-6 w-auto grayscale opacity-50 pointer-events-none invert dark:invert-0 transition-all duration-300"
                >
                  <img src={logoMads} alt={logo.alt} className="h-full w-auto object-contain" />
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Clients;