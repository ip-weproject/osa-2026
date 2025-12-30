import React from 'react';

// Si tienes el archivo en 'src/assets', impórtalo así:
import logoMads from '../assets/client-mads.svg';

const Clients = () => {
  // Lista de logos. Puedes repetir el mismo o poner diferentes.
  // Nota: Si usaste el método de la carpeta public, la ruta es '/assets/...'
  // Si importaste la imagen arriba, usa la variable {logoMads} en el src.
  const logos = [
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
    { src: "/assets/imgs/client-mads.svg", alt: "Mads" },
  ];

  return (
    <section className="py-4 bg-osa-black border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h5 className="text-center text-gray-400 font-medium tracking-wide text-sm">
          Confían en nosotros
        </h5>
      </div>

      {/* Contenedor del Carrusel con Máscaras de Gradiente */}
      <div className="relative w-full max-w-[90rem] mx-auto">
        
        {/* Máscara Izquierda (Fade In) */}
        <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-osa-black to-transparent pointer-events-none"></div>
        
        {/* Máscara Derecha (Fade Out) */}
        <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-osa-black to-transparent pointer-events-none"></div>

        {/* Pista que se mueve (Track) */}
        {/* 'flex' pone los items en fila. 'w-max' asegura que quepan todos. */}
        {/* 'hover:[animation-play-state:paused]' detiene el carrusel si pasas el mouse */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          
          {/* PRIMERA TANDA DE LOGOS */}
          <div className="flex items-center gap-6 px-2">
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="relative h-6 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-600">
                <img 
                  src={logoMads} 
                  alt={logo.alt} 
                  className="h-full w-auto object-contain" 
                />
              </div>
            ))}
          </div>

          {/* SEGUNDA TANDA (DUPLICADA) para el efecto infinito */}
          <div className="flex items-center gap-6 px-2">
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="relative h-6 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-600">
                <img 
                  src={logoMads} 
                  alt={logo.alt} 
                  className="h-full w-auto object-contain" 
                />
              </div>
            ))}
          </div>
          {/* SEGUNDA TANDA (DUPLICADA) para el efecto infinito */}
          <div className="flex items-center gap-6 px-2">
            {logos.map((logo, index) => (
              <div key={`logo-3-${index}`} className="relative h-6 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-600">
                <img 
                  src={logoMads} 
                  alt={logo.alt} 
                  className="h-full w-auto object-contain" 
                />
              </div>
            ))}
          </div>
          {/* SEGUNDA TANDA (DUPLICADA) para el efecto infinito */}
          <div className="flex items-center gap-6 px-2">
            {logos.map((logo, index) => (
              <div key={`logo-4-${index}`} className="relative h-6 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-600">
                <img 
                  src={logoMads} 
                  alt={logo.alt} 
                  className="h-full w-auto object-contain" 
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clients;