import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button"; 
import { ChevronRight, Loader2 } from 'lucide-react';
import FormSuccess from './FormSuccess';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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

const inputClasses = `
    w-full rounded-xl px-4 py-3 text-white placeholder:text-gray-500 font-medium
    
    /* ESTADO BASE */
    bg-[#11131A] 
    border border-white/10 
    transition-all duration-300 
    
    /* FOCUS */
    focus:outline-none 
    focus:ring-2 focus:ring-osa-cian/50 
    focus:border-osa-cian 
    
    /* --- HACK AUTOFILL DEFINITIVO --- */
    
    /* 1. Fondo: Sombra interna (Mantenemos esto igual) */
    [&:-webkit-autofill]:shadow-[0_0_0_1000px_#11131A_inset] 
    
    /* 2. Texto: APLASTANTE */
    /* Usamos !important en todos los estados posibles para que no haya "glitch" */
    [&:-webkit-autofill]:[-webkit-text-fill-color:#ffffff_!important]
    [&:-webkit-autofill:hover]:[-webkit-text-fill-color:#ffffff_!important]
    [&:-webkit-autofill:focus]:[-webkit-text-fill-color:#ffffff_!important]
    [&:-webkit-autofill:active]:[-webkit-text-fill-color:#ffffff_!important]
    
    /* 3. TRANSICIÓN (AQUÍ ESTABA EL ERROR) */
    /* Solo retrasamos el cambio de FONDO. */
    /* Al quitar 'color' de aquí, permitimos que nuestro '-webkit-text-fill-color' se aplique de inmediato */
    [&:-webkit-autofill]:transition-[background-color] 
    [&:-webkit-autofill]:duration-[500000s]
    
    /* 4. Caret blanco */
    [&:-webkit-autofill]:caret-white
    
    /* --- VALIDACIÓN --- */
    [&:not(:placeholder-shown):valid]:border-osa-cian
  `;

  const labelClasses = "text-sm font-semibold text-gray-300 ml-1 mb-2 block";

  return (
    <section id="contact" className="py-24 md:px-10 lg:px-20 bg-gradient-to-b from-osa-black to-[#12141C] relative overflow-hidden">
      
      <FormSuccess isOpen={showSuccess} onClose={() => setShowSuccess(false)} />

      <iframe name="hidden_iframe" id="hidden_iframe" className="hidden" onLoad={handleIframeLoad}></iframe>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-osa-cian/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-osa-blue/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl text-gradient mb-4">
             Hablemos de tu <span className="text-gradient">Operación</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
             Completa el formulario para agendar un diagnóstico RevOps.
          </p>
        </div>

        {/* CONTENEDOR PRINCIPAL DEL FORMULARIO */}
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl">
          
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
                <label htmlFor="first_name" className={labelClasses}>Nombre</label>
                <input id="first_name" name="first_name" maxLength={40} type="text" required placeholder="Tu nombre" className={inputClasses} />
              </div>
              <div>
                <label htmlFor="last_name" className={labelClasses}>Apellido</label>
                <input id="last_name" name="last_name" maxLength={80} type="text" required placeholder="Tu apellido" className={inputClasses} />
              </div>
            </div>

            {/* Fila 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className={labelClasses}>Email Corporativo</label>
                <input id="email" name="email" maxLength={80} type="email" required placeholder="nombre@empresa.com" className={inputClasses} />
              </div>
              <div>
                <label htmlFor="company" className={labelClasses}>Empresa</label>
                <input id="company" name="company" maxLength={40} type="text" required placeholder="Nombre de tu organización" className={inputClasses} />
              </div>
            </div>

            {/* Fila 3 (Textarea) */}
                <div className="w-full">
                  <label htmlFor="description" className={labelClasses}>¿Cómo podemos ayudarte?</label>
                  <textarea 
                    id="description" 
                    name="description" 
                    rows={4} 
                    required // <--- IMPORTANTE: Para que la validación funcione
                    placeholder="Cuéntanos brevemente sobre tus desafíos actuales..." 
                    className={`${inputClasses} resize-none h-32`} 
                  />
                </div>

            <div className="pt-2 flex justify-center w-full">
              <Button variant="glow" size="lg" type="submit" className="w-full md:w-auto px-12" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Consulta
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