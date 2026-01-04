import { CheckCircle2, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface FormSuccessProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormSuccess = ({ isOpen, onClose }: FormSuccessProps) => {
  if (!isOpen) return null;

  return (
    // Overlay (Fondo oscuro con blur)
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose} // Cierra si clics afuera
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-md transform transition-all duration-300 scale-100">
        <div className="bg-[#0F1119] border border-white/10 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden">
          
          {/* Blobs decorativos internos */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-osa-cian/10 rounded-full filter blur-3xl -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-osa-blue/10 rounded-full filter blur-3xl -ml-10 -mb-10"></div>

          {/* Botón Cerrar (X) */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          {/* Icono */}
          <div className="flex justify-center mb-6 relative z-10">
            <div className="h-20 w-20 bg-osa-cian/10 rounded-full flex items-center justify-center border border-osa-cian/20 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <CheckCircle2 className="h-10 w-10 text-osa-cian" />
            </div>
          </div>

          {/* Contenido */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
            ¡Mensaje <span className="text-gradient">Recibido!</span>
          </h2>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-8 relative z-10">
            Tu solicitud de diagnóstico RevOps ha llegado a nuestro sistema. Nuestro equipo analizará tu caso y te contactará en breve.
          </p>

          <Button 
            variant="glow" 
            size="default" 
            onClick={onClose}
            className="w-full"
          >
            Entendido, gracias
          </Button>

        </div>
      </div>
    </div>
  );
};

export default FormSuccess;