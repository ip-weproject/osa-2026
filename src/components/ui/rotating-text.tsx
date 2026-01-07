import { useState, useEffect } from 'react';

export const RotatingText = () => {
  const words = [
    "Revenue Operations",
    "Sales Alignment",
    "Marketing Automation",
    "Data Intelligence"
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Mantiene el texto visible 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex flex-col h-[calc(theme(fontSize.4xl)*1.2)] md:h-[calc(theme(fontSize.5xl)*1.2)] lg:h-[calc(theme(fontSize.6xl)*1.2)] overflow-hidden align-top">
      
      <style>{`
        @keyframes slideUpSmooth {
          0% { 
            transform: translateY(110%); 
            opacity: 0; 
            filter: blur(5px); /* Añade un pequeño desenfoque inicial para suavizar más */
          }
          100% { 
            transform: translateY(0); 
            opacity: 1; 
            filter: blur(0px);
          }
        }
        
        .animate-smooth-entry {
          /* Explicación de los cambios:
             - 1.2s: Duración de la subida (antes era 0.5s). Esto lo hace mucho más lento.
             - cubic-bezier(0.2, 0.8, 0.2, 1): Es una curva muy suave "Soft Ease-Out".
          */
          animation: slideUpSmooth 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
      
      <span 
        key={index} 
        className="text-gradient-cian pb-2 block animate-smooth-entry"
      >
        {words[index]}
      </span>
    </span>
  );
};