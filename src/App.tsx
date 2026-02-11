import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./context/LanguageContext"; 
import { ThemeProvider } from "./context/ThemeContext";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    
    {/* 2. ENVOLVER CON THEME PROVIDER (Puede ir antes o después de Language, pero debe envolver el contenido) */}
    <ThemeProvider>
        
      <LanguageProvider>
        
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>

      </LanguageProvider>

    </ThemeProvider>

  </QueryClientProvider>
);

export default App;