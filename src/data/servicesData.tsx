import React from 'react';
import { Activity, Lock, Zap, Compass, LineChart, Shield } from 'lucide-react';

export const services = [
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Consultoría",
    description: "Diagnóstico y hoja de ruta para alinear tus equipos y eliminar silos operativos."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "RevOps como Servicio",
    description: "Operamos y optimizamos tu infraestructura de ingresos como tu equipo externo dedicado."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Implementación CRM",
    description: "Despliegue técnico a medida en HubSpot/Salesforce enfocado en la adopción del usuario."
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Data Quality",
    description: "Higiene y enriquecimiento de datos para garantizar decisiones basadas en información real."
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Capacitaciones",
    description: "Entrenamos a tu equipo para dominar procesos y herramientas, maximizando la adopción."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Servicio de Mantenimiento",
    description: "Soporte continuo y auditorías para prevenir deuda técnica y asegurar la escalabilidad."
  }
];