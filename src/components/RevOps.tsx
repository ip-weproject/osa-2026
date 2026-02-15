import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils"; 
import { useLanguage } from "../context/LanguageContext";

const RevOps = () => {
  const { t } = useLanguage();
  
  // Lógica de bordes para el bento grid en móvil y escritorio
  const getBorderClasses = (index, totalLength) => {
    // Móvil: primera y última tarjeta tienen bordes exteriores grandes.
    if (index === 0) {
      return "rounded-t-[50px] rounded-b-2xl md:rounded-l-[40px] md:rounded-r-2xl md:rounded-t-2xl";
    }
    if (index === totalLength - 1) {
      return "rounded-t-2xl rounded-b-[50px] md:rounded-r-[40px] md:rounded-l-2xl md:rounded-b-2xl";
    }
    // Tarjetas intermedias
    return "rounded-2xl";
  };

  return (
    <section id="how-it-works" className="py-24 bg-background transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-gradient">
            {t.revops.title} <span className="text-gradient">{t.revops.titleHighlight}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg transition-colors">
            {t.revops.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-4">
          {t.revops.steps.map((step, index) => (
            <div 
              key={index}
              className={cn(
                "group relative overflow-hidden h-full p-8 md:p-10 transition-all duration-500",
                "bg-[#1a1c23] hover:bg-[#050505] dark:bg-white/5 dark:hover:bg-white/10",
                "border border-white/5 dark:border-white/10",
                getBorderClasses(index, t.revops.steps.length)
              )}
            >
              <span className="absolute -top-2 pt-4 left-6 text-[7rem] leading-none text-white/10 select-none z-0 transition-colors group-hover:text-white/[0.15]">
                {step.number}
              </span>

              <div className="relative z-10 pt-20"> 
                <h3 className="text-xl mb-3 text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm transition-colors group-hover:text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://meetings.hubspot.com/osa-consulting" target="_blank" rel="noreferrer">
            <Button variant="glow" size="lg">
              {t.revops.button}
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RevOps;