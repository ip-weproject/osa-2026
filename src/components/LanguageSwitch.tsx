import { useLanguage } from '../context/LanguageContext';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="
      relative flex items-center p-1 w-16 h-8 rounded-full shadow-inner transition-all duration-300
      /* COLORES BASE ADAPTATIVOS */
      bg-gray-100 border-gray-200 border
      dark:bg-[#11131A] dark:border-white/20
    ">
      
      {/* --- LA PÍLDORA (FONDO MÓVIL) --- */}
      <div
        className={`
          absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full 
          transition-all duration-300 ease-out
          
          /* COLOR PÍLDORA: Negra en Light, Blanca en Dark */
          bg-gray-900 shadow-sm
          dark:bg-white dark:shadow-[0_0_10px_rgba(255,255,255,0.3)]
          
          ${language === 'en' ? 'translate-x-full' : 'translate-x-0'}
        `}
      />

      {/* --- BOTÓN ES --- */}
      <button
        onClick={() => setLanguage("es")}
        className={`
          relative z-10 w-1/2 text-[0.7rem] font-bold text-center transition-colors duration-300
          ${language === 'es' 
            ? 'text-white dark:text-black' 
            : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'}
        `}
      >
        ES
      </button>

      {/* --- BOTÓN EN --- */}
      <button
        onClick={() => setLanguage("en")}
        className={`
          relative z-10 w-1/2 text-[0.7rem] font-bold text-center transition-colors duration-300
          ${language === 'en' 
            ? 'text-white dark:text-black' 
            : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'}
        `}
      >
        EN
      </button>
      
    </div>
  );
};

export default LanguageSwitch;