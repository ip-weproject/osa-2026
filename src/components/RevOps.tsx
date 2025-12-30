
import { Button } from "@/components/ui/button";
import { steps } from "../data/revopsData";


const RevOps = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#12141C] to-osa-black">
      <div className="container mx-auto md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Getting started with osaFlow is easy. Follow these simple steps to begin your osa journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="absolute -top-4 -left-4 bg-osa-black border rounded-md border-osa-cian/30 text-osa-cian font-bold  text-xl px-3 py-1">
                {step.number}
              </span>
              <div className="bg-osa-cian/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6 text-osa-cian">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-osa-cian hover:bg-osa-dark-cian text-white px-8">
            desp vemops bo..
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RevOps;
