import React, { createContext, useState, useContext } from 'react';

const translations = {
  es: {
    navbar: {
      home: "Inicio",
      challenges: "Desafíos",
      about: "Nosotros",
      services: "Servicios",
      revops: "Revops",
      contact: "Contacto",
    },
    hero: {
      expert: "Expertos en",
      rotating: ["Automatización", "CRM", "Estrategia"], // Array para el texto rotativo
      description: "Convertimos tu CRM en un motor de ventas: procesos claros, automatización y datos para un pipeline medible e ingresos predecibles.",
      buttonTalk: "Hablemos",
      buttonSolutions: "Soluciones",
      partners: "Nuestros aliados tecnológicos:",
    },
    faq: {
      title: "¿Te suenan estos desafíos?",
      subtitle: "Si te ves reflejado en alguno de estos puntos, tu problema no es de esfuerzo: es de operación.",
      accordion: [
        {
          question: "01. Crecimiento impredecible",
          answer: "Si tus proyecciones de ventas parecen una montaña rusa y te cuesta responder '¿cuánto vamos a cerrar este mes?', tienes un problema de previsibilidad.",
          points: [
            "Falta de confianza en los datos del pipeline.",
            "Ingresos que fluctúan drásticamente.",
            "Incapacidad para proyectar crecimiento."
          ]
        },
        {
          question: "02. Puntos de fuga ciegos",
          answer: "Estás generando leads, pero no se convierten en clientes. Identificar y sellar estas fugas es la forma más rápida de aumentar ingresos.",
          points: [
            "Leads calificados que se enfrían.",
            "Desconexión entre Marketing y Ventas.",
            "Tasas de conversión bajas."
          ]
        },
        {
          question: "03. Bajo Rendimiento",
          answer: "Tu equipo comercial trabaja muchas horas, pero los resultados no acompañan el esfuerzo debido a procesos manuales.",
          points: [
            "Demasiada carga manual en el CRM.",
            "Falta de automatización.",
            "Procesos lentos y burocráticos."
          ]
        },
        {
          question: "04. Datos en el caos",
          answer: "Tienes herramientas por todas partes, pero no se hablan entre sí, creando silos de información.",
          points: [
            "Informes contradictorios.",
            "Datos sucios o incompletos.",
            "Imposibilidad de medir el ROI."
          ]
        },
        {
          question: "05. Retención débil",
          answer: "Conseguir un cliente nuevo cuesta más que mantener uno existente. Necesitas procesos de Customer Success proactivos.",
          points: [
            "Alta tasa de cancelación (Churn).",
            "Pocas oportunidades de Upsell.",
            "Onboarding deficiente."
          ]
        },
        {
          question: "06. Capacitación Insuficiente",
          answer: "Si cada vendedor vende a su manera, falta un Playbook de Ventas y estandarización.",
          points: [
            "Ramp-up excesivo para nuevos.",
            "Falta de material unificado.",
            "Resultados dependientes del talento individual."
          ]
        }
      ]
    },
    services: {
  title: "Potenciamos tu",
  titleHighlight: "Motor de Ingresos",
  subtitle: "Infraestructura diseñada para la escalabilidad. Cada pieza de tu operación, optimizada y conectada.",
  cards: {
    audit: {
      title: "Auditoría & Datos",
      desc: "Diagnóstico de punta a punta y visibilidad del pipeline. Convertimos datos dispersos en dashboards y métricas accionables para que puedas decidir rápido."
    },
    crm: {
      title: "Implementación CRM",
      desc: "Implementación y optimización del CRM para que tu equipo venda con orden. Flujos simples y una base lista para escalar."
    },
    automation: {
      title: "Automatización",
      desc: "Eliminamos tareas repetitivas y errores manuales. Aceleramos el ciclo comercial."
    },
    integrations: {
      title: "Integraciones",
      desc: "Conecta tu stack tecnológico en un ecosistema unificado."
    },
    scalability: {
      title: "Escalabilidad",
      desc: "Arquitectura y gobernanza para un crecimiento sostenido. Estandarización, documentación y mejoras continuas."
    }
  }
},
    about: {
      title: "Más que consultores, somos tus Aliados Estratégicos",
      description: "En OSA creemos que el crecimiento no es suerte: son operaciones bien diseñadas. Alineamos equipos, procesos y tecnología para cerrar la brecha entre Marketing, Ventas y Servicio.",
      
      missionTitle: "Nuestra Misión",
      missionText: "Alinear equipos, procesos y tecnología con transparencia, para que tu operación comercial sea clara, ejecutable y genere impacto real.",
      
      philosophyTitle: "Nuestra Filosofía",
      philosophyText: "La tecnología debe simplificar el trabajo del equipo, no complicarlo. Diseñamos procesos que se sostienen en el tiempo, eliminamos la fricción operativa.",
      
      teamTitle: "El Equipo",
      teamText: "Somos una alianza de especialistas en RevOps:",
      teamExtra: "estrategia comercial, arquitectura de CRM y analítica.",

      // AGREGADO: Textos para las estadísticas
      stats: {
        experience: "Años de Experiencia",
        projects: "Proyectos RevOps",
        dataFocus: "Enfoque en Datos",
        support: "Soporte Dedicado"
      }
    },
    revops: {
  title: "La Ciencia detrás de",
  titleHighlight: "Tus Ingresos",
  subtitle: "RevOps no es solo un departamento, es una mentalidad. Eliminamos la fricción operativa para que tu equipo se concentre en cerrar negocios.",
  button: "Hablemos",
  steps: [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Analizamos tu stack tecnológico, procesos actuales y puntos de dolor. Entendemos dónde se pierde dinero hoy."
    },
    {
      number: "02",
      title: "Arquitectura",
      description: "Diseñamos la solución ideal. Mapeamos el Customer Journey y definimos cómo deben fluir los datos entre Marketing, Ventas y CS."
    },
    {
      number: "03",
      title: "Implementación",
      description: "Ejecutamos la configuración técnica, migraciones y automatizaciones. Construimos la máquina de ventas."
    },
  ]
},
contact: {
  title: "Hablemos de tu",
  titleHighlight: "Operación",
  subtitle: "Completa el formulario para agendar un diagnóstico RevOps.",
  labels: {
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email Corporativo",
    company: "Empresa",
    message: "¿Cómo podemos ayudarte?"
  },
  placeholders: {
    firstName: "Tu nombre",
    lastName: "Tu apellido",
    email: "nombre@empresa.com",
    company: "Nombre de tu organización",
    message: "Cuéntanos brevemente sobre tus desafíos actuales..."
  },
  button: {
    default: "Enviar Consulta",
    sending: "Enviando..."
  }
},
footer: {
  email: "E-mail",
  phone: "Teléfono",
  address: "Dirección",
  location: "Buenos Aires, Argentina",
  rights: "Todos los derechos reservados.",
  partnersText: "Partners orgullosos de las principales plataformas CRM del mundo."
},
  },
  en: {
    navbar: {
      home: "Home",
      challenges: "Challenges",
      about: "About Us",
      services: "Services",
      revops: "Revops",
      contact: "Contact",
    },
    hero: {
      expert: "Experts in",
      rotating: ["Automation", "CRM", "Strategy"],
      description: "We turn your CRM into a sales engine: clear processes, automation, and data for a measurable pipeline and predictable revenue.",
      buttonTalk: "Let's Talk",
      buttonSolutions: "Solutions",
      partners: "Our technology partners:",
    },
    faq: {
      title: "Do these challenges sound familiar?",
      subtitle: "If you see yourself reflected in any of these points, your problem is not effort: it's operation.",
      accordion: [
        {
          question: "01. Unpredictable Growth",
          answer: "If your sales projections look like a roller coaster and you struggle to answer 'how much will we close this month?', you have a predictability problem.",
          points: [
            "Lack of confidence in pipeline data.",
            "Drastically fluctuating revenue.",
            "Inability to project growth."
          ]
        },
        {
          question: "02. Blind Leakage Points",
          answer: "You are generating leads, but they don't convert into customers. Identifying and sealing these leaks is the fastest way to increase revenue.",
          points: [
            "Qualified leads going cold.",
            "Disconnect between Marketing and Sales.",
            "Low conversion rates."
          ]
        },
        {
          question: "03. Low Performance",
          answer: "Your sales team works long hours, but results don't match the effort due to manual processes.",
          points: [
            "Too much manual load in CRM.",
            "Lack of automation.",
            "Slow and bureaucratic processes."
          ]
        },
        {
          question: "04. Data Chaos",
          answer: "You have tools everywhere, but they don't talk to each other, creating information silos.",
          points: [
            "Contradictory reports.",
            "Dirty or incomplete data.",
            "Inability to measure ROI."
          ]
        },
        {
          question: "05. Weak Retention",
          answer: "Acquiring a new customer costs more than keeping an existing one. You need proactive Customer Success processes.",
          points: [
            "High churn rate.",
            "Few upsell opportunities.",
            "Poor onboarding."
          ]
        },
        {
          question: "06. Insufficient Training",
          answer: "If every salesperson sells their own way, you lack a Sales Playbook and standardization.",
          points: [
            "Excessive ramp-up for new hires.",
            "Lack of unified material.",
            "Results dependent on individual talent."
          ]
        }
      ]
    },
    about: {
      title: "More than consultants, we are your Strategic Allies",
      description: "At OSA we believe growth is not luck: it is well-designed operations. We align teams, processes, and technology to close the gap between Marketing, Sales, and Service.",
      
      missionTitle: "Our Mission",
      missionText: "Align teams, processes, and technology with transparency so your commercial operation is clear, executable, and generates real impact.",
      
      philosophyTitle: "Our Philosophy",
      philosophyText: "Technology should simplify the team's work, not complicate it. We design processes that scale over time and remove operational friction.",
      
      teamTitle: "The Team",
      teamText: "We are an alliance of RevOps specialists:",
      teamExtra: "commercial strategy, CRM architecture, and analytics.",

      // AGREGADO: Textos para las estadísticas en Inglés
      stats: {
        experience: "Years of Experience",
        projects: "RevOps Projects",
        dataFocus: "Data Focused",
        support: "Dedicated Support"
      }
    },
    services: {
  title: "We Power Your",
  titleHighlight: "Revenue Engine",
  subtitle: "Infrastructure designed for scalability. Every piece of your operation, optimized and connected.",
  cards: {
    audit: {
      title: "Audit & Data",
      desc: "End-to-end diagnosis and pipeline visibility. We turn scattered data into actionable dashboards and metrics for fast decision making."
    },
    crm: {
      title: "CRM Implementation",
      desc: "CRM implementation and optimization so your team sells with order. Simple flows and a foundation ready to scale."
    },
    automation: {
      title: "Automation",
      desc: "We eliminate repetitive tasks and manual errors. Accelerating your sales cycle."
    },
    integrations: {
      title: "Integrations",
      desc: "Connect your tech stack into a unified ecosystem."
    },
    scalability: {
      title: "Scalability",
      desc: "Architecture and governance for sustained growth. Standardization, documentation, and continuous improvement."
    }
  }
},
revops: {
  title: "The Science Behind",
  titleHighlight: "Your Revenue",
  subtitle: "RevOps is not just a department, it's a mindset. We remove operational friction so your team can focus on closing deals.",
  button: "Let's Talk",
  steps: [
    {
      number: "01",
      title: "Diagnosis",
      description: "We analyze your tech stack, current processes, and pain points. We understand where money is being lost today."
    },
    {
      number: "02",
      title: "Architecture",
      description: "We design the ideal solution. We map the Customer Journey and define how data should flow between Marketing, Sales, and CS."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute the technical configuration, migrations, and automations. We build the sales machine."
    },
  ]
},
contact: {
  title: "Let's Talk About Your",
  titleHighlight: "Operation",
  subtitle: "Fill out the form to schedule a RevOps diagnosis.",
  labels: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Corporate Email",
    company: "Company",
    message: "How can we help you?"
  },
  placeholders: {
    firstName: "Your first name",
    lastName: "Your last name",
    email: "name@company.com",
    company: "Your organization's name",
    message: "Briefly tell us about your current challenges..."
  },
  button: {
    default: "Send Inquiry",
    sending: "Sending..."
  }
},
footer: {
  email: "E-mail",
  phone: "Phone",
  address: "Address",
  location: "Buenos Aires, Argentina",
  rights: "All rights reserved.",
  partnersText: "Proud partners of leading CRM platforms worldwide."
},
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);