import { useState, useEffect } from "react";
import { ArrowUp, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button"; // <--- Importamos tu componente

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          /* 1. variant="glow": Aplica tus estilos exactos (bg-white/10, border-white/15, shadow al hover).
             2. size="icon": Aplica tus dimensiones base (h-10 w-10).
             3. className: 
                - 'fixed bottom-8 right-8 z-50': Posición fija.
                - 'rounded-full': Para asegurar que sea un círculo perfecto.
                - 'backdrop-blur-sm': Opcional, para efecto vidrio extra (puedes quitarlo si no te gusta).
          */
          variant="glow" 
          size="icon"
          className="fixed bottom-8 right-8 z-50 rounded-full h-12 w-12 backdrop-blur-sm animate-fade-in"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;