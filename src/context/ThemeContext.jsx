import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 1. Leemos del localStorage o forzamos "dark" por defecto (ya que tu sitio nace oscuro)
  const [theme, setTheme] = useState(
    localStorage.getItem("vite-ui-theme") || "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // 2. Limpiamos clases previas y aplicamos la nueva
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // 3. Guardamos la elección para la próxima visita
    localStorage.setItem("vite-ui-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);