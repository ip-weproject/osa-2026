import { Activity, Database, GitBranch, Zap, Globe, Cpu, CheckCircle2 } from 'lucide-react';
import { services } from '../data/servicesData'; // Asumo que tienes 5 o 6 servicios aquí
import Chart from '../assets/Chart.svg';
import Auto from '../assets/Auto.svg';
import Inte from '../assets/Inte.svg';
import Esca from '../assets/Esca.svg';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-osa-black to-[#12141C]">
      <div className="container mx-auto md:px-6 lg:px-20 max-w-7xl">
        
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
        {/* Grid de 6 columnas y 2 filas para control total del layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-rows-2 gap-6">

          {/* === CARD 1: DASHBOARD / ANALYTICS === */}
            <div className="
              md:col-span-3 row-span-1 group 
              relative overflow-hidden  
              rounded-tl-[40px] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl 
              bg-white/5 border border-white/10 transition-colors
            ">
              {/* 1. CONTENIDO DE TEXTO (Con Padding) */}
              <div className="p-8 pb-0 relative z-10"> {/* z-10 para que el texto quede sobre la imagen si se cruzan */}
                <div className="flex items-center gap-3 mb-4">
                  {/* <div className="p-2 bg-osa-blue/20 rounded-lg text-osa-blue"><Activity size={20} /></div> */}
                  <h3 className="text-xl text-white">Auditoría & Datos</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6 max-w-sm">
                  Visibilidad total de tu pipeline. Transformamos datos crudos en dashboards de decisión ejecutiva.
                </p>
              </div>
                  {/* 2. IMAGEN (Absoluta y "suelta") */}
                  {/* Eliminé el div 'flex' que la envolvía porque no sirve de nada si la imagen es absolute */}
                  <img
                    src={Chart}
                    alt="Chart-svg"
                    className="absolute -bottom-2 -right-0 w-[34rem] max-w-none" 
                  />
          </div>

          {/* === CARD 2: ACTIVITY FEED / CRM (Grande - Derecha) === */}
          {/* Ocupa 3 columnas (mitad superior derecha) */}
          <div className="md:col-span-3 row-span-1 group relative overflow-hidden 
            rounded-tr-[40px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl 
            bg-white/5 border border-white/10 transition-colors">
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  {/* <div className="p-2 bg-osa-cian/20 rounded-lg text-osa-cian"><GitBranch size={20} /></div> */}
                  <h3 className="text-xl text-white">Implementación CRM</h3>
                </div>
                <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">v2.4.0</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 max-w-sm">
                Configuraciones que escalan. Flujos de trabajo automatizados que eliminan el trabajo manual.
              </p>
              
              {/* Visual: Lista de actividad estilo GitHub/Linear */}
              <div className="space-y-3 mt-6">
                {[
                  { user: "HubSpot", action: "Deal stage updated", time: "2m ago", color: "bg-orange-500" },
                  { user: "Stripe", action: "Payment captured", time: "15m ago", color: "bg-indigo-500" },
                  { user: "Slack", action: "Notification sent", time: "1h ago", color: "bg-emerald-500" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
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
          {/* Ocupa 2 columnas (esquina inferior izquierda) */}
          <div className="md:col-span-2 row-span-1 group relative overflow-hidden 
            rounded-bl-[40px] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl 
            bg-white/5 border border-white/10 transition-colors">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                 {/* <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Zap size={20} /></div> */}
                 <h3 className="text-lg text-white">Automatización</h3>
              </div>
              <p className="text-gray-400 text-xs mb-8">
                Reduce el ciclo de ventas eliminando tareas repetitivas.
              </p>

              {/* Visual: Teclado abstracto CSS */}
                                  {/* 2. IMAGEN (Absoluta y "suelta") */}
                  {/* Eliminé el div 'flex' que la envolvía porque no sirve de nada si la imagen es absolute */}
                  <img
                    src={Auto}
                    alt="Auto-svg"
                    className="absolute -bottom-6 right-[5rem] w-[12rem] max-w-none" 
                  />
            </div>
          </div>

          {/* === CARD 4: INTEGRATIONS (Pequeña - Centro) === */}
          {/* Ocupa 2 columnas (centro abajo, sin esquinas externas) */}
          <div className="md:col-span-2 row-span-1 group relative overflow-hidden 
            rounded-2xl 
            bg-white/5 border border-white/10 transition-colors">
             <div className="p-6 h-full flex flex-col items-center text-center">
              {/* <div className="mb-4 inline-block p-2 bg-osa-cian/20 rounded-lg text-osa-cian"><Cpu size={20} /></div> */}
              <h3 className="text-lg text-white mb-2">Integraciones</h3>
              <p className="text-gray-400 text-xs mb-6">
                Conecta tu stack tecnológico en un ecosistema unificado.
              </p>

              {/* Visual: Orbit System */}
              <div className="relative w-40 h-40 mt-auto flex items-center justify-center">

                <img
                    src={Inte}
                    alt="Inte-svg"
                    className="absolute -bottom-[10rem] -right-[5rem] w-[20rem] max-w-none" 
                  />


                 {/* Círculos orbitales */}
                 {/* <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                 <div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" /> */}
                 
                 {/* Núcleo */}
                 {/* <div className="w-12 h-12 bg-gradient-to-br from-osa-cian to-osa-blue rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)] z-10">
                    <Database size={20} className="text-white" />
                 </div> */}

                 {/* Satélites flotantes (Simulados) */}
                 {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30 text-[10px] text-orange-400">Hub</div>
                 <div className="absolute bottom-4 right-4 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30 text-[10px] text-blue-400">SF</div> */}
              </div>
            </div>
          </div>

          {/* === CARD 5: NETWORK / SCALE (Pequeña - Derecha) === */}
          {/* Ocupa 2 columnas (esquina inferior derecha) */}
          <div className="md:col-span-2 row-span-1 group relative overflow-hidden 
            rounded-br-[40px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl 
            bg-white/5 border border-white/10 transition-colors">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                 {/* <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><Globe size={20} /></div> */}
                 <h3 className="text-lg text-white">Escalabilidad</h3>
              </div>
              <p className="text-gray-400 text-xs mb-6">
                Infraestructura lista para soportar crecimiento global.
              </p>

                   <img
                    src={Esca}
                    alt="Esca-svg"
                    className="absolute -bottom-[8rem] -right-[2rem] w-[22rem] max-w-none" 
                  />
            </div>
          </div>
                  
        </div>
      </div>
    </section>
  );
};

export default Services;