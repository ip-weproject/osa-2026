import { Activity, Database, GitBranch, Zap, Globe, Cpu, CheckCircle2 } from 'lucide-react';
import { services } from '../data/servicesData'; 
import Chart from '../assets/Chart.png';
import Auto from '../assets/Auto.png';
import Inte from '../assets/Inte.png';
import Esca from '../assets/Esca.png';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-osa-black to-[#12141C]">
      <div className="container mx-auto px-6 md:px-6 lg:px-20 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl mb-6 text-gradient">
            Potenciamos tu <span className="text-gradient">Motor de Ingresos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Infraestructura diseñada para la escalabilidad. Cada pieza de tu operación, optimizada y conectada.
          </p>
        </div>

        {/* --- BENTO GRID ASIMÉTRICO --- */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-rows-2 gap-6">

          {/* === CARD 1: DASHBOARD / ANALYTICS === */}
            <div className="
              md:col-span-3 row-span-1 group 
              relative overflow-hidden  
              rounded-tl-[40px] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl 
              bg-white/5 border border-white/10 transition-colors
              min-h-[350px] md:min-h-0
            ">
              {/* 1. CONTENIDO DE TEXTO */}
              <div className="p-8 pb-0 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl text-white">Auditoría & Datos</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6 max-w-sm">
                  Visibilidad total de tu pipeline. Transformamos datos crudos en dashboards de decisión ejecutiva.
                </p>
              </div>
                  
                  {/* 2. IMAGEN */}
                  <img
                    src={Chart}
                    alt="Chart-svg"
                    // RESPONSIVE:
                    // Mobile: w-[20rem] -right-8 (más pequeña y escondida)
                    // Desktop (md:): TUS VALORES ORIGINALES (w-[34rem] -right-0)
                    className="absolute max-w-none
                               w-[20rem] -bottom-4 -right
                               md:-bottom-[12rem] md:-right-[11rem] md:w-[40rem] rotate-[10deg]" 
                  />
          </div>

          {/* === CARD 2: ACTIVITY FEED / CRM (Grande - Derecha) === */}
          <div className="md:col-span-3 row-span-1 group relative overflow-hidden 
            rounded-tr-[40px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl 
            bg-white/5 border border-white/10 transition-colors
            min-h-[350px] md:min-h-0">
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl text-white">Implementación CRM</h3>
                </div>
                {/* <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">v2.4.0</span> */}
              </div>
              <p className="text-gray-400 text-sm mb-6 max-w-sm">
                Configuraciones que escalan. Flujos de trabajo automatizados que eliminan el trabajo manual.
              </p>
              
              {/* Visual: Lista de actividad */}
              <div className="space-y-3 mt-6">
                {[
                  { user: "Salesforce", action: "", time: "", color: "bg-cyan-500" },
                  { user: "HubSpot", action: "", time: "", color: "bg-orange-500" }
                  // { user: "Slack", action: "Notification sent", time: "1h ago", color: "bg-emerald-500" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-full bg-white/5 border border-white/5 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    <div className="flex-1 text-sm text-gray-300">
                      <span className="font-semibold text-white">{item.user}</span> {item.action}
                    </div>
                    <span className="text-xs text-gray-600 font-mono">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* === CARD 3: AUTOMATION (Pequeña - Izquierda) === */}
          <div className="md:col-span-2 row-span-1 group relative overflow-hidden 
            rounded-bl-[40px] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl 
            bg-white/5 border border-white/10 transition-colors
            min-h-[300px] md:min-h-0">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                 <h3 className="text-lg text-white">Automatización</h3>
              </div>
              <p className="text-gray-400 text-xs mb-8 relative z-10">
                Reduce el ciclo de ventas eliminando tareas repetitivas.
              </p>
                  <img
                    src={Auto}
                    alt="Auto-svg"
                    // RESPONSIVE:
                    // Mobile: w-[14rem], abajo a la derecha
                    // Desktop (md:): TUS VALORES ORIGINALES (right-[4rem], -bottom-[6rem])
                    className="absolute max-w-none
                               w-[14rem] -bottom-4 -right-4
                               md:-bottom-[2rem] md:right-[1rem] md:w-[22rem] rotate-[0deg]" 
                  />
            </div>
          </div>

          {/* === CARD 4: INTEGRATIONS (Pequeña - Centro) === */}
          <div className="md:col-span-2 row-span-1 group relative overflow-hidden 
            rounded-2xl 
            bg-white/5 border border-white/10 transition-colors
            min-h-[300px] md:min-h-0">
             <div className="p-6 h-full flex flex-col items-center text-center">
              <h3 className="text-lg text-white mb-2">Integraciones</h3>
              <p className="text-gray-400 text-xs mb-6 relative z-10">
                Conecta tu stack tecnológico en un ecosistema unificado.
              </p>

              {/* Visual: Orbit System */}
              <div className="relative w-40 h-40 mt-auto flex items-center justify-center">

                <img
                    src={Inte}
                    alt="Inte-svg"
                    // RESPONSIVE:
                    // Mobile: w-[16rem], centrado/abajo
                    // Desktop (md:): TUS VALORES ORIGINALES (-right-[4rem])
                    className="absolute max-w-none
                               w-[16rem] -bottom-8 -right-4
                               md:-bottom-[3rem] md:-right-[14rem] md:w-[38rem]" 
                  />
              </div>
            </div>
          </div>

          {/* === CARD 5: NETWORK / SCALE (Pequeña - Derecha) === */}
          <div className="md:col-span-2 row-span-1 group relative overflow-hidden 
            rounded-br-[40px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl 
            bg-white/5 border border-white/10 transition-colors
            min-h-[300px] md:min-h-0">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                 <h3 className="text-lg text-white">Escalabilidad</h3>
              </div>
              <p className="text-gray-400 text-xs mb-6 relative z-10">
                Infraestructura lista para soportar crecimiento global.
              </p>

                   <img
                    src={Esca}
                    alt="Esca-svg"
                    // RESPONSIVE:
                    // Mobile: w-[18rem], esquina
                    // Desktop (md:): TUS VALORES ORIGINALES (-right-[2rem])
                    className="absolute max-w-none
                               w-[18rem] -bottom-8 -right-8
                               md:-bottom-[10rem] md:-right-[2rem] md:w-[22rem]" 
                  />
            </div>
          </div>
                  
        </div>
      </div>
    </section>
  );
};

export default Services;