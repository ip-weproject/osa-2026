import { Activity, Lock, Zap, Compass, LineChart, Shield } from 'lucide-react';
import { services } from '../data/servicesData';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-osa-black to-[#12141C]">
      <div className="container mx-auto md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-gradient">
            Servicios
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Work with your team to fix bugs faster with shared reports and issue tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((feature, index) => (
            <div 
              key={index}
              // CLASES EXACTAS DE ABOUT US:
              // 1. Quitamos 'animate-on-scroll' y 'hover:shadow-xl'
              // 2. Cambiamos p-6 a p-8
              // 3. Mantenemos la estructura group/hover exacta
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 animate-on-scroll"
              
              // ELIMINADO EL STYLE DE ANIMATION DELAY
              // style={{ animationDelay: `${index * 0.1}s` }} 
            >
              <div className="bg-osa-white/5 rounded-lg w-12 h-12 flex items-center justify-center mb-5 text-osa-blue transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl mb-3 text-white font-bold">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;