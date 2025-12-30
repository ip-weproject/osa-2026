import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "../data/faqData"; // Asegúrate que la ruta sea correcta

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#12141C] to-osa-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            ¿Te suenan estos desafíos?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Si te ves reflejado en alguno de estos puntos, tu problema no es de esfuerzo: es de operación.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-osa-cian hover:no-underline text-left">
                  {item.question}
                </AccordionTrigger>
                
                <AccordionContent className="px-6 pb-4 text-gray-400">
                  {/* 1. Renderiza el párrafo de introducción */}
                  <p className="mb-3 leading-relaxed">
                    {item.answer}
                  </p>

                  {/* 2. Si existen 'points', renderiza la lista con puntitos */}
                  {item.points && (
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
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