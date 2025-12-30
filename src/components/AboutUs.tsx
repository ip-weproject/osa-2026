import { useState, useEffect, useRef } from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

// --- COMPONENTE AUXILIAR PARA LA ANIMACIÓN ---
const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // Para que solo anime una vez

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Lógica del conteo
          let start = 0;
          const totalFrames = (duration / 1000) * 60; // 60fps
          const increment = end / totalFrames;
          
          let currentCount = 0;
          const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(currentCount));
            }
          }, 1000 / 60);
          
          // Limpieza si el componente se desmonta mientras anima
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 } // Se activa cuando el 50% del elemento es visible
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={countRef}>
      {prefix}{count}{suffix}
    </span>
  );
};
// ----------------------------------------------


const AboutUs = () => {
  
  // Datos estáticos para las tarjetas de valores
  const values = [
    {
      icon: <Target className="h-8 w-8 text-osa-cian" />,
      title: "Nuestra Misión",
      description: "Transformar la complejidad de los datos en estrategias de ingresos claras y ejecutables. No solo arreglamos CRMs; construimos motores de crecimiento."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-osa-cian" />,
      title: "Nuestra Filosofía",
      description: "Creemos que la tecnología debe trabajar para el equipo comercial, no al revés. Eliminamos la fricción operativa para que el talento humano brille."
    },
    {
      icon: <Users className="h-8 w-8 text-osa-cian" />,
      title: "El Equipo",
      description: "Somos una alianza de arquitectos de datos, estrategas de ventas y expertos en automatización unidos por una obsesión: el Revenue Operations."
    }
  ];

  // Datos para las estadísticas (adaptados para la animación)
  const stats = [
    { value: 5, prefix: "+", suffix: "", label: "Años de Experiencia" },
    { value: 50, prefix: "+", suffix: "", label: "Proyectos RevOps" },
    { value: 100, prefix: "", suffix: "%", label: "Enfoque en Datos" },
    { value: 24, prefix: "", suffix: "/7", label: "Soporte Dedicado" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-osa-black to-[#12141C] relative overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-osa-cian/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-osa-purple/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-20 relative z-10">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Más que consultores, somos tus <span className="text-gradient">Aliados Estratégicos</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            En OSA, entendemos que el crecimiento no es cuestión de suerte, sino de diseño. 
            Nacimos para cerrar la brecha entre Marketing, Ventas y Servicio, creando una única fuente de verdad para tu negocio.
          </p>
        </div>

        {/* Grid de Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 p-3 bg-white/5 rounded-lg inline-block group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-osa-cian transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sección de Estadísticas con Animación */}
        <div className="border-t border-white/10 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1 tabular-nums">
                  {/* Aquí usamos el componente animado */}
                  <AnimatedCounter 
                    end={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                  />
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;