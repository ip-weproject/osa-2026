import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const ContactForm = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Estado para manejar el proceso de envío (idle | loading | success)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulamos una petición al backend (espera 2 segundos)
    setTimeout(() => {
      setStatus('success');
      // Aquí iría tu lógica real de envío a API o servicio de email
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  // Clases compartidas para los inputs para mantener consistencia y limpieza
  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-crypto-cian/50 focus:border-crypto-cian transition-all duration-300 backdrop-blur-sm";

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-crypto-blue to-[#12141C] relative overflow-hidden">
      
      {/* Background Elements (Manteniendo los blobs originales) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-crypto-cian/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-crypto-light-cian/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Hablemos de tu <span className="text-gradient-bc">próximo nivel</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Déjanos tus datos y analicemos cómo optimizar tus operaciones de Revenue.
            </p>
          </div>

          {/* Lógica condicional: Mostrar Formulario o Mensaje de Éxito */}
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 animate-fade-in space-y-4 bg-white/5 rounded-xl border border-white/5">
              <div className="h-16 w-16 bg-osa-blue/20 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="h-8 w-8 text-osa-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado!</h3>
              <p className="text-gray-400">Nos pondremos en contacto contigo en breve.</p>
              <Button 
                variant="ghost" 
                className="text-crypto-cian hover:text-white mt-4"
                onClick={() => setStatus('idle')}
              >
                Enviar otro mensaje
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={inputClasses}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email Corporativo</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nombre@empresa.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">¿En qué podemos ayudarte?</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos brevemente sobre tus desafíos actuales..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-crypto-cian hover:bg-crypto-dark-cian text-white py-6 text-lg transition-all duration-300 shadow-lg shadow-crypto-cian/20"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Agendar Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>

              <p className="text-center text-sm text-gray-500 animate-fade-in pt-2" style={{ animationDelay: '0.6s' }}>
                Tus datos están seguros. Sin spam, prometido.
              </p>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
