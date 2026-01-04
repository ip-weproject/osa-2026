import { useState, useEffect, useRef } from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';
import Mision from "../assets/Mision.svg";
import Filo from "../assets/Filo.svg";
import Team from "../assets/Team.svg";

// --- COMPONENTE AUXILIAR (Sin cambios) ---
const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const totalFrames = (duration / 1000) * 60;
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
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{prefix}{count}{suffix}</span>;
};

const AboutUs = () => {
  const stats = [
    { value: 5, prefix: "+", suffix: "", label: "Años de Experiencia" },
    { value: 30, prefix: "+", suffix: "", label: "Proyectos RevOps" },
    { value: 100, prefix: "", suffix: "%", label: "Enfoque en Datos" },
    { value: 24, prefix: "", suffix: "/7", label: "Soporte Dedicado" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-osa-black to-[#12141C] relative overflow-hidden">
      
 {/* Elementos decorativos de fondo */}
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
  
  {/* CORRECCIÓN: Eliminé 'top-1/4' para que '-bottom-10' funcione */}
  <div className="absolute left-40 bottom-[18rem] w-72 h-72 bg-osa-cian/10 rounded-full filter blur-3xl"></div>
  
  <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-osa-blue/10 rounded-full filter blur-3xl"></div>
</div>

      <div className="container mx-auto md:px-10 lg:px-20 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 text-gradient">
            Más que consultores, somos tus <span className="text-gradient">Aliados Estratégicos</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            En OSA, entendemos que el crecimiento no es cuestión de suerte, sino de diseño. 
            Nacimos para cerrar la brecha entre Marketing, Ventas y Servicio.
          </p>
        </div>

        {/* --- BENTO GRID CON BORDES ADAPTADOS --- */}
        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-2 mb-16">
          
          {/* CARD 1: NUESTRA MISIÓN (Izquierda) */}
          <div className="relative lg:row-span-2 group ">
            {/* 1. Fondo (Sigue la forma del borde) */}
            <div className="absolute inset-px bg-white/5 backdrop-blur-sm rounded-3xl lg:rounded-l-[40px] lg:rounded-r-2xl" />
            
            {/* 2. Contenido (Clip interno) */}
            <div className="relative flex h-full flex-col overflow-hidden rounded-5xl lg:rounded-l-[40px] lg:rounded-r-2xl ">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0 ">
                <p className="mt-2 text-lg tracking-tight text-white max-lg:text-center">
                  Nuestra Misión
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Transformar la complejidad de los datos en estrategias de ingresos claras y ejecutables.
                </p>
              </div>
                  {/* 2. CAPA VISUAL (SVG): */}
                    <div className="absolute inset-0 pointer-events-none">
                      <img
                        src={Mision}
                        alt="Mision-svg"
                        // CLASES CLAVE:
                        // absolute bottom-0 right-0: La ancla a la esquina inferior derecha.
                        // w-[88rem]: Define el tamaño gigante que quieres.
                        // max-w-none: ¡ESTA ES LA SOLUCIÓN! Permite que crezca más allá del contenedor.
                        // translate-y-10: La mueve un poco hacia abajo para cortarla, si es lo que buscas.
                        className="absolute bottom-0 -right-[4rem] w-[32rem] max-w-none translate-y-32"
                      />
                    </div>
            </div>
                {/* <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-white/10 bg-osa-black outline outline-white/5">
                  <div className="flex justify-center items-center h-full bg-gradient-to-b from-osa-cian/10 to-transparent">
                      <Target className="w-36 h-36 text-osa-cian/80 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                  </div>
                </div> */}

            {/* 3. BORDE FINO (Sin Hover) */}
            {/* lg:rounded-l-[40px] hace curva externa grande */}
            {/* lg:rounded-r-2xl hace curva interna pequeña (unificación) */}
            <div className="pointer-events-none absolute inset-px shadow-sm ring-1 ring-white/10 rounded-3xl lg:rounded-l-[40px] lg:rounded-r-2xl" />
          </div>

          {/* CARD 2: NUESTRA FILOSOFÍA (Arriba Derecha) */}
          <div className="relative lg:col-span-2 group">
            <div className="absolute inset-px bg-white/5 backdrop-blur-sm rounded-3xl lg:rounded-tr-[40px] lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-br-2xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl lg:rounded-tr-[40px] lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-br-2xl">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="max-w-md">
                   <p className="mt-2 text-lg tracking-tight text-white max-lg:text-center">
                    Nuestra Filosofía
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-400 max-lg:text-center">
                    La tecnología debe trabajar para el equipo comercial, no al revés. Eliminamos la fricción operativa.
                  </p>
                </div>
                <div className="flex items-center justify-center p-4  self-center sm:self-start">
                  <img
                  src={Filo}
                  alt="Filo-svg"
                  // CLASES CLAVE:
                  // absolute: Para moverla libremente dentro del relativo.
                  // w-64: Cambia este valor para el TAMAÑO (ej: w-48, w-80, w-[300px]).
                  // -bottom-10: La empuja hacia ABAJO fuera del contenedor. Ajusta el número.
                  // -right-10: La empuja hacia la DERECHA fuera del contenedor. Ajusta el número.
                  className="absolute -bottom-[18rem] rotate-[95deg] right-0 w-[32rem] brightness-150 contrast-125"
                />
                </div>
              </div>
            </div>

            {/* BORDE FINO - Curva externa en Top-Right, internas rectas */}
            <div className="pointer-events-none absolute inset-px shadow-sm ring-1 ring-white/10 rounded-3xl lg:rounded-tr-[40px] lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-br-2xl" />
          </div>

          {/* CARD 3: EL EQUIPO (Abajo Derecha) */}
          <div className="relative overflow-hidden rounded-3xl lg:col-span-2 group">
            <div className="absolute inset-px bg-white/5 backdrop-blur-sm rounded-3xl lg:rounded-br-[40px] lg:rounded-tr-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl" />
            
            <div className="flex flex-1 items-end justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                 {/* <div className="w-full h-1 bg-gradient-to-r from-transparent via-osa-blue/50 to-transparent rounded-full opacity-50"></div> */}
            </div>

            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl lg:rounded-br-[40px] lg:rounded-tr-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 flex flex-col sm:flex-row-reverse justify-between items-start gap-4">
      <div className="flex items-center justify-center p-4  self-center sm:self-start">
                  <img
                  src={Team}
                  alt="Team-svg"
                  // CLASES CLAVE:
                  // absolute: Para moverla libremente dentro del relativo.
                  // w-64: Cambia este valor para el TAMAÑO (ej: w-48, w-80, w-[300px]).
                  // -bottom-10: La empuja hacia ABAJO fuera del contenedor. Ajusta el número.
                  // -right-10: La empuja hacia la DERECHA fuera del contenedor. Ajusta el número.
                  className="absolute -bottom-[3rem]  right-9 w-[18rem] "
                />
                </div>
                <div className="max-w-xl">
                  <p className="mt-2 text-lg tracking-tight text-white max-lg:text-center">
                    El Equipo
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-400 max-lg:text-center">
                    Somos una alianza de arquitectos de datos, <br/>estrategas de ventas y expertos en automatización.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[60px] w-full grow overflow-hidden">
                 <div className="absolute -bottom-6 left-10 flex gap-4 opacity-20">
                    <div className="w-20 h-20 rounded-full border border-white/30"></div>
                    <div className="w-20 h-20 rounded-full border border-white/30"></div>
                    <div className="w-20 h-20 rounded-full border border-white/30"></div>
                 </div>
              </div>
            </div>

            {/* BORDE FINO - Curva externa en Bottom-Right, internas rectas */}
            <div className="pointer-events-none absolute inset-px shadow-sm ring-1 ring-white/10 rounded-3xl lg:rounded-br-[40px] lg:rounded-tr-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl" />
          </div>

        </div>

        {/* Sección de Estadísticas */}
        <div className="border-t border-white/10 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-5xl text-gradient mb-1 tabular-nums">
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