import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "../context/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 bg-background transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-gradient">
            <span className="text-gradient inline box-decoration-clone pb-2">
              {t.faq.title}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {t.faq.accordion.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-none animate-on-scroll bg-transparent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="
                  px-6 py-4 text-left text-lg
                  
                  /* 1. COLORES BASE (Cerrado) - UNIFICADO CON BENTO */
                  text-white 
                  /* Aquí aplicamos el #262525 que me pediste */
                  bg-[#262525]           dark:bg-white/5 
                  border border-white/5  dark:border-white/10
                  
                  /* ESTADO BASE (Estructura) */
                  rounded-[32px]
                  backdrop-blur-sm 
                  
                  /* HOVER (Colores) -> Negro Puro (Igual que Bento Hover) */
                  hover:bg-[#0a0a0a]      dark:hover:bg-white/10 
                  hover:border-white/10   dark:hover:border-white/10
                  hover:no-underline 

                  /* TRANSICIONES */
                  [transition:background-color_300ms,border-color_300ms,border-radius_0s_200ms]
                  data-[state=open]:[transition:background-color_300ms,border-color_300ms,border-radius_0s]

                  /* ESTADO ABIERTO (Estructura) */
                  data-[state=open]:rounded-b-none 
                  data-[state=open]:border-b-transparent
                  
                  /* ESTADO ABIERTO (Colores -> Negro Puro) */
                  data-[state=open]:bg-[#0a0a0a]  dark:data-[state=open]:bg-white/10
                ">
                  {item.question}
                </AccordionTrigger>
                
                <AccordionContent className="
                    px-6 pb-6 pt-2 
                    
                    /* TEXTO RESPUESTA */
                    text-gray-400 
                    
                    /* FUSIÓN PERFECTA (Fondo y Borde igual que Trigger Abierto) */
                    bg-[#0a0a0a]           dark:bg-white/10 
                    border border-white/5  dark:border-white/10 
                    border-t-0 
                    
                    /* Estructura */
                    rounded-b-[32px] 
                  ">
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