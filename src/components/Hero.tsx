
import { useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import HeroPng from '../assets/hero.png';
import HeroWebm from '../assets/chip-hero.webm';
import HeroMov from '../assets/chip-hero.mov';
import { RotatingText } from '@/components/ui/rotating-text';
import hubspotLogo from '../assets/HubSpot_Logo.svg'; 
import salesforceLogo from '../assets/salesforce-with-type-logo.svg';
// import partnerLogo from '../assets/partner-logo.svg'; 
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  // 1. AQUÍ VA LA LÓGICA Y LOS HOOKS (ANTES DEL RETURN)
  const videoRef = useRef(null);

  useEffect(() => {
    // Cuando el componente carga, forzamos el mute a nivel DOM
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);

return (
    // Agregamos bg-background para asegurar que cambie el color de fondo
    <section className="relative min-h-screen flex flex-col justify-center bg-background transition-colors duration-300">
      
      <div className="container px-4 md:px-10 lg:px-32 pt-32 relative z-10">
        
        <div className="flex flex-col items-center gap-12"> 
          
          {/* Bloque Texto */}
          <div className="w-full max-w-4xl animate-fade-in-up text-center">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight flex flex-col items-center justify-center gap-2">
              <span className="text-gradient">{t.hero.expert}</span>
              <RotatingText words={t.hero.rotating} />
            </h1>

            {/* CAMBIO TEXTO: Gris oscuro en Light, Gris claro en Dark */}
            <p className="text-lg md:text-lg text-gray-600 dark:text-gray-300 mb-0 max-w-2xl mx-auto transition-colors">
              {t.hero.description}
            </p>
          </div>
            
          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-50">
            <a href="https://meetings.hubspot.com/osa-consulting" target="_blank" rel="noopener noreferrer">
              {/* NOTA: Los botones se verán oscuros en ambos modos por ahora (porque 'ghablemos' es teal-900). 
                  Eso se arregla en button.tsx después. */}
              <Button variant="ghablemos" size="lg" className="w-full sm:w-auto"> 
                {t.hero.buttonTalk}
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="glow" size="lg" className="w-full sm:w-auto">
                {t.hero.buttonSolutions}
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
          
          {/* WRAPPER: Este div define el tamaño final del "bloque" en la pantalla */}
            {/* Ajusta los max-w-[...] aquí para cambiar el tamaño general de todo el conjunto */}
            <div className="relative w-full max-w-[20rem] md:max-w-[30rem] lg:max-w-[30rem] mx-auto z-0">
              
              {/* 1. IMAGEN DEL CHIP (La Referencia) */}
              {/* No toques nada aquí, esta imagen define la proporción del contenedor */}
              <img
                src={HeroPng}
                alt="Hero-chip"
                className="w-full h-auto object-contain relative z-10"
              />

              {/* VIDEO DE DESTELLOS BLINDADO (TypeScript Fix) */}
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="
                  absolute z-20 pointer-events-none 
                  top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-[150%] h-[150%]
                "
              >
                {/* 1. iOS / Mac (HEVC Transparente) */}
                <source src={HeroMov} type='video/quicktime; codecs="hvc1"' />
                
                {/* 2. Chrome / Android (WebM Transparente) */}
                <source src={HeroWebm} type="video/webm" />
              </video>

            </div>

          {/* Texto Partners: Color adaptativo */}
          <p className="text-sm text-gray-500 dark:text-gray-500 font-medium tracking-wide -mt-6 relative z-20 transition-colors">
            {t.hero.partners}
          </p>

          {/* --- LOGOS PARTNERS --- */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-6 relative z-20 -mt-8 pb-10">
            
             {/* HubSpot */}
             <a href="https://www.hubspot.com" target="_blank" rel="noreferrer" className="group">
               <img 
                 src={hubspotLogo} 
                 alt="HubSpot" 
                 className="h-6 w-auto transition-all duration-300 md:grayscale md:opacity-60 md:group-hover:grayscale-0 md:group-hover:opacity-100" 
               />
             </a>

             {/* Salesforce */}
             <a href="https://www.salesforce.com" target="_blank" rel="noreferrer" className="group">
               <img 
                 src={salesforceLogo} 
                 alt="Salesforce" 
                 className="h-12 w-auto transition-all duration-300 md:grayscale md:opacity-60 md:group-hover:grayscale-0 md:group-hover:opacity-100" 
               />
             </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;