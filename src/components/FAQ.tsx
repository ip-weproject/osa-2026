import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "../data/faqData";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#12141C] to-osa-black">
      <div className="container mx-auto md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-gradient">
            ¿Te suenan estos desafíos?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Si te ves reflejado en alguno de estos puntos, tu problema no es de esfuerzo: es de operación.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-none animate-on-scroll bg-transparent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="
                  px-6 py-4 
                  text-white text-left text-lg
                  
                  /* ESTADO BASE (CERRADO) */
                  rounded-[32px]
                  bg-white/5 
                  backdrop-blur-sm 
                  border border-white/10
                  
                  /* HOVER (Colores) */
                  hover:bg-white/10 
                  hover:border-white/10
                  hover:no-underline 

                  /* --- LA MAGIA ESTÁ AQUÍ --- */
                  /* Usamos una transición manual para separar el comportamiento del color y del borde */
                  
                  /* 1. Configuración de CIERRE (Cuando volvemos a ser píldora): */
                  /* - Colores: 300ms (suave) */
                  /* - Borde Radius: dura 0s (brusco) PERO espera 200ms (delay) */
                  [transition:background-color_300ms,border-color_300ms,border-radius_0s_200ms]

                  /* 2. Configuración de APERTURA (Cuando abrimos): */
                  /* - Borde Radius: dura 0s y espera 0s (Inmediato) */
                  data-[state=open]:[transition:background-color_300ms,border-color_300ms,border-radius_0s]

                  /* ESTADO ABIERTO (Estilos visuales) */
                  data-[state=open]:rounded-b-none 
                  data-[state=open]:border-b-transparent
                  data-[state=open]:bg-white/10
                "
                >
                  {item.question}
                </AccordionTrigger>
                
                <AccordionContent 
                  className="
                    px-6 pb-6 pt-2 
                    text-gray-400 
                    
                    /* FUSIÓN PERFECTA */
                    bg-white/10 
                    border border-white/10 
                    border-t-0 
                    
                    /* COINCIDENCIA EXACTA CON ARRIBA */
                    rounded-b-[32px] 
                  "
                >
                  <p className="mb-3 leading-relaxed">
                    {item.answer}
                  </p>

                  {item.points && (
                    <ul className="list-disc pl-5 space-y-2 text-gray-300 marker:text-osa-cian">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="pl-1">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;