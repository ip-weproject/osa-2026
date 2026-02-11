import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button"; 
import { ChevronRight, Loader2 } from 'lucide-react';
import FormSuccess from './FormSuccess';
import { useLanguage } from '../context/LanguageContext';

const ContactForm = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState('idle');
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = () => {
    setStatus('loading');
  };

  const handleIframeLoad = () => {
    if (status === 'loading') {
      setStatus('idle');
      setShowSuccess(true);
      if (formRef.current) formRef.current.reset();
    }
  };

  // --- INPUTS: SIEMPRE OSCUROS ---
  // Mantenemos la configuración que te gustó: fondo casi negro y texto blanco.
  const inputClasses = `
    w-full rounded-xl px-4 py-3 font-medium transition-all duration-300
    
    /* Fondo oscuro y texto blanco SIEMPRE (para Light y Dark) */
    bg-[#0a0a0a] text-white border-white/10 placeholder:text-gray-500
    dark:bg-[#0a0a0a] dark:text-white dark:border-white/10 dark:placeholder:text-gray-500
    
    border focus:outline-none 
    focus:ring-2 focus:ring-osa-cian/50 
    focus:border-osa-cian 
    
    /* Autocomplete Fix (Fondo negro forzado) */
    [&:-webkit-autofill]:shadow-[0_0_0_1000px_#0a0a0a_inset] 
    [&:-webkit-autofill]:[-webkit-text-fill-color:#ffffff_!important]
    [&:-webkit-autofill]:transition-[background-color] 
    [&:-webkit-autofill]:duration-[500000s]
    
    caret-white
    [&_not(:placeholder-shown):valid]:border-osa-cian
  `;

  // Labels siempre claros
  const labelClasses = "text-sm font-semibold text-gray-300 ml-1 mb-2 block transition-colors";

  return (
    <section id="contact" className="py-24 bg-background transition-colors duration-300">
      
      <FormSuccess isOpen={showSuccess} onClose={() => setShowSuccess(false)} />

      <iframe name="hidden_iframe" id="hidden_iframe" className="hidden" onLoad={handleIframeLoad}></iframe>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-32 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl text-gradient mb-4">
            {t.contact.title} <span className="text-gradient">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto transition-colors">
            {t.contact.subtitle}
          </p>
        </div>

        {/* CONTENEDOR ANTRACITA / DARK GLASS */}
        <div className="
          max-w-5xl mx-auto 
          bg-[#1a1c23] border border-white/5 
          dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 
          rounded-[32px] p-8 md:p-12 shadow-2xl transition-all duration-300
        ">
          
          <form 
            ref={formRef}
            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dam00001W5cLV" 
            method="POST" 
            target="hidden_iframe"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="oid" value="00Dam00001W5cLV" />
            <input type="hidden" name="retURL" value="https://www.osarevops.com"/>
            <input type="hidden" name="lead_source" value="Web" />

            {/* Fila 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first_name" className={labelClasses}>{t.contact.labels.firstName}</label>
                <input 
                  id="first_name" 
                  name="first_name" 
                  maxLength={40} 
                  type="text" 
                  required 
                  placeholder={t.contact.placeholders.firstName}
                  className={inputClasses} 
                />
              </div>
              <div>
                <label htmlFor="last_name" className={labelClasses}>{t.contact.labels.lastName}</label>
                <input 
                  id="last_name" 
                  name="last_name" 
                  maxLength={80} 
                  type="text" 
                  required 
                  placeholder={t.contact.placeholders.lastName}
                  className={inputClasses} 
                />
              </div>
            </div>

            {/* Fila 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className={labelClasses}>{t.contact.labels.email}</label>
                <input 
                  id="email" 
                  name="email" 
                  maxLength={80} 
                  type="email" 
                  required 
                  placeholder={t.contact.placeholders.email}
                  className={inputClasses} 
                />
              </div>
              <div>
                <label htmlFor="company" className={labelClasses}>{t.contact.labels.company}</label>
                <input 
                  id="company" 
                  name="company" 
                  maxLength={40} 
                  type="text" 
                  required 
                  placeholder={t.contact.placeholders.company}
                  className={inputClasses} 
                />
              </div>
            </div>

            {/* Fila 3 (Textarea) */}
            <div className="w-full">
              <label htmlFor="description" className={labelClasses}>{t.contact.labels.message}</label>
              <textarea 
                id="description" 
                name="description" 
                rows={4} 
                required 
                placeholder={t.contact.placeholders.message}
                className={`${inputClasses} resize-none h-32`} 
              />
            </div>

            {/* AQUÍ ESTÁ EL TRUCO: Agregamos la clase "dark" al contenedor del botón.
              Esto fuerza al componente Button a usar sus estilos dark: (fondo blanco/cian, texto negro, etc.)
              independientemente de que el resto de la página sea Light.
            */}
            <div className="pt-2 flex justify-center w-full dark">
              <Button 
                variant="gform" 
                size="nav" 
                type="submit" 
                className="w-full md:w-auto px-4" 
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t.contact.button.sending}
                  </>
                ) : (
                  <>
                    {t.contact.button.default}
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;