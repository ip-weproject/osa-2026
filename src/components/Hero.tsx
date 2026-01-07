import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import HeroPng from '../assets/Hero.svg';
import { RotatingText } from '@/components/ui/rotating-text';
import hubspotLogo from '../assets/HubSpot_Logo.svg'; 
import salesforceLogo from '../assets/salesforce-with-type-logo.svg';
import partnerLogo from '../assets/partner-logo.svg'; 

const Hero = () => {

  // Clases para el efecto "grisáceo":
  // grayscale: quita el color.
  // opacity-60: lo hace sutil.
  // hover:grayscale-0 hover:opacity-100: devuelve el color y brillo al pasar el mouse.
  const logoImgClasses = "filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300";

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent">
      
      {/* 1. ELEMENTOS DECORATIVOS */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[30%] -left-[7%] w-[800px] h-[100px] bg-cyan-500/30 rounded-[85% 15% 20% 80% / 29% 33% 67% 71%] blur-[70px] rotate-[40deg]"></div>
        <div className="absolute top-[37%] left-[40%] w-[800px] h-[100px] bg-cyan-500/30 rounded-[85% 15% 20% 80% / 29% 33% 67% 71%] blur-[70px] rotate-[140deg]"></div>
      </div> */}

      {/* 2. CONTENIDO */}
      <div className="container px-4 md:px-10 lg:px-32 pt-32 relative z-10">
        
        <div className="flex flex-col items-center gap-12"> 
          
          {/* Bloque Texto */}
          <div className="w-full max-w-4xl animate-fade-in-up text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight flex flex-col md:block items-center justify-center gap-x-3">
              <span className="text-gradient">Expertos en </span><br />
              <RotatingText />
            </h1>
            <p className="text-lg md:text-lg text-gray-300 mb-0 max-w-2xl mx-auto">
              Integramos CRM y datos con IA para escalar tus operaciones y garantizar ingresos predecibles.
            </p>
          </div>
            
          {/* Botones (z-20 para estar encima de la imagen) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <a href="https://meetings.hubspot.com/osa-consulting" target="_blank" rel="noopener noreferrer">
              <Button variant="glow" size="lg">
                Hablemos
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="glow" size="lg">
                Soluciones
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          {/* Bloque Imagen Central (Hero) */}
          {/* pointer-events-none permite clicks a través de la imagen si se solapa */}
          <div className="w-full flex justify-center relative -mt-[4rem] lg:-mt-[6rem] pointer-events-none">
              <img
                src={HeroPng}
                alt="Hero-png"
                className="w-full max-w-[20rem] md:max-w-[30rem] lg:max-w-[30rem] h-auto object-contain animate-fade-in"
              />
          </div>
            <p className="text-sm text-gray-500 font-medium tracking-wide mb- relative z-20">
            Nuestros Aliados Tecnológicos
          </p>

          {/* --- NUEVA SECCIÓN: LOGOS PARTNERS --- */}
          {/* Ajustamos mt (margen superior) negativo o positivo según qué tan pegado lo quieras a la imagen */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-8 relative z-20 -mt-8 pb-10">

            
             {/* HubSpot */}
              <a href="https://www.hubspot.com" target="_blank" rel="noreferrer" className="group">
                <img 
                  src={hubspotLogo} 
                  alt="HubSpot" 
                  className={`h-6 w-auto ${logoImgClasses}`} 
                />
              </a>

              {/* Salesforce */}
              <a href="https://www.salesforce.com" target="_blank" rel="noreferrer" className="group">
                <img 
                  src={salesforceLogo} 
                  alt="Salesforce" 
                  className={`h-12 w-auto ${logoImgClasses}`} 
                />
              </a>

              {/* Partner Logo */}
              {/* <a href="https://cambalachetechnologies.github.io/landing/?gad_source=1&gad_campaignid=23026496148&gbraid=0AAAABBTN5CYgiXAMNeiYM_WsQAz8jaFv6&gclid=Cj0KCQiAgvPKBhCxARIsAOlK_EqY8Ju9qHhaU1mWYKqqfEFbTyUrglqLFZv39YJL516kZ71PM7YD9tQaAlo8EALw_wcB" target="_blank" rel="noreferrer" className="group">
                <img 
                  src={partnerLogo} 
                  alt="Partner" 
                  className={`h-16 w-auto ${logoImgClasses}`} 
                />
              </a> */}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;