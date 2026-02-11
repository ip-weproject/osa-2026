import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      /* - border-gray-200: El borde gris para el modo Light que te gustó.
         - dark:border-white/15: La opacidad exacta que usa tu botón de contacto.
         - dark:bg-transparent: Aseguramos que el fondo no tenga color para que el borde no resalte de más.
      */
      className="rounded-full w-10 h-10 transition-all duration-300 border border-gray-200 dark:border-white/15 bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-white/10"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-400 transition-all hover:rotate-45" />
      ) : (
        <Moon className="h-5 w-5 text-indigo-500 transition-all hover:-rotate-12" />
      )}
    </Button>
  );
}