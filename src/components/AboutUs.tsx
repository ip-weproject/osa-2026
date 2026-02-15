import { useState, useEffect, useRef } from 'react';
import Mision from "../assets/Mision.png";
import Filo from "../assets/Filo.png";
import Team from "../assets/Team.png";
import { useLanguage } from '../context/LanguageContext';

interface Stat {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
}

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
          let currentCount = 0;
          const totalFrames = (duration / 1000) * 60;
          const increment = end / totalFrames;
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
  const { t } = useLanguage();

  // Lógica de Fondo Oscuro Base:
  // Light: Antracita -> Negro puro en hover.
  // Dark: Vidrio (white/5) -> Brillo extra (white/10).
  const cardBgClasses = `
    absolute inset-0 transition-all duration-500 ease-in-out -z-10
    bg-[#1a1c23] group-hover:bg-[#050505] 
    dark:bg-white/5 dark:group-hover:bg-white/10
  `;

  // El texto es blanco/gris claro siempre porque el fondo de la card es oscuro en ambos modos
  const textTitle = "transition-colors duration-500 text-white";
  const textSub = "transition-colors duration-500 text-gray-400 group-hover:text-gray-300";

  // Las imágenes espaciales son visibles por defecto para no dejar vacíos,
  // y reaccionan levemente al hover.
  const imgClasses = "transition-all duration-700 opacity-100 scale-[0.98] group-hover:scale-100 pointer-events-none";

  const stats: Stat[] = [
    { value: 5, prefix: "+", suffix: "", label: t.about.stats.experience },
    { value: 30, prefix: "+", suffix: "", label: t.about.stats.projects },
    { value: 100, prefix: "", suffix: "%", label: t.about.stats.dataFocus },
    { value: 24, prefix: "", suffix: "/7", label: t.about.stats.support },
  ];

  return (
    <section id="about" className="py-24 relative transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-32 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 text-center leading-tight">
            <span className="text-gradient inline box-decoration-clone pb-2">
              {t.about.title}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed transition-colors">
            {t.about.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-2 mb-16">

          {/* CARD 1 */}
          <div className="relative lg:row-span-2 group">
            <div className={cn(cardBgClasses, "rounded-t-[50px] rounded-b-2xl lg:rounded-l-[40px] lg:rounded-r-2xl")} />
            {/* Ajuste: min-h-[450px] para dar espacio en móvil y text-center */}
            <div className="relative flex h-full flex-col overflow-hidden rounded-t-[50px] rounded-b-2xl lg:rounded-l-[40px] lg:rounded-r-2xl min-h-[300px] lg:min-h-0 text-center lg:text-left">
              <div className="px-8 pt-8 sm:px-10 relative z-10 flex-grow">
                <p className={`mt-2 text-lg font-medium ${textTitle}`}>{t.about.missionTitle}</p>
                <p className={`mt-2 text-sm/6 ${textSub}`}>{t.about.missionText}</p>
              </div>
              {/* Ajuste: centrado y tamaño para móvil */}
              <div className="absolute inset-0 flex items-end justify-end">
                <img
                  src={Mision}
                  alt="Mision"
                  className={`${imgClasses} max-w-none w-[30rem] -mr-8 mb-[-8rem] lg:w-[32rem] lg:-mr-[4rem] lg:mb-[-8rem]`}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5 dark:ring-white/10 rounded-t-[50px] rounded-b-2xl lg:rounded-l-[40px] lg:rounded-r-2xl" />
          </div>

          {/* CARD 2: NUESTRA FILOSOFÍA (CENTRADOR) */}
          <div className="relative lg:col-span-2 group">
            <div className={cn(cardBgClasses, "rounded-2xl lg:rounded-tr-[40px] lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-br-2xl")} />
            {/* Ajuste: min-h-[450px] para dar espacio en móvil */}
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl lg:rounded-tr-[40px] lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-br-2xl min-h-[300px] lg:min-h-0">
              <div className="px-8 py-8 sm:px-10 flex flex-col lg:flex-row justify-between items-center relative z-10 text-center lg:text-left">
                <div className="max-w-md flex-grow">
                  <p className={`mt-2 text-lg font-medium ${textTitle}`}>{t.about.philosophyTitle}</p>
                  <p className={`mt-2 text-sm/6 ${textSub}`}>{t.about.philosophyText}</p>
                </div>
                {/* Ajuste: centrado y tamaño para móvil */}
                <div className="relative w-full h-40 sm:h-32 overflow-visible mt-8 lg:mt-0">
                  <img
                    src={Filo}
                    alt="Filo"
                  className={`${imgClasses} absolute max-w-none rotate-[125deg] w-[28rem] -bottom-[9rem] -right-12 lg:w-[32rem] lg:-bottom-[18rem] lg:-right-[10rem] lg:rotate-[80deg] xl:-right-[6rem] xl:-bottom-[15rem]`}
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5 dark:ring-white/10 rounded-2xl lg:rounded-tr-[40px] lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-br-2xl" />
          </div>

          {/* CARD 3 */}
          <div className="relative lg:col-span-2 group">
            <div className={cn(cardBgClasses, "rounded-t-2xl rounded-b-[50px] lg:rounded-br-[40px] lg:rounded-tr-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl")} />
            {/* Ajuste: min-h-[450px] para dar espacio en móvil */}
            <div className="relative flex h-full flex-col overflow-hidden rounded-t-2xl rounded-b-[50px] lg:rounded-br-[40px] lg:rounded-tr-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl min-h-[300px] lg:min-h-0">
              <div className="px-8 pt-8 sm:px-10 relative z-20 text-center lg:text-left flex-grow">
                <div className="max-w-xl mx-auto lg:mx-0">
                  <p className={`mt-2 text-lg font-medium ${textTitle}`}>{t.about.teamTitle}</p>
                  <p className={`mt-2 text-sm/6 ${textSub}`}>
                    {t.about.teamText} <br className="hidden sm:block" /> {t.about.teamExtra}
                  </p>
                </div>
              </div>
              {/* Ajuste: centrado y tamaño para móvil */}
              <img
                src={Team}
                alt="Team"
                className={`${imgClasses} absolute z-10 max-w-none w-[58rem] -right-[19rem] bottom-6 rotate-[90deg] lg:w-fill lg:-bottom-[4rem] lg:-right-8 lg:rotate-0`}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5 dark:ring-white/10 rounded-t-2xl rounded-b-[50px] lg:rounded-br-[40px] lg:rounded-tr-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl" />
          </div>

        </div>

        {/* Stats */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-12 transition-colors">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-5xl text-gradient mb-1 tabular-nums">
                  <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
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

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default AboutUs;