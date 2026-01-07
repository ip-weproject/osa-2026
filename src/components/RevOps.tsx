import { Button } from "@/components/ui/button";
import { steps } from "../data/revopsData";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Importamos 'cn' para mezclar clases condicionales limpiamente

const RevOps = () => {
  
  // Función auxiliar para asignar los bordes según el índice (0, 1, 2)
  const getBorderClasses = (index: number) => {
    // En móvil (default) todas son rounded-3xl.
    // En escritorio (md) aplicamos la lógica de unificación:
    if (index === 0) return "md:rounded-l-[40px] md:rounded-r-2xl rounded-3xl"; // Izquierda
    if (index === steps.length - 1) return "md:rounded-r-[40px] md:rounded-l-2xl rounded-3xl"; // Derecha
    return "md:rounded-2xl rounded-3xl"; // Centro
  };

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#12141C] to-osa-black">
      <div className="container mx-auto md:px-10 lg:px-32">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-gradient">
            La Ciencia detrás de <span className="text-gradient">Tus Ingresos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            RevOps no es solo un departamento, es una mentalidad. Eliminamos la fricción operativa para que tu equipo se concentre en cerrar negocios.
          </p>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-4">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={cn(
                // Clases Base
                "relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 overflow-hidden h-full",
                // Clases Dinámicas de Borde (La magia de la unificación)
                getBorderClasses(index)
              )}
            >
              {/* --- NÚMERO A LA IZQUIERDA --- */}
              <span className="
                absolute -top-2 pt-4 left-6 
                text-[7rem] leading-none 
                text-white/30 
                select-none
                z-0
              ">
                {step.number}
              </span>

              {/* --- ICONO A LA DERECHA --- */}
              {/* <div className="absolute top-8 right-8 z-10">
                <div className="bg-white/5 rounded-2xl w-14 h-14 flex items-center justify-center text-osa-cian border border-white/5 shadow-lg shadow-black/20">
                  {step.icon}
                </div>
              </div> */}

              {/* Contenido */}
              <div className="relative z-10 pt-20"> 
                <h3 className="text-xl mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
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
        </div>

      </div>
    </section>
  );
};

export default RevOps;