import { Activity, Database, GitBranch, Zap, Globe, Cpu, CheckCircle2 } from 'lucide-react';
import Chart from '../assets/Chart.png';
import Auto from '../assets/Auto.png';
import Inte from '../assets/Inte.png';
import Esca from '../assets/Esca.png';
import Crm from '../assets/CRM.png';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  // Clases compartidas para las Cards
  // Light Mode: Fondo oscuro antracita -> Negro puro en hover
  // Dark Mode: Mantiene tu configuración original de transparencia
  const cardBaseClasses = `
    group relative overflow-hidden transition-all duration-500
    bg-[#262525] hover:bg-[#050505] 
    dark:bg-white/5 dark:hover:bg-white/10
    border border-white/5 dark:border-white/10
  `;

  // El texto es blanco/gris claro siempre porque el fondo de la card es oscuro en ambos modos
  const textTitle = "transition-colors duration-500 text-white";
  const textDesc = "transition-colors duration-500 text-gray-400 group-hover:text-gray-300";
  
  // Clases para las imágenes: Visibles pero con escala leve en hover
  // Mantenemos opacity-100 para que no se vea "vacío" el bento
  const imgSpace = "transition-all duration-700 opacity-100 scale-[0.98] group-hover:scale-100 pointer-events-none";

  return (
    <section id="services" className="py-24 bg-background transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-32">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl mb-6 text-gradient">
            {t.services.title} <span className="text-gradient">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg transition-colors">
            {t.services.subtitle}
          </p>
        </div>

        {/* --- BENTO GRID ASIMÉTRICO --- */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-rows-2 gap-6">

          {/* === CARD 1: DASHBOARD / ANALYTICS === */}
          <div className={`${cardBaseClasses} md:col-span-3 row-span-1 rounded-t-[50px] rounded-b-2xl lg:rounded-tl-[40px] lg:rounded-tr-2xl lg:rounded-bl-2xl lg:rounded-br-2xl min-h-[350px] md:min-h-0`}>
            <div className="p-8 pb-0 relative z-10">
              <h3 className={`text-lg mb-4 font-medium ${textTitle}`}>{t.services.cards.audit.title}</h3>
              <p className={`text-sm max-w-sm ${textDesc}`}>{t.services.cards.audit.desc}</p>
            </div>
            <img
              src={Chart}
              alt="Chart"
              className={`${imgSpace} absolute max-w-none w-[40rem] -bottom-[14rem] -right-[11rem] md:-bottom-[11rem] md:-right-[5rem] md:w-[32rem] rotate-[13deg]`} 
            />
          </div>

          {/* === CARD 2: CRM === */}
          <div className={`${cardBaseClasses} md:col-span-3 row-span-1 rounded-2xl lg:rounded-tr-[40px] lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-br-2xl min-h-[350px] md:min-h-0`}>
            <div className="p-8 relative z-10">
              <h3 className={`text-lg mb-4 font-medium ${textTitle}`}>{t.services.cards.crm.title}</h3>
              <p className={`text-sm max-w-sm ${textDesc}`}>{t.services.cards.crm.desc}</p>
            </div>
            <img
              src={Crm}
              alt="Crm"
              className={`${imgSpace} absolute max-w-none w-[22rem] bottom-5 -right-[0rem] md:-bottom-[0rem] md:-right-[0.5rem] md:w-[24rem] lg:w-[24rem] xl:w-[37rem] xl:-right-[1rem] xl:-bottom-[2rem]`} 
            />
          </div>

          {/* === CARD 3: AUTOMATION === */}
          <div className={`${cardBaseClasses} md:col-span-2 row-span-1 rounded-2xl lg:rounded-bl-[40px] lg:rounded-tl-2xl lg:rounded-tr-2xl lg:rounded-br-2xl min-h-[300px] md:min-h-0`}>
            <div className="p-6 h-full flex flex-col relative z-10">
              <h3 className={`text-lg mb-3 font-medium ${textTitle}`}>{t.services.cards.automation.title}</h3>
              <p className={`text-sm mb-8 ${textDesc}`}>{t.services.cards.automation.desc}</p>
            </div>
            <img
              src={Auto}
              alt="Auto"
              className={`${imgSpace} absolute max-w-none w-[22rem] -bottom-6 -right-[0rem] md:-bottom-[2rem] md:-right-[3rem] md:w-[22rem] lg:w-[24rem] xl:w-[26rem]`} 
            />
          </div>

          {/* === CARD 4: INTEGRATIONS === */}
          <div className={`${cardBaseClasses} md:col-span-2 row-span-1 rounded-2xl min-h-[300px] md:min-h-0`}>
            <div className="p-6 h-full flex flex-col items-center text-center relative z-10">
              <h3 className={`text-lg mb-2 font-medium ${textTitle}`}>{t.services.cards.integrations.title}</h3>
              <p className={`text-sm mb-6 ${textDesc}`}>{t.services.cards.integrations.desc}</p>
              <div className="relative w-40 h-40 mt-auto flex items-center justify-center">
                <img
                  src={Inte}
                  alt="Inte"
                  className={`${imgSpace} absolute max-w-none w-[34rem] -bottom-[3rem] -right-[11rem] md:-bottom-[3rem] md:-right-[14rem] md:w-[38rem]`} 
                />
              </div>
            </div>
          </div>

          {/* === CARD 5: NETWORK / SCALE === */}
          <div className={`${cardBaseClasses} md:col-span-2 row-span-1 rounded-t-2xl rounded-b-[50px] lg:rounded-br-[40px] lg:rounded-tl-2xl lg:rounded-tr-2xl lg:rounded-bl-2xl min-h-[300px] md:min-h-0`}>
            <div className="p-6 h-full flex flex-col relative z-10">
              <h3 className={`text-lg mb-3 font-medium ${textTitle}`}>{t.services.cards.scalability.title}</h3>
              <p className={`text-sm mb-6 ${textDesc}`}>{t.services.cards.scalability.desc}</p>
            </div>
            <img
              src={Esca}
              alt="Esca"
              className={`${imgSpace} absolute max-w-none w-[18rem] -bottom-24 -right-8 md:-bottom-[13rem] md:-right-[2rem] md:w-[22rem]`} 
            />
          </div>
                  
        </div>
      </div>
    </section>
  );
};

export default Services;