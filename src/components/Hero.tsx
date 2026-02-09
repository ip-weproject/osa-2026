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
        <div className="absolute top-[38rem] -left-[7%] w-[800px] h-[100px] bg-cyan-500/30 rounded-[48% 52% 52% 48% / 48% 49% 51% 52%] blur-[70px] rotate-[0deg]"></div>
        <div className="absolute top-[38rem] left-[40%] w-[800px] h-[100px] bg-cyan-500/30 rounded-[48% 52% 52% 48% / 48% 49% 51% 52%] blur-[70px] rotate-[0deg]"></div>
      </div> */}

      {/* 2. CONTENIDO */}
      <div className="container px-4 md:px-10 lg:px-32 pt-32 relative z-10">
        
        <div className="flex flex-col items-center gap-12"> 
          
          {/* Bloque Texto */}
          <div className="w-full max-w-4xl animate-fade-in-up text-center">
            
            {/* TÍTULO H1: ESTRUCTURA DE 2 LÍNEAS */}
            {/* 1. 'flex flex-col': Fuerza que sean dos bloques, uno arriba del otro. */}
            {/* 2. 'gap-2': Controla la separación entre "Expertos en" y el texto rotativo. */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight flex flex-col items-center justify-center gap-2">
              
              {/* LÍNEA 1: ESTÁTICA */}
              <span className="text-gradient">Expertos en</span>
              
              {/* LÍNEA 2: DINÁMICA (Sin <br>, en su propio bloque) */}
              {/* El componente ya tiene su altura, así que encajará perfecto debajo */}
              <RotatingText />
            </h1>
            <p className="text-lg md:text-lg text-gray-300 mb-0 max-w-2xl mx-auto">
              Convertimos tu CRM en un motor de ventas: procesos claros, automatización y datos para un pipeline medible e ingresos predecibles.
            </p>
          </div>
            
            {/* Botones: 
              1. z-50: Prioridad máxima de capa.
              2. relative: Para que z-50 funcione.
              */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-50">
                <a href="https://meetings.hubspot.com/osa-consulting" target="_blank" rel="noopener noreferrer">
                  {/* Agregamos 'bg-black' o tu color de fondo para que el botón no sea transparente */}
                  <Button variant="ghablemos" size="lg" className="bg-[#050505] hover:bg-[#0a0a0a]"> 
                    Hablemos
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <a href="#services">
                  {/* Lo mismo para el segundo botón */}
                  <Button variant="glow" size="lg" className="bg-[#050505] hover:bg-[#0a0a0a]">
                    Soluciones
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>

          {/* Bloque Imagen Central (Hero) */}
          {/* pointer-events-none permite clicks a través de la imagen si se solapa */}
            <div className="w-full flex justify-center relative -mt-[6rem] lg:-mt-[4rem] pointer-events-none z-0">
                <img
                  src={HeroPng}
                  alt="Hero-png"
                  className="w-full max-w-[20rem] md:max-w-[30rem] lg:max-w-[30rem] h-auto object-contain animate-fade-in"
                />
            </div>
            <p className="text-sm text-gray-500 font-medium tracking-wide -mt-6 relative z-20">
            Nuestros aliados tecnológicos:
          </p>

          {/* --- NUEVA SECCIÓN: LOGOS PARTNERS --- */}
          {/* Ajustamos mt (margen superior) negativo o positivo según qué tan pegado lo quieras a la imagen */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-6 relative z-20 -mt-8 pb-10">

            
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

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;