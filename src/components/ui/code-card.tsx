import React from 'react';

const CodeCard = () => {
  return (
    <div className="w-full max-w-[424px] overflow-hidden rounded-2xl border border-[rgba(182,157,255,0.20)] bg-[rgba(7,7,7,0.80)] px-8 pt-8 backdrop-blur-[40px] shadow-2xl">
      
      <h3 className="mb-3 text-xl font-medium text-[#E9E9E9] tracking-tight">
        Real-Time Bug Detection
      </h3>
      <p className="text-[#9192A1] mb-6 text-sm leading-relaxed">
        Instantly identify coding errors as you write, helping you catch mistakes before they cause bigger problems.
      </p>

      {/* Contenedor del Bloque de Código */}
      <div className="min-h-[325px] relative">
        
        {/* Usamos la fuente global (Inter Tight) que ya configuramos en CSS.
            CodeFus usa letras sans-serif en sus ejemplos de código de marketing para que sean más legibles. */}
        <div className="relative pt-6 rounded-lg overflow-x-auto text-sm leading-6">
          
          <pre className="m-0 whitespace-pre-wrap break-all bg-transparent font-sans">
            <code>
              {/* He ajustado los colores para que resalten sobre el fondo oscuro */}
              <span className="text-[#569CD6]">const</span> <span className="text-[#DCDCAA]">processNumbers</span> <span className="text-[#D4D4D4]">=</span> (<span className="text-[#DCDCAA]">numbers</span>: <span className="text-[#569CD6]">number</span>[]) <span className="text-[#D4D4D4]">{'=>'}</span> {'{'}
{'\n'}  <span className="text-[#569CD6]">const</span> <span className="text-[#DCDCAA]">processed</span> <span className="text-[#D4D4D4]">=</span> <span className="text-[#DCDCAA]">numbers</span>
{'\n'}    .<span className="text-[#DCDCAA]">filter</span>(<span className="text-[#DCDCAA]">num</span> <span className="text-[#D4D4D4]">{'=>'}</span> <span className="text-[#DCDCAA]">num</span> % <span className="text-[#B5CEA8]">2</span> === <span className="text-[#B5CEA8]">0</span>)
{'\n'}    .<span className="text-[#DCDCAA]">map</span>(<span className="text-[#DCDCAA]">num</span> <span className="text-[#D4D4D4]">{'=>'}</span> <span className="text-[#DCDCAA]">num</span> * <span className="text-[#DCDCAA]">num</span>);
{'\n'}
{'\n'}  <span className="text-[#569CD6]">console</span>.<span className="text-[#DCDCAA]">log</span>(<span className="text-[#CE9178]">'Original:'</span>, <span className="text-[#DCDCAA]">numbers</span>);
{'\n'}  <span className="text-[#569CD6]">console</span>.<span className="text-[#DCDCAA]">log</span>(<span className="text-[#CE9178]">'Processed:'</span>, <span className="text-[#DCDCAA]">processed</span>);
{'\n'}  <span className="text-[#569CD6]">const</span> <span className="text-[#DCDCAA]">sum</span> <span className="text-[#D4D4D4]">=</span> <span className="text-[#DCDCAA]">processed</span>.<span className="text-[#DCDCAA]">reduce</span>((<span className="text-[#DCDCAA]">acc</span>, <span className="text-[#DCDCAA]">val</span>) <span className="text-[#D4D4D4]">{'=>'}</span> <span className="text-[#DCDCAA]">acc</span> + <span className="text-[#DCDCAA]">val</span>, <span className="text-[#B5CEA8]">0</span>);
{'\n'}  <span className="text-[#569CD6]">console</span>.<span className="text-[#DCDCAA]">log</span>(<span className="text-[#CE9178]">'Sum:'</span>, <span className="text-[#DCDCAA]">sum</span>);
{'\n'} {'}'}
            </code>
          </pre>
        </div>

        {/* Viñeta para difuminar el final */}
        <div 
          className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none rounded-lg"
          style={{ background: 'radial-gradient(ellipse at center, transparent 10%, rgba(7,7,7,0.95) 90%)' }}
        ></div>
      </div>
    </div>
  );
};

export default CodeCard;