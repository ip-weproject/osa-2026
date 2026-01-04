import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
// import isoImage from '../assets/iso4.svg';
import { HeroVideo } from './HeroVideo';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent">
      
      {/* AQUÍ ESTÁ EL CAMBIO: Insertamos el Video Hero como fondo */}
      {/* Reemplaza a los divs de "Animated Background Elements" anteriores */}
      {/* <HeroVideo /> */}
    
      <div className="container px-4 md:px-10 lg:px-40 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              <span className="text-gradient">Expertos en Revenue </span><span className="text-gradient"> Operations</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Integramos CRM y datos con IA para escalar tus operaciones y garantizar ingresos predecibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://meetings.hubspot.com/osa-consulting" 
                target="_blank" 
                rel="noopener noreferrer"
              >
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
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in-right">
            <div className="relative max-w-md mx-auto animate-float">
              {/* <img 
                src={isoImage}
                alt="Trading platform dashboard" 
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;