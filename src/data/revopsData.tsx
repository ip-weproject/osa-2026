import React from "react";
// Actualicé los íconos para que coincidan con los pasos: 
// MessageSquare (Contacto), FileSearch (Relevamiento/Desarrollo), Rocket (Puesta en marcha)
import { MessageSquare, FileSearch, Rocket } from "lucide-react"; 

export const steps = [
  {
    number: "01.",
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Escríbenos",
    description: "Agenda una llamada inicial. Cuéntanos tus desafíos operativos para entender cómo potenciar tu estrategia de ingresos."
  },
  {
    number: "02.",
    icon: <FileSearch className="h-6 w-6" />,
    title: "Relevamiento y Desarrollo",
    description: "Auditamos tus procesos y configuramos tu CRM a medida, creando una arquitectura de datos que elimina la fricción manual."
  },
  {
    number: "03.",
    icon: <Rocket className="h-6 w-6" />,
    title: "CRM en Marcha",
    description: "Lanzamiento y adopción. Tu equipo comienza a operar con una fuente única de verdad, dashboards claros y procesos unificados."
  }
];