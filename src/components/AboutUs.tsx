import { useState, useEffect, useRef } from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';
import Mision from "../assets/Mision.png";
import Filo from "../assets/Filo.png";
import Team from "../assets/Team.png";

// --- COMPONENTE AUXILIAR ---
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
        {/* RESPONSIVE: Left negativo en móvil para que no tape, valor original en lg */}
        <div className="absolute -left-20 lg:left-[15rem] bottom-[15rem] w-72 h-72 bg-osa-cian/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-osa-blue/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-32 relative z-10">
        
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

        {/* --- BENTO GRID --- */}
        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-2 mb-16">
          
          {/* CARD 1: NUESTRA MISIÓN (Izquierda) */}
          {/* AGREGADO: min-h-[400px] solo para móvil para dar espacio a la imagen */}
          <div className="relative lg:row-span-2 group min-h-[400px] lg:min-h-0">
            <div className="absolute inset-px bg-white/5 backdrop-blur-sm rounded-3xl lg:rounded-l-[40px] lg:rounded-r-2xl" />
            
            <div className="relative flex h-full flex-col overflow-hidden rounded-5xl lg:rounded-l-[40px] lg:rounded-r-2xl ">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0 relative z-10">
                <p className="mt-2 text-lg tracking-tight text-white max-lg:text-center">
                  Nuestra Misión
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Transformar la complejidad de los datos en estrategias de ingresos claras y ejecutables.
                </p>
              </div>
              
                <div className="absolute inset-0 pointer-events-none">
                  <img
                    src={Mision}
                    alt="Mision-svg"
                    // === ARREGLO RESPONSIVE ===
                    // Mobile (Clases base): w-[20rem] -right-8 translate-y-12 (Más chica y controlada)
                    // Desktop (lg:): TUS VALORES ORIGINALES INTACTOS (w-[32rem], etc)
                    className="absolute bottom-0 max-w-none
                               w-[20rem] -right-8 translate-y-12
                               lg:w-[32rem] lg:-right-[4rem] lg:translate-y-32"
                  />
                </div>
            </div>

            <div className="pointer-events-none absolute inset-px shadow-sm ring-1 ring-white/10 rounded-3xl lg:rounded-l-[40px] lg:rounded-r-2xl" />
          </div>

          {/* CARD 2: NUESTRA FILOSOFÍA (Arriba Derecha) */}
          <div className="relative lg:col-span-2 group min-h-[350px] lg:min-h-0">
            <div className="absolute inset-px bg-white/5 backdrop-blur-sm rounded-3xl lg:rounded-tr-[40px] lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-br-2xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl lg:rounded-tr-[40px] lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-br-2xl">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 flex flex-col sm:flex-row justify-between items-start gap-4 relative z-10">
                <div className="max-w-md w-full">
                   <p className="mt-2 text-lg tracking-tight text-white max-lg:text-center">
                    Nuestra Filosofía
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-400 max-lg:text-center">
                    La tecnología debe trabajar para el equipo comercial, no al revés. Eliminamos la fricción operativa.
                  </p>
                </div>
                
                <div className="flex items-center justify-center p-4 self-center sm:self-start">
                  <img
                  src={Filo}
                  alt="Filo-svg"
                  // === ARREGLO RESPONSIVE ===
                  // Mobile: w-[18rem], pegada abajo y derecha (-bottom-8, -right-8)
                  // Desktop (lg:): TUS VALORES ORIGINALES (-bottom-[18rem], right-0)
                  // NOTA: 'right-0' en lg es clave para sobreescribir el '-right-8' de mobile
                  className="absolute max-w-none brightness-100 contrast-100 saturate-200 rotate-[95deg]
                             w-[18rem] -bottom-8 -right-8
                             lg:w-[32rem] lg:-bottom-[22rem] lg:right-0 lg:rotate-[90deg]"
                />
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-px shadow-sm ring-1 ring-white/10 rounded-3xl lg:rounded-tr-[40px] lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-br-2xl" />
          </div>

          {/* CARD 3: EL EQUIPO (Abajo Derecha) */}
          <div className="relative overflow-hidden rounded-3xl lg:col-span-2 group min-h-[350px] lg:min-h-0">
            <div className="absolute inset-px bg-white/5 backdrop-blur-sm rounded-3xl lg:rounded-br-[40px] lg:rounded-tr-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl" />
            
            <div className="flex flex-1 items-end justify-center px-8 max-lg:pt-10 max-lg:pb-0 sm:px-10 lg:pb-0"></div>

            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl lg:rounded-br-[40px] lg:rounded-tr-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 flex flex-col sm:flex-row-reverse justify-between items-start gap-4 relative z-10">
                <div className="flex items-center justify-center p-4 self-center sm:self-start">
                  <img
                  src={Team}
                  alt="Team-svg"
                  // === ARREGLO RESPONSIVE ===
                  // Mobile: w-[14rem], bottom-0, right-0
                  // Desktop (lg:): TUS VALORES ORIGINALES (right-9, -bottom-[3rem])
                  // NOTA: Importante lg:right-9 para recuperar tu posición original
                  className="absolute max-w-none 
                             w-[14rem] -bottom-0 right-0
                             lg:w-[34rem] lg:-bottom-[4rem] lg:right-0"
                />
                </div>
                <div className="max-w-xl w-full">
                  <p className="mt-2 text-lg tracking-tight text-white max-lg:text-center">
                    El Equipo
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-400 max-lg:text-center">
                    Somos una alianza de arquitectos de datos, <br className="hidden sm:block"/>estrategas de ventas y expertos en automatización.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[60px] w-full grow overflow-hidden">
              </div>
            </div>

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