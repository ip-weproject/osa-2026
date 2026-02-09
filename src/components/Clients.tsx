import React from 'react';
import logoMads from '../assets/client-mads.svg'; 

const Clients = () => {
  const logos = [
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
  ];

  return (
    <section className="py-4 bg-osa-black border-t border-white/10">
      <div className="container mx-auto px-4 mb-8">
        <h5 className="text-center text-gray-400 font-medium tracking-wide text-sm">
          Confían en nosotros
        </h5>
      </div>

      <div className="relative w-full md:w-1/2 mx-auto overflow-hidden">
        
        {/* Máscaras de Gradiente */}
        <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-osa-black to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-osa-black to-transparent pointer-events-none"></div>

        {/* === CONTROL DE VELOCIDAD AQUÍ === 
           1. Eliminé 'hover:[animation-play-state:paused]' para que no se detenga.
           2. Agregué '[animation-duration:30s]'. 
              - Cambia '30s' a '10s' para que vaya rapidísimo.
              - Cambia '30s' a '60s' para que vaya muy lento.
        */}
        <div className="flex w-max animate-scroll [animation-duration:150s]">
          
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 px-2">
              {logos.map((logo, index) => (
                // === CAMBIOS EN LOGOS ===
                // 1. Eliminé hover:grayscale-0, hover:opacity-100, transition, duration.
                // 2. Agregué 'pointer-events-none' para que no sean clickeables ni seleccionables.
                // 3. Dejé 'grayscale opacity-50' fijos (puedes subir opacity a 70 si se ven muy oscuros).
                <div key={`logo-${i}-${index}`} className="relative h-6 w-auto grayscale opacity-50 pointer-events-none">
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