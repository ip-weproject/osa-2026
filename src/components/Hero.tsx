import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import HeroPng from '../assets/Hero.svg';
import { RotatingText } from '@/components/ui/rotating-text';
import hubspotLogo from '../assets/HubSpot_Logo.svg'; 
import salesforceLogo from '../assets/salesforce-with-type-logo.svg';
// import partnerLogo from '../assets/partner-logo.svg'; 
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

const logoImgClasses = "filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300";

  return (
    // Agregamos bg-background para asegurar que cambie el color de fondo
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background transition-colors duration-300">
      
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
              <Button variant="ghablemos" size="lg"> 
                {t.hero.buttonTalk}
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="glow" size="lg">
                {t.hero.buttonSolutions}
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          {/* Bloque Imagen Central (Hero) */}
          <div className="w-full flex justify-center relative -mt-[6rem] lg:-mt-[4rem] pointer-events-none z-0">
              {/* TRUCO PARA LA IMAGEN:
                  - dark:filter-none: En modo oscuro, se ve normal (blanco/colores).
                  - filter invert: En modo claro, invierte los colores (blanco -> negro).
                  - Si tu SVG tiene colores complejos, esto puede verse raro, pero si es lineal/wireframe, queda GENIAL.
              */}
              <img
                src={HeroPng}
                alt="Hero-png"
                className="w-full max-w-[20rem] md:max-w-[30rem] lg:max-w-[30rem] h-auto object-contain animate-fade-in transition-all duration-300"
              />
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