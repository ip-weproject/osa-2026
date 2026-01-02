import { solutionsData } from '@/data/solutionsData'; 
import { cn } from "@/lib/utils"; // Asumiendo que tienes esta utilidad, si no, usa template strings normales

const Solutions = () => {
  
  // Mapeo de estilos según la variante (azul, blanco, cian)
  const getCardStyles = (variant: string) => {
    switch (variant) {
      case 'blue':
        return "bg-osa-blue text-white";
      case 'white':
        return "bg-white text-gray-900"; // Texto oscuro para fondo blanco
      case 'cyan':
        return "bg-osa-cian text-white";
      default:
        return "bg-white text-gray-900";
    }
  };

  return (
    <section id="solutions" className="py-24 bg-black">
      <div className="container mx-auto px-3 md:px-10 lg:px-20">

        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-4 !text-osa-blue">

            Soluciones

          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">

            Choose the plan that best fits your trading needs. All plans include our core platform services.

          </p>
          </div>
        
        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5">
          {solutionsData.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-3xl !p-7 lg:p-10 flex flex-col h-full relative overflow-hidden transition-transform duration-300 hover:-translate-y-1",
                getCardStyles(item.variant)
              )}
            >
              {/* Número Grande (Ej: 01.) */}
              <div className="mb-2">
                <span className="text-5xl md:text-6xl tracking-tighter">
                  {item.number}
                </span>
              </div>

              {/* Título */}
              <h3 className="text-2xl md:text-3xl mb-4 leading-tight">
                {item.title}
              </h3>

              {/* Descripción */}
              <p className={cn(
                "text-lg leading-relaxed font-thin",
                item.variant === 'white' ? "text-gray-600" : "text-white/90"
              )}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;